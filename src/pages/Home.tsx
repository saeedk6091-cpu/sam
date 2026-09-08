import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ArrowLeft, Plane, Globe, Package, Shield, Clock,
  Truck, Warehouse, FileText, Boxes, Thermometer, AlertTriangle,
  ShieldCheck, Building2, Route, ChevronLeft, Newspaper
} from 'lucide-react';

const services = [
  { icon: Plane, title: 'حمل هوایی بار', desc: 'حمل سریع و مطمئن بار شما به سراسر جهان', slug: 'air-freight' },
  { icon: Route, title: 'فرودگاه‌به‌فرودگاه', desc: 'سرویس سریع بین فرودگاه‌های بین‌المللی', slug: 'airport-to-airport' },
  { icon: Package, title: 'درب‌تا‌درب', desc: 'دریافت از درب انبار شما تا تحویل به مقصد نهایی', slug: 'door-to-door' },
  { icon: Plane, title: 'چارتر', desc: 'اجاره کامل یا جزئی هواپیمای باری اختصاصی', slug: 'charter' },
  { icon: Boxes, title: 'کانسولیدیشن', desc: 'تجمیع محموله‌های کوچک برای کاهش هزینه', slug: 'consolidation' },
  { icon: Building2, title: 'بار پروژه‌ای', desc: 'حمل محموله‌های سنگین و ابعاد بزرگ پروژه‌ای', slug: 'project-cargo' },
  { icon: Thermometer, title: 'کالای فاسدشدنی', desc: 'حمل با کنترل دما برای مواد غذایی و دارو', slug: 'perishable' },
  { icon: AlertTriangle, title: 'کالای خطرناک', desc: 'حمل DG با رعایت استانداردهای IATA', slug: 'dangerous-goods' },
  { icon: Package, title: 'بسته‌بندی تخصصی', desc: 'بسته‌بندی حرفه‌ای مطابق استانداردهای بین‌المللی', slug: 'packaging' },
  { icon: FileText, title: 'ترخیص گمرکی', desc: 'خدمات ترخیص سریع و تخصصی در گمرکات', slug: 'customs' },
  { icon: Warehouse, title: 'انبارداری', desc: 'انبارهای مجهز در فرودگاه‌های اصلی', slug: 'warehousing' },
  { icon: Truck, title: 'سرویس تغذیه جاده‌ای', desc: 'RFS - اتصال شهرها به فرودگاه‌های بین‌المللی', slug: 'rfs' },
];

const corridors = [
  { name: 'چین', cities: 'شانگهای، پکن، گوانگجو، شنژن' },
  { name: 'امارات و خاورمیانه', cities: 'دبی، ابوظبی، دوحه' },
  { name: 'اروپا', cities: 'فرانکفورت، آمستردام، استانبول' },
  { name: 'CIS', cities: 'مسکو، آلماتی، تاشکند' },
  { name: 'جنوب شرق آسیا', cities: 'بانکوک، سنگاپور، کوالالامپور' },
  { name: 'آفریقا', cities: 'نایروبی، لاکوس، ژوهانسبورگ' },
];

function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);

  return <div ref={ref} className="text-3xl lg:text-4xl font-bold text-brand-orange">{count}{suffix}</div>;
}

