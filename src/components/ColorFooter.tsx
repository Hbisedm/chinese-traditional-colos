import React from 'react';
import { Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function ColorFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} 中国传统色 Chinese Traditional Colors.
          Fonts licensed under SIL OFL 1.1
        </p>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/imoyao/GUSCSS"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <Separator orientation="vertical" className="h-5" />
            <a
              href="https://github.com/imoyao/GUSCSS/blob/master/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              MIT License
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
