'use client';

import { CopyIcon } from '@radix-ui/react-icons';
import { CopyCheckIcon } from 'lucide-react';
import { useState } from 'react';

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.warn('Clipboard API not supported');
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 flex items-center justify-center text-xs rounded-sm border-gray-500 border-[1px] dark:text-white/50 text-black/60 "
      style={{ width: '1.5rem', height: '1.5rem' }}
    >
      {copied ? (
      <CopyCheckIcon className="h-3 w-3 dark:text-green-500 text-green-900" />
      ) : (
      <CopyIcon className="h-3 w-3" />
      )}
    </button>
  );
}