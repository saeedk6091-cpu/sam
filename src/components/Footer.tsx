import { Link } from 'react-router-dom';
import { Plane, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const serviceLinks = [
    'حمل هوایی بار', 'فرودگاه‌به‌فرودگاه', 'درب‌تا‌درب', 'چارتر',
    'کانسولیدیشن', 'بار پروژه‌ای', 'کالای فاسدشدنی', 'کالای خطرناک',
    'بسته‌بندی تخصصی', 'ترخیص گمرکی', 'انبارداری', 'سرویس تغذیه جاده‌ای'
  ];

  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA Band */}
      <div className="gradient-orange">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">بار شما، تعهد ما</h3>
            <p className="text-white/80 mt-1">همین حالا استعلام قیمت بگیرید</p>
          </div>
          <Link
            to="/quote"
            className="bg-white text-brand-orange px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            درخواست استعلام
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center">
                <Plane className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg">خدمات بار هوایی</h4>
                <p className="text-xs text-gray-400">بازوی هوایی کشتیرانی ایران</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-7">
              شریک جهانی شما در حمل هوایی بار. با بیش از نیم قرن پشتوانه کشتیرانی ایران، اکنون در آسمان.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-orange">خدمات</h4>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 6).map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-green">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-white transition-colors">درباره ما</Link></li>
              <li><Link to="/why-us" className="text-gray-400 text-sm hover:text-white transition-colors">چرا ما</Link></li>
              <li><Link to="/track" className="text-gray-400 text-sm hover:text-white transition-colors">پیگیری محموله</Link></li>
              <li><Link to="/quote" className="text-gray-400 text-sm hover:text-white transition-colors">استعلام قیمت</Link></li>
              <li><Link to="/faq" className="text-gray-400 text-sm hover:text-white transition-colors">سوالات متداول</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-orange">تماس با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="text-brand-orange" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="text-brand-orange" />
                <span>info@barhavaei.ir</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-brand-orange mt-1 shrink-0" />
                <span>تهران، فرودگاه بین‌المللی امام خمینی، ساختمان کارگو</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © ۱۴۰۳ خدمات بار هوایی — تمامی حقوق محفوظ است
          </p>
          <p className="text-gray-500 text-xs">
            عضو رسمی IATA | زیرمجموعه کشتیرانی جمهوری اسلامی ایران
          </p>
        </div>
      </div>
    </footer>
  );
}
