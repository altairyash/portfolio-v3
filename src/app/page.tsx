import AskAI from "@/components/ask-ai";
import CopyButton from "@/components/copy";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { bricolage_grotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-5">
          <div className="gap-2 flex justify-between pt-8">
            <div className="items-left flex flex-col flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className={cn(
                  `text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none ${bricolage_grotesque}`
                )}
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} `}
              />
              <div>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <Markdown
                    className="prose max-w-full text-pretty font-sans text-sm text-black dark:prose-invert dark:text-white !font-light"
                    remarkPlugins={[remarkBreaks]}
                  >
                    {DATA.summary}
                  </Markdown>
                </BlurFade>
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 w-full items-center">
          <div className="flex flex-col">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="mt-8 flex gap-4">
                <Link href={"https://calendly.com/yash140498/30min"}>
                  <RainbowButton className="h-10 max-sm:h-10 text-sm px-5 max-sm:px-5 py-1 max-sm:py-0">
                    Discuss Your Project{" "}
                    <ArrowTopRightIcon className="font-bold ml-2" />
                  </RainbowButton>
                </Link>
                <Link href="#contact">
                  <RainbowButton className="h-10 max-sm:h-10 text-sm px-5 max-sm:px-5 py-1 max-sm:py-0">
                    Hire ▾
                  </RainbowButton>
                </Link>
              </div>
            </BlurFade>
          </div>
          <div className="flex flex-col items-end">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <span className="flex mt-4 gap-x-4 max-w-full text-pretty font-sans text-xs text-gray-800 dark:text-gray-200 italic items-center underline underline-offset-2">
                <Link href={DATA.contact.social.email.url}>
                  {DATA.contact.email}
                </Link>
                <CopyButton text={DATA.contact.email} />
              </span>
            </BlurFade>
          </div>
        </div>
      </section>
      <div className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <AskAI />
        </BlurFade>
      </div>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" className="flex flex-col gap-y-2">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                  Check out my latest work
                </h2>
                <p className="prose max-w-full text-pretty font-sans text-sm text-black dark:prose-invert dark:text-white !font-light">
                  Recently I have been working on genAI tools and applications.
                  I am also interested in building applications that help people
                  in their daily lives.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  logo={project.logo}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Looking to hire ? Just shoot me a mail{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                >
                  here.
                </Link>{" "}
                <br />I repsond the quickest to mails.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
