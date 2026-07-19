import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export function MaintenanceNoticeDialog() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const handleVisitGallery = () => {
    window.open('https://www.tesla-wrap.com/ai', '_blank');
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Dialog */}
      <div className="relative bg-[#1c1c1e] border border-white/10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-6">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-tesla-red/20 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-tesla-red" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-white text-center mb-3">
            Tesla Wrap Studio is no longer maintained
          </h3>
          <p className="text-white/70 text-center text-sm mb-4 leading-relaxed">
            This editor is no longer receiving updates. Head over to the new{' '}
            <strong className="text-white">Tesla Wrap Gallery</strong>, where you can
            create wraps in seconds with AI &mdash; no manual designing needed.
          </p>
          <p className="text-white/50 text-center text-xs leading-relaxed">
            You can still use the Studio, but new features and fixes will only land in
            the Gallery.
          </p>
        </div>

        {/* Actions */}
        <div className="p-4 border-t border-white/10 flex items-center justify-center gap-3 bg-[#161618]">
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
          >
            Continue anyway
          </button>
          <button
            onClick={handleVisitGallery}
            className="px-5 py-2 bg-tesla-red hover:bg-tesla-red/90 text-white rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
          >
            Open Tesla Wrap Gallery
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
