import { Link } from 'react-router-dom';
import {
  Plane, Package, Boxes, Truck, Warehouse, FileText,
  Thermometer, AlertTriangle, ShieldCheck, Building2, Route, ChevronLeft
} from 'lucide-react';

const services = [
  { icon: Plane, title: 'حمل هوایی بار', slug: 'air-freight', desc: 'حمل سریع و مطمئن بار شما به سراسر جهان با بهترین ایرلاین‌ها. سرویس‌های عمومی، اکسپرس و اقتصادی.', features: ['پوشش بیش از ۲۰۰ فرودگاه', 'تعرفه‌های رقابتی', 'ردیابی آنلاین'] },
  { icon: Route, title: 'فرودگاه‌به‌فرودگاه', slug: 'airport-to-airport', desc: 'سرویس سریع حمل بار بین فرودگاه‌های بین‌المللی با حداقل زمان ترانزیت.', features: ['ترانزیت سریع', 'هماهنگی با ایستگاه‌ها', 'تحویل در فرودگاه مقصد'] },
  { icon: Package, title: 'درب‌تا‌درب', slug: 'door-to-door', desc: 'دریافت محموله از درب انبار شما تا تحویل به مقصد نهایی در سراسر جهان.', features: ['یکپارچگی کامل', 'مدیریت یکپارچه', 'بدون نگرانی برای مشتری'] },
  { icon: Plane, title: 'چارتر', slug: 'charter', desc: 'اجاره کامل یا جزئی هواپیمای باری اختصاصی برای محموله‌های ویژه و فوری.', features: ['انعطاف کامل در زمان', 'مسیر اختصاصی', 'مخصوص بارهای حجیم'] },
  { icon: Boxes, title: 'کانسولیدیشن', slug: 'consolidation', desc: 'تجمیع محموله‌های کوچک چند مشتری در یک محموله بزرگ‌تر برای کاهش هزینه.', features: ['کاهش هزینه حمل', 'ارسال هفتگی منظم', 'مناسب محموله‌های کوچک'] },
  { icon: Building2, title: 'بار پروژه‌ای', slug: 'project-cargo', desc: 'حمل تخصصی محموله‌های سنگین، ابعاد بزرگ و پروژه‌های صنعتی و نفتی.', features: ['محموله‌های OOG', 'برنامه‌ریزی مهندسی', 'تجهیزات ویژه'] },
  { icon: Thermometer, title: 'کالای فاسدشدنی', slug: 'perishable', desc: 'حمل با کنترل دما و رطوبت برای مواد غذایی، گل، دارو و محصولات حساس.', features: ['کنترل زنجیره سرد', 'اولویت بارگیری', 'بسته‌بندی ویژه'] },
  { icon: AlertTriangle, title: 'کالای خطرناک', slug: 'dangerous-goods', desc: 'حمل DG مطابق مقررات IATA با تیم دارای گواهینامه تخصصی.', features: ['تیم دارای DGR', 'مستندسازی کامل', 'رعایت تمام کلاس‌ها'] },
  { icon: Package, title: 'بسته‌بندی تخصصی', slug: 'packaging', desc: 'بسته‌بندی حرفه‌ای مطابق استانداردهای بین‌المللی برای هر نوع کالا.', features: ['بسته‌بندی صادراتی', 'پالت‌بندی', 'لیبل‌گذاری استاندارد'] },
  { icon: FileText, title: 'ترخیص گمرکی', slug: 'customs', desc: 'خدمات ترخیص سریع و تخصصی در گمرکات فرودگاهی و مرزی.', features: ['کارشناسان مجرب', 'ترخیص سریع', 'مشاوره تعرفه'] },
  { icon: Warehouse, title: 'انبارداری', slug: 'warehousing', desc: 'انبارهای مجهز و امن در فرودگاه‌های اصلی برای نگهداری موقت بار.', features: ['انبار سردخانه‌ای', 'سیستم WMS', 'بیمه کامل'] },
  { icon: Truck, title: 'سرویس تغذیه جاده‌ای (RFS)', slug: 'rfs', desc: 'اتصال شهرهای داخلی به فرودگاه‌های بین‌المللی از طریق حمل جاده‌ای.', features: ['پوشش سراسری', 'زمان‌بندی هماهنگ', 'کاهش هزینه'] },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-white transition-colors">خانه</Link>
              <span>/</span>
              <span className="text-brand-orange">خدمات</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">خدمات ما</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              ۱۲ خدمت تخصصی حمل هوایی، طراحی‌شده برای پاسخگویی به هر نیاز لجستیکی شما
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-8 border border-border-light hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange/20 transition-colors">
                  <service.icon size={28} className="text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-7 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-brand-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>اطلاعات بیشتر</span>
                  <ChevronLeft size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">نیاز به مشاوره دارید؟</h2>
          <p className="text-gray-600 text-lg mb-8">
            کارشناسان ما آماده پاسخگویی و ارائه بهترین راهکار لجستیکی برای شما هستند
          </p>
          <Link
            to="/quote"
            className="inline-flex gradient-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg"
          >
            درخواست استعلام قیمت
          </Link>
        </div>
      </section>
    </div>
  );
}