export default function Home() {
  const [trackNumber, setTrackNumber] = useState('');

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/80 mb-6">
              <Plane size={16} className="text-brand-orange" />
              <span>بازوی هوایی کشتیرانی ایران</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              شریک جهانی
              <span className="text-gradient-orange"> شما</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-8 mb-8 max-w-2xl">
              ۵۹ سال اعتبار در دریا، جاده و ریل؛ اکنون در آسمان. حمل هوایی بار شما به هر نقطه‌ای از جهان با پشتوانه کشتیرانی جمهوری اسلامی ایران.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="gradient-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-orange-500/25 animate-pulse-glow"
              >
                استعلام قیمت
              </Link>
              <Link
                to="/track"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                پیگیری محموله
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative airplane */}
        <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
          <Plane size={200} className="text-white rotate-[-30deg]" />
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="relative -mt-8 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-brand-dark font-bold">
              <Search size={20} className="text-brand-orange" />
              <span>پیگیری محموله</span>
            </div>
            <input
              type="text"
              placeholder="شماره بارنامه را وارد کنید..."
              value={trackNumber}
              onChange={(e) => setTrackNumber(e.target.value)}
              className="flex-1 w-full border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
            />
            <Link
              to="/track"
              className="gradient-orange text-white px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>پیگیری</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Band */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            بازوی هوایی کشتیرانی ایران
          </h2>
          <p className="text-gray-600 text-lg leading-8">
            ۵۹ سال اعتبار در دریا، جاده و ریل؛ اکنون در آسمان. تکمیل‌کننده زنجیره لجستیک چهاروجهی ایران با شبکه‌ای گسترده در ۶ کریدور جهانی.
          </p>
        </div>
      </section>

      {/* Counters */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Counter end={59} suffix="+" />
              <p className="text-gray-600 mt-2 font-medium">سال پشتوانه</p>
            </div>
            <div className="text-center p-6">
              <Counter end={6} />
              <p className="text-gray-600 mt-2 font-medium">کریدور جهانی</p>
            </div>
            <div className="text-center p-6">
              <Counter end={12} />
              <p className="text-gray-600 mt-2 font-medium">خدمت تخصصی</p>
            </div>
            <div className="text-center p-6">
              <Counter end={50} suffix="+" />
              <p className="text-gray-600 mt-2 font-medium">تن ظرفیت ماهانه</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">خدمات ما</h2>
            <p className="text-gray-600 text-lg">۱۲ خدمت تخصصی حمل هوایی برای هر نیاز لجستیکی شما</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <Link
                key={i}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-xl p-6 border border-border-light hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                  <service.icon size={24} className="text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-6">{service.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-brand-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>مشاهده</span>
                  <ChevronLeft size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Teaser */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                چرا با ما حمل کنید؟
              </h2>
              <p className="text-gray-600 text-lg leading-8 mb-6">
                پشتوانه بیش از نیم قرن تجربه کشتیرانی ایران در حمل و نقل بین‌المللی، فضای تضمین‌شده با ایرلاین‌های معتبر جهانی، تیم متخصص دارای گواهینامه IATA، و شبکه گسترده نمایندگی در ۶ کریدور اصلی جهان.
              </p>
              <ul className="space-y-3 mb-8">
                {['پشتوانه ۵۹ ساله کشتیرانی ایران', 'تیم متخصص IATA', 'شبکه جهانی در ۶ کریدور', 'پاسخگویی حداکثر ۲ ساعته'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                      <Shield size={14} className="text-brand-green" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/why-us"
                className="inline-flex items-center gap-2 gradient-orange text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all"
              >
                <span>ادامه مطلب</span>
                <ArrowLeft size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-dark to-gray-800 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Globe size={32} className="text-brand-orange mx-auto mb-2" />
                    <p className="text-sm">۶ کریدور جهانی</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Clock size={32} className="text-brand-green mx-auto mb-2" />
                    <p className="text-sm">پاسخ ۲ ساعته</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <ShieldCheck size={32} className="text-brand-orange mx-auto mb-2" />
                    <p className="text-sm">تضمین فضا</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Package size={32} className="text-brand-green mx-auto mb-2" />
                    <p className="text-sm">بسته‌بندی تخصصی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">شبکه جهانی ما</h2>
            <p className="text-gray-600 text-lg">۶ کریدور اصلی حمل هوایی در سراسر جهان</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {corridors.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border-light hover:border-brand-green/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                    <Globe size={20} className="text-brand-green" />
                  </div>
                  <h3 className="font-bold text-brand-dark">{c.name}</h3>
                </div>
                <p className="text-sm text-gray-500">{c.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Cargo Band */}
      <section className="bg-brand-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-white text-center text-xl font-bold mb-8">بار ویژه و تخصصی</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['دارو', 'فاسدشدنی', 'گرانبها', 'خطرناک', 'پروژه‌ای', 'فریت بار'].map((tag, i) => (
              <span key={i} className="bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 hover:border-brand-orange/50 hover:text-brand-orange transition-all cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-brand-dark">اخبار و مقالات</h2>
            <Link to="/faq" className="text-brand-orange font-medium flex items-center gap-1 hover:gap-2 transition-all">
              <span>مشاهده همه</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'آغاز فعالیت رسمی خدمات بار هوایی کشتیرانی ایران', date: '۱۵ آذر ۱۴۰۳', cat: 'اخبار شرکت' },
              { title: 'امضای قرارداد همکاری با ایرلاین‌های معتبر خاورمیانه', date: '۱۰ آذر ۱۴۰۳', cat: 'مشارکت‌ها' },
              { title: 'راهنمای حمل هوایی کالای فاسدشدنی: نکات کلیدی', date: '۵ آذر ۱۴۰۳', cat: 'آموزش' },
            ].map((news, i) => (
              <article key={i} className="bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-40 bg-gradient-to-br from-brand-dark to-gray-700 flex items-center justify-center">
                  <Newspaper size={40} className="text-white/30" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-brand-green/10 text-brand-green px-2 py-1 rounded">{news.cat}</span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h3 className="font-bold text-brand-dark group-hover:text-brand-orange transition-colors leading-7">
                    {news.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-orange py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">بار شما، تعهد ما</h2>
          <p className="text-white/80 text-lg mb-8">
            همین حالا با کارشناسان ما تماس بگیرید یا فرم استعلام قیمت را تکمیل کنید
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="bg-white text-brand-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              استعلام قیمت
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
