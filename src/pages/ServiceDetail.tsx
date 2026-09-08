import { useParams, Link } from 'react-router-dom';
import { Plane, Package, Boxes, Truck, Warehouse, FileText, Thermometer, AlertTriangle, ShieldCheck, Building2, Route, CheckCircle, ArrowLeft } from 'lucide-react';

const serviceData: Record<string, {
  icon: any; title: string; desc: string; answer: string;
  features: string[]; process: string[]; industries: string[]; related: string[];
}> = {
  'air-freight': {
    icon: Plane, title: 'حمل هوایی بار',
    desc: 'حمل سریع و مطمئن بار شما به سراسر جهان با استفاده از بهترین ایرلاین‌های بین‌المللی و داخلی.',
    answer: 'خدمات بار هوایی، بازوی هوایی کشتیرانی ایران، ارائه‌دهنده خدمات حمل هوایی بار به بیش از ۲۰۰ فرودگاه جهان با پشتوانه ۵۹ سال تجربه کشتیرانی جمهوری اسلامی ایران است.',
    features: ['پوشش بیش از ۲۰۰ فرودگاه در سراسر جهان', 'تعرفه‌های رقابتی با ایرلاین‌های معتبر', 'ردیابی آنلاین محموله ۲۴/۷', 'بیمه کامل محموله', 'پاسخگویی و صدور نرخ حداکثر ۲ ساعت'],
    process: ['درخواست و استعلام قیمت', 'صدور نرخ و تأیید مشتری', 'دریافت بار و بسته‌بندی', 'بارگیری و ارسال با ایرلاین منتخب'],
    industries: ['صنعت الکترونیک', 'نساجی و پوشاک', 'قطعات خودرو', 'مواد غذایی', 'تجهیزات پزشکی'],
    related: ['فرودگاه‌به‌فرودگاه', 'درب‌تا‌درب', 'کانسولیدیشن']
  },
  'airport-to-airport': {
    icon: Route, title: 'فرودگاه‌به‌فرودگاه',
    desc: 'سرویس سریع حمل بار بین فرودگاه‌های بین‌المللی با حداقل زمان ترانزیت.',
    answer: 'سرویس فرودگاه‌به‌فرودگاه خدمات بار هوایی، سریع‌ترین روش حمل هوایی بار بین فرودگاه‌های مبدأ و مقصد با هماهنگی مستقیم با ایستگاه‌های کارگو است.',
    features: ['ترانزیت سریع بین‌المللی', 'هماهنگی مستقیم با ایستگاه‌های کارگو', 'تحویل در فرودگاه مقصد', 'گزینه‌های اکسپرس و استاندارد'],
    process: ['تحویل بار در فرودگاه مبدأ', 'تشریفات گمرکی صادرات', 'بارگیری و پرواز', 'تحویل در فرودگاه مقصد'],
    industries: ['تجارت الکترونیک', 'نمونه‌های تجاری', 'مستندات فوری', 'قطعات یدکی'],
    related: ['حمل هوایی بار', 'چارتر', 'ترخیص گمرکی']
  },
  'door-to-door': {
    icon: Package, title: 'درب‌تا‌درب',
    desc: 'دریافت محموله از درب انبار شما تا تحویل به مقصد نهایی در سراسر جهان.',
    answer: 'سرویس درب‌تا‌درب خدمات بار هوایی، یک راه‌حل لجستیکی کامل از دریافت بار در مبدأ تا تحویل در مقصد نهایی، بدون نیاز به دخالت مشتری در فرآیند حمل.',
    features: ['دریافت از درب انبار مبدأ', 'حمل یکپارچه هوایی و زمینی', 'ترخیص گمرکی مقصد', 'تحویل تا درب انبار گیرنده'],
    process: ['بازدید و دریافت بار از مبدأ', 'بسته‌بندی و ارسال به فرودگاه', 'حمل هوایی و ترخیص', 'تحویل درب مقصد'],
    industries: ['شرکت‌های بازرگانی', 'واردکنندگان و صادرکنندگان', 'صنایع تولیدی', 'فروشگاه‌های آنلاین'],
    related: ['حمل هوایی بار', 'ترخیص گمرکی', 'بسته‌بندی تخصصی']
  },
  'charter': {
    icon: Plane, title: 'چارتر',
    desc: 'اجاره کامل یا جزئی هواپیمای باری اختصاصی برای محموله‌های ویژه و فوری.',
    answer: 'سرویس چارتر خدمات بار هوایی، امکان اجاره کامل یا جزئی هواپیمای باری اختصاصی را برای محموله‌های حجیم، فوری یا با مسیر خاص فراهم می‌کند.',
    features: ['انعطاف کامل در زمان‌بندی', 'مسیر اختصاصی بدون توقف', 'مناسب محموله‌های حجیم و سنگین', 'سرعت بالاتر از سرویس‌های عادی'],
    process: ['بررسی نیاز و امکان‌سنجی', 'انتخاب هواپیما و مسیر', 'هماهنگی عملیاتی', 'اجرا و نظارت بر پرواز'],
    industries: ['نفت و گاز', 'معدن', 'عمران و ساخت‌وساز', 'کمک‌های بشردوستانه'],
    related: ['بار پروژه‌ای', 'حمل هوایی بار']
  },
  'consolidation': {
    icon: Boxes, title: 'کانسولیدیشن',
    desc: 'تجمیع محموله‌های کوچک چند مشتری در یک محموله بزرگ‌تر برای کاهش هزینه حمل.',
    answer: 'سرویس کانسولیدیشن خدمات بار هوایی، با تجمیع محموله‌های کوچک چند مشتری در یک محموله واحد، هزینه حمل هوایی را به‌طور قابل‌توجهی کاهش می‌دهد.',
    features: ['کاهش ۳۰ تا ۵۰ درصدی هزینه حمل', 'ارسال هفتگی منظم به مقاصد اصلی', 'مناسب محموله‌های زیر ۱۰۰ کیلو', 'مدیریت یکپارچه مستندات'],
    process: ['دریافت محموله‌های کوچک', 'تجمیع در انبار مبدأ', 'ارسال محموله یکپارچه', 'تفکیک و تحویل در مقصد'],
    industries: ['تجارت الکترونیک', 'واردکنندگان خرد', 'نمونه‌های تجاری', 'قطعات کوچک'],
    related: ['حمل هوایی بار', 'انبارداری']
  },
  'project-cargo': {
    icon: Building2, title: 'بار پروژه‌ای',
    desc: 'حمل تخصصی محموله‌های سنگین، ابعاد بزرگ و پروژه‌های صنعتی و نفتی.',
    answer: 'خدمات بار پروژه‌ای خدمات بار هوایی، شامل حمل تخصصی محموله‌های سنگین، ابعاد بزرگ (OOG) و تجهیزات پروژه‌ای با برنامه‌ریزی مهندسی دقیق است.',
    features: ['حمل محموله‌های OOG و سنگین', 'برنامه‌ریزی مهندسی دقیق', 'تجهیزات بارگیری ویژه', 'هماهنگی با پروژه‌های صنعتی'],
    process: ['بازدید فنی و ارزیابی محموله', 'برنامه‌ریزی مهندسی حمل', 'هماهنگی با ایرلاین و فرودگاه‌ها', 'اجرا و نظارت بر عملیات'],
    industries: ['نفت و گاز', 'پتروشیمی', 'نیروگاهی', 'معدن', 'عمران'],
    related: ['چارتر', 'بسته‌بندی تخصصی']
  },
  'perishable': {
    icon: Thermometer, title: 'کالای فاسدشدنی',
    desc: 'حمل با کنترل دما و رطوبت برای مواد غذایی، گل، دارو و محصولات حساس.',
    answer: 'سرویس حمل کالای فاسدشدنی خدمات بار هوایی، با کنترل کامل زنجیره سرد و رعایت استانداردهای IATA CEIV Pharma و Fresh، محصولات حساس شما را سالم به مقصد می‌رساند.',
    features: ['کنترل زنجیره سرد از مبدأ تا مقصد', 'بسته‌بندی حرارتی ویژه', 'اولویت بارگیری', 'رصد لحظه‌ای دما'],
    process: ['دریافت با بسته‌بندی حرارتی', 'انتقال به ناحیه سرد فرودگاه', 'بارگیری با اولویت', 'تحویل سریع در مقصد'],
    industries: ['مواد غذایی', 'گل و گیاه', 'دارو و واکسن', 'محصولات دریایی'],
    related: ['بسته‌بندی تخصصی', 'حمل هوایی بار']
  },
  'dangerous-goods': {
    icon: AlertTriangle, title: 'کالای خطرناک',
    desc: 'حمل DG مطابق مقررات IATA با تیم دارای گواهینامه تخصصی DGR.',
    answer: 'خدمات حمل کالای خطرناک خدمات بار هوایی، توسط تیم دارای گواهینامه DGR (Dangerous Goods Regulations) و مطابق آخرین ویرایش مقررات IATA انجام می‌شود.',
    features: ['تیم دارای گواهینامه DGR', 'مستندسازی و لیبل‌گذاری مطابق IATA', 'پذیرش تمام ۹ کلاس DG', 'مشاوره تخصصی طبقه‌بندی'],
    process: ['بررسی و طبقه‌بندی کالا', 'بسته‌بندی و لیبل‌گذاری استاندارد', 'مستندسازی DGR', 'بارگیری با رعایت مقررات'],
    industries: ['شیمیایی', 'باتری و الکترونیک', 'آتش‌نشانی', 'صنایع نظامی'],
    related: ['بسته‌بندی تخصصی', 'حمل هوایی بار']
  },
  'packaging': {
    icon: Package, title: 'بسته‌بندی تخصصی',
    desc: 'بسته‌بندی حرفه‌ای مطابق استانداردهای بین‌المللی برای هر نوع کالا.',
    answer: 'واحد بسته‌بندی تخصصی خدمات بار هوایی، با استفاده از تجهیزات و مواد بسته‌بندی استاندارد بین‌المللی، محموله شما را برای حمل هوایی ایمن آماده می‌کند.',
    features: ['بسته‌بندی صادراتی استاندارد', 'پالت‌بندی و شرینک', 'لیبل‌گذاری مطابق IATA', 'بسته‌بندی حرارتی و ضدضربه'],
    process: ['بازرسی محموله', 'انتخاب نوع بسته‌بندی', 'اجرای بسته‌بندی', 'لیبل‌گذاری و مستندسازی'],
    industries: ['تمامی صنایع', 'کالاهای شکستنی', 'تجهیزات حساس', 'محصولات صادراتی'],
    related: ['حمل هوایی بار', 'کالای فاسدشدنی']
  },
  'customs': {
    icon: FileText, title: 'ترخیص گمرکی',
    desc: 'خدمات ترخیص سریع و تخصصی در گمرکات فرودگاهی و مرزی.',
    answer: 'واحد ترخیص گمرکی خدمات بار هوایی، با تیمی مجرب و مسلط به مقررات گمرکی، فرآیند ترخیص محموله شما را در سریع‌ترین زمان ممکن انجام می‌دهد.',
    features: ['کارشناسان مجرب گمرکی', 'ترخیص سریع از گمرکات فرودگاهی', 'مشاوره تعرفه و طبقه‌بندی', 'اخذ مجوزهای لازم'],
    process: ['بررسی اسناد و مدارک', 'اظهار کالا در سامانه', 'پرداخت حقوق گمرکی', 'خروج محموله'],
    industries: ['واردکنندگان', 'صادرکنندگان', 'شرکت‌های بازرگانی', 'تولیدکنندگان'],
    related: ['حمل هوایی بار', 'درب‌تا‌درب']
  },
  'warehousing': {
    icon: Warehouse, title: 'انبارداری',
    desc: 'انبارهای مجهز و امن در فرودگاه‌های اصلی برای نگهداری موقت بار.',
    answer: 'انبارهای خدمات بار هوایی در فرودگاه‌های اصلی، مجهز به سیستم‌های مدیریت انبار (WMS)، سردخانه و امنیت ۲۴ ساعته هستند.',
    features: ['انبار سردخانه‌ای مجهز', 'سیستم مدیریت انبار WMS', 'بیمه کامل موجودی', 'امنیت ۲۴ ساعته'],
    process: ['دریافت و بازرسی محموله', 'ثبت در سیستم WMS', 'جانمایی و نگهداری', 'خروج و تحویل'],
    industries: ['تجارت الکترونیک', 'مواد غذایی', 'دارو', 'کالاهای گرانبها'],
    related: ['کانسولیدیشن', 'بسته‌بندی تخصصی']
  },
  'rfs': {
    icon: Truck, title: 'سرویس تغذیه جاده‌ای (RFS)',
    desc: 'اتصال شهرهای داخلی به فرودگاه‌های بین‌المللی از طریق حمل جاده‌ای هماهنگ.',
    answer: 'سرویس تغذیه جاده‌ای (Road Feeder Service) خدمات بار هوایی، شهرهای داخلی ایران را از طریق حمل جاده‌ای امن و زمان‌بندی‌شده به فرودگاه‌های بین‌المللی متصل می‌کند.',
    features: ['پوشش سراسری شهرهای ایران', 'زمان‌بندی هماهنگ با پروازها', 'خودروهای مجهز و ایمن', 'کاهش هزینه نسبت به حمل هوایی مستقیم'],
    process: ['دریافت بار از شهر مبدأ', 'حمل جاده‌ای تا فرودگاه', 'تحویل به ترمینال کارگو', 'بارگیری و ارسال هوایی'],
    industries: ['صادرکنندگان استان‌ها', 'تولیدکنندگان داخلی', 'شرکت‌های بازرگانی'],
    related: ['حمل هوایی بار', 'درب‌تا‌درب']
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-dark mb-4">خدمت مورد نظر یافت نشد</h1>
          <Link to="/services" className="text-brand-orange hover:underline">بازگشت به لیست خدمات</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">خدمات</Link>
            <span>/</span>
            <span className="text-brand-orange">{service.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-brand-orange/20 flex items-center justify-center">
              <service.icon size={28} className="text-brand-orange" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white">{service.title}</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl leading-8">{service.answer}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* What We Offer */}
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">چه ارائه می‌دهیم</h2>
                <div className="bg-white rounded-xl p-6 border border-border-light">
                  <ul className="space-y-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-brand-green shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-7">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">فرآیند کار</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-border-light flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full gradient-orange flex items-center justify-center text-white font-bold shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 font-medium leading-7 pt-2">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">مناسب برای کدام صنایع</h2>
                <div className="flex flex-wrap gap-3">
                  {service.industries.map((ind, i) => (
                    <span key={i} className="bg-brand-green/10 text-brand-green px-4 py-2 rounded-lg text-sm font-medium">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA */}
              <div className="bg-white rounded-xl p-6 border border-border-light sticky top-24">
                <h3 className="font-bold text-brand-dark text-lg mb-3">استعلام قیمت {service.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-6">
                  فرم استعلام را تکمیل کنید، کارشناسان ما حداکثر ظرف ۲ ساعت کاری با شما تماس خواهند گرفت.
                </p>
                <Link
                  to="/quote"
                  className="block w-full gradient-orange text-white text-center px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all"
                >
                  درخواست استعلام
                </Link>
                <Link
                  to="/contact"
                  className="block w-full border border-border-light text-brand-dark text-center px-6 py-3 rounded-lg font-medium mt-3 hover:bg-gray-50 transition-all"
                >
                  تماس با کارشناس
                </Link>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-xl p-6 border border-border-light">
                <h3 className="font-bold text-brand-dark text-lg mb-4">خدمات مرتبط</h3>
                <ul className="space-y-3">
                  {service.related.map((r, i) => (
                    <li key={i}>
                      <Link to="/services" className="flex items-center gap-2 text-gray-600 hover:text-brand-orange transition-colors">
                        <ArrowLeft size={14} />
                        <span>{r}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
