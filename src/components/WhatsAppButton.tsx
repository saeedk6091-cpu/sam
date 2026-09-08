import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-xl p-4 w-64 border border-border-light animate-fade-in-up">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 left-2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
          <p className="text-sm font-bold text-brand-dark mb-1">سلام! 👋</p>
          <p className="text-xs text-gray-500 leading-5">
            برای مشاوره رایگان و استعلام قیمت، از طریق واتساپ با ما در ارتباط باشید.
          </p>
          <a
            href="https://wa.me/989121234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full bg-green-500 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
          >
            شروع گفتگو
          </a>
        </div>
      )}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="واتساپ"
      >
        {showTooltip ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
}
