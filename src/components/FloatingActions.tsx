import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919908224832';
const PHONE_NUMBER = '+919908224832';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello, I would like to enquire about Shamshabad Properties.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <div
      className={`fixed right-4 sm:right-6 top-[58%] -translate-y-1/2 z-50 flex flex-col gap-3 transition-all duration-500 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      }`}
    >
      <button
        onClick={handleWhatsApp}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={handleCall}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-lg shadow-gold/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-gold/40"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-emerald" />
      </button>
    </div>
  );
}
