import { Sparkles, ArrowRight } from 'lucide-react';

export function MaintenanceBanner() {
  return (
    <a
      href="https://www.tesla-wrap.com/ai"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 py-2 bg-tesla-red hover:bg-tesla-red/90 text-white text-sm font-medium transition-colors relative z-[110]"
    >
      <Sparkles className="w-4 h-4 flex-shrink-0" />
      <span className="text-center">
        Tesla Wrap Studio is no longer maintained &mdash; create wraps easily with AI on{' '}
        <span className="underline underline-offset-2">tesla-wrap.com</span>
      </span>
      <ArrowRight className="w-4 h-4 flex-shrink-0" />
    </a>
  );
}
