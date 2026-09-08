import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, CheckCircle } from 'lucide-react';

const offices = [
  { city: 'تهران (دفتر مرکزی)', address: 'فرودگاه بین‌المللی امام خمینی، ساختمان کارگو', phone: '۰۲۱-۱۲۳۴۵۶۷۸' },
  { city: 'دبی', address: 'Dubai Cargo Village, DDC', phone: '+971-4-234-5678' },
  { city: 'شانگهای', address: 'Pudong Airport Cargo Terminal', phone: '+86-21-1234-5678' },
  { city: 'فرانکفورت', address: 'Frankfurt Airport Cargo City South', phone: '+49-69-1234-5678' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <span className="text-brand-orange">تماس با ما</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">تماس با ما</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ما آماده پاسخگویی به سوالات و نیازهای شما هستیم
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 border border-border-light text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-brand-orange" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">تلفن</h3>
              <p className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="text-gray-600">۰۲۱-۸۷۶۵۴۳۲۱</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border-light text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">ایمیل</h3>
              <p className="text-gray-600">info@barhavaei.ir</p>
              <p className="text-gray-600">sales@barhavaei.ir</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border-light text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-brand-orange" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">واتساپ</h3>
              <p className="text-gray-600">۰۹۱۲-۱۲۳-۴۵۶۷</p>
              <p className="text-sm text-gray-400 mt-1">پاسخگویی ۲۴/۷</p>
            </div>
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-border-light">
              <div className="flex items-center gap-2 mb-6">
                <Clock size={20} className="text-brand-orange" />
                <span className="font-medium text-brand-dark">ساعات کاری: شنبه تا چهارشنبه ۸ تا ۱۷</span>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} className="text-brand-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark mb-2">پیام شما ارسال شد</h3>
                  <p className="text-gray-600">به زودی با شما تماس خواهیم گرفت</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی *</label>
                    <input
                      type="text" required
                      className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                      placeholder="نام کامل"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل *</label>
                      <input
                        type="email" required
                        className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">موبایل *</label>
                      <input
                        type="tel" required
                        className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                        placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">موضوع *</label>
                    <input
                      type="text" required
                      className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                      placeholder="موضوع پیام"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">پیام *</label>
                    <textarea
                      required rows={5}
                      className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange resize-none"
                      placeholder="متن پیام شما..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-orange text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    <span>ارسال پیام</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map + Offices */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-brand-dark to-gray-700 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={40} className="mx-auto mb-3 text-brand-orange" />
                  <p className="font-medium">تهران، فرودگاه بین‌المللی امام خمینی</p>
                  <p className="text-sm text-gray-400 mt-1">ساختمان کارگو</p>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl p-6 border border-border-light">
                <h3 className="font-bold text-brand-dark text-lg mb-4">دفاتر و نمایندگی‌ها</h3>
                <div className="space-y-4">
                  {offices.map((office, i) => (
                    <div key={i} className="flex items-start gap-3 pb-4 border-b border-border-light last:border-0 last:pb-0">
                      <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                        <MapPin size={16} className="text-brand-green" />
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-dark text-sm">{office.city}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{office.address}</p>
                        <p className="text-xs text-brand-orange mt-0.5">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
