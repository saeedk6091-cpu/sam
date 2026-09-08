import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Clock, CheckCircle } from 'lucide-react';

const serviceTypes = [
  'حمل هوایی بار', 'فرودگاه‌به‌فرودگاه', 'درب‌تا‌درب', 'چارتر',
  'کانسولیدیشن', 'بار پروژه‌ای', 'کالای فاسدشدنی', 'کالای خطرناک',
  'بسته‌بندی تخصصی', 'ترخیص گمرکی', 'انبارداری', 'سرویس تغذیه جاده‌ای'
];

const cargoTypes = ['عمومی', 'فاسدشدنی', 'خطرناک', 'گرانبها', 'پروژه‌ای', 'دارو', 'مسافری (فریت)'];

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '', email: '', phone: '', origin: '', destination: '',
    serviceType: '', cargoType: '', weight: '', dimensions: '', description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-brand-green" />
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">درخواست شما ثبت شد</h2>
          <p className="text-gray-600 leading-7 mb-6">
            با تشکر از شما. کارشناسان ما حداکثر ظرف ۲ ساعت کاری با شما تماس خواهند گرفت.
          </p>
          <Link to="/" className="gradient-orange text-white px-6 py-3 rounded-lg font-medium inline-block hover:opacity-90 transition-all">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <span className="text-brand-orange">استعلام قیمت</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">استعلام قیمت</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            فرم زیر را تکمیل کنید، کارشناسان ما حداکثر ظرف ۲ ساعت کاری با شما تماس خواهند گرفت
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
            <div className="flex items-center gap-2 mb-8 text-brand-orange">
              <Clock size={20} />
              <span className="font-medium">پاسخ حداکثر ۲ ساعت کاری</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام شرکت / شخص *</label>
                  <input
                    type="text" name="companyName" required value={formData.companyName}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                    placeholder="نام شرکت یا شخص"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل *</label>
                  <input
                    type="email" name="email" required value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">موبایل / واتساپ *</label>
                  <input
                    type="tel" name="phone" required value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع خدمت *</label>
                  <select
                    name="serviceType" required value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-white"
                  >
                    <option value="">انتخاب کنید</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">مبدأ *</label>
                  <input
                    type="text" name="origin" required value={formData.origin}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                    placeholder="شهر / فرودگاه مبدأ"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">مقصد *</label>
                  <input
                    type="text" name="destination" required value={formData.destination}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                    placeholder="شهر / فرودگاه مقصد"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع کالا *</label>
                  <select
                    name="cargoType" required value={formData.cargoType}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-white"
                  >
                    <option value="">انتخاب کنید</option>
                    {cargoTypes.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">وزن تقریبی (کیلوگرم) *</label>
                  <input
                    type="text" name="weight" required value={formData.weight}
                    onChange={handleChange}
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                    placeholder="مثال: ۵۰۰"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ابعاد محموله (طول × عرض × ارتفاع - سانتی‌متر)</label>
                <input
                  type="text" name="dimensions" value={formData.dimensions}
                  onChange={handleChange}
                  className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                  placeholder="مثال: ۱۲۰ × ۸۰ × ۱۰۰"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات</label>
                <textarea
                  name="description" value={formData.description}
                  onChange={handleChange} rows={4}
                  className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange resize-none"
                  placeholder="توضیحات اضافی درباره محموله..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">پیوست فایل</label>
                <input
                  type="file"
                  className="w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-orange text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>ارسال درخواست استعلام</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
