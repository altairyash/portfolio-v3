import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const referer = req.headers.get("referer");
  if (!referer) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  try {
    const refererOrigin = new URL(referer).origin;
    if (refererOrigin !== process.env.ALLOWED_ORIGIN) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { query } = await req.json();
    if (!query) {
      return NextResponse.json(
        { response: "No query provided." },
        { status: 400 }
      );
    }

    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: query,
    });
    const queryEmbedding = embeddingRes.data[0].embedding;

    const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
    const index = pinecone
      .index(process.env.PINECONE_INDEX_NAME!, process.env.PINECONE_INDEX_HOST!)
      .namespace("portfolio");

    const result = await index.query({
      topK: 1,
      vector: queryEmbedding,
      includeMetadata: true,
    });

    const context = result.matches?.[0]?.metadata?.chunk_text || "";

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant for a personal portfolio website. Always answer clearly and briefly using a friendly, helpful tone. Use only the given context.",
        },
        {
          role: "user",
          content: `Context:\n${context}\n\nQuestion: ${query}\n\nReply in 1-2 short sentences.`,
        },
      ],
      temperature: 0.5,
      max_tokens: 100,
    });

    const answer = completion.choices[0].message.content;
    return NextResponse.json({ response: answer });
  } catch (err) {
    console.error("❌ Error in /api/query:", err);
    return NextResponse.json(
      { response: "Sorry, something went wrong." },
      { status: 500 }
    );
  }
}
