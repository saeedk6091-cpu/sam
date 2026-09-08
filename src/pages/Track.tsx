import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle, Plane, Package, Truck, FileCheck, Home } from 'lucide-react';

const steps = [
  { icon: FileCheck, label: 'رزرو', desc: 'ثبت درخواست و رزرو فضا' },
  { icon: Package, label: 'دریافت', desc: 'دریافت محموله در مبدأ' },
  { icon: Plane, label: 'پرواز', desc: 'بارگیری و پرواز' },
  { icon: Plane, label: 'در مسیر', desc: 'محموله در حال انتقال' },
  { icon: Package, label: 'ورود', desc: 'ورود به فرودگاه مقصد' },
  { icon: FileCheck, label: 'ترخیص', desc: 'تشریفات گمرکی' },
  { icon: Home, label: 'تحویل', desc: 'تحویل به گیرنده' },
];

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setShowResult(true);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <span className="text-brand-orange">پیگیری محموله</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">پیگیری محموله</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            شماره بارنامه خود را وارد کنید تا وضعیت محموله‌تان را مشاهده کنید
          </p>
        </div>
      </section>

      {/* Track Widget */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="شماره بارنامه (مثال: KBH-2024-001234)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                  className="w-full border border-border-light rounded-lg pr-12 pl-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                />
              </div>
              <button
                onClick={handleTrack}
                className="gradient-orange text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all whitespace-nowrap"
              >
                پیگیری
              </button>
            </div>

            {/* Demo Result */}
            {showResult && (
              <div className="mt-8 animate-fade-in-up">
                <div className="bg-brand-light rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">شماره بارنامه</p>
                      <p className="font-bold text-brand-dark">{trackingNumber}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500">وضعیت</p>
                      <p className="font-bold text-brand-green">در مسیر</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">مبدأ</p>
                      <p className="font-medium text-brand-dark">تهران (IKA)</p>
                    </div>
                    <div>
                      <p className="text-gray-500">مقصد</p>
                      <p className="font-medium text-brand-dark">دبی (DXB)</p>
                    </div>
                    <div>
                      <p className="text-gray-500">وزن</p>
                      <p className="font-medium text-brand-dark">۲۵۰ کیلوگرم</p>
                    </div>
                    <div>
                      <p className="text-gray-500">تاریخ ارسال</p>
                      <p className="font-medium text-brand-dark">۱۴۰۳/۰۹/۱۵</p>
                    </div>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="relative">
                  <div className="absolute top-6 right-6 left-6 h-1 bg-border-light rounded-full">
                    <div className="h-full w-4/7 bg-brand-green rounded-full"></div>
                  </div>
                  <div className="relative grid grid-cols-7 gap-1">
                    {steps.map((step, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                          i < 4 ? 'bg-brand-green text-white' : i === 4 ? 'bg-brand-orange text-white animate-pulse' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <step.icon size={18} />
                        </div>
                        <p className={`text-xs font-medium ${i <= 4 ? 'text-brand-dark' : 'text-gray-400'}`}>
                          {step.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Events */}
                <div className="mt-8 space-y-4">
                  <h3 className="font-bold text-brand-dark">رویدادها</h3>
                  {[
                    { time: '۱۴۰۳/۰۹/۱۵ - ۱۰:۳۰', event: 'محموله از فرودگاه شانگهای حرکت کرد', status: 'completed' },
                    { time: '۱۴۰۳/۰۹/۱۵ - ۰۸:۰۰', event: 'بارگیری در هواپیمای EK-234', status: 'completed' },
                    { time: '۱۴۰۳/۰۹/۱۴ - ۱۶:۰۰', event: 'محموله در انبار فرودگاه مبدأ دریافت شد', status: 'completed' },
                    { time: '۱۴۰۳/۰۹/۱۴ - ۰۹:۰۰', event: 'رزرو فضا تأیید شد', status: 'completed' },
                  ].map((ev, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand-green shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-brand-dark font-medium">{ev.event}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{ev.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Demo Notice */}
            <div className="mt-6 bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-4">
              <p className="text-sm text-brand-orange font-medium">
                ⚡ این یک نسخه نمایشی (Demo) است. اتصال به سیستم عملیاتی در فاز ۲ فعال خواهد شد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
