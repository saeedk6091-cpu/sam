import { Link } from 'react-router-dom';
import { Shield, Globe, Clock, Award, Users, Headphones, Plane, CheckCircle } from 'lucide-react';

const advantages = [
  { icon: Shield, title: 'پشتوانه ۵۹ ساله کشتیرانی ایران', desc: 'بیش از نیم قرن تجربه و اعتبار در حمل و نقل بین‌المللی دریایی، جاده‌ای و ریلی، اکنون در خدمت حمل هوایی شما.' },
  { icon: Globe, title: 'شبکه جهانی در ۶ کریدور', desc: 'حضور فعال در چین، امارات و خاورمیانه، اروپا، CIS، جنوب شرق آسیا و آفریقا با دفاتر و نمایندگان معتبر.' },
  { icon: Award, title: 'تیم متخصص IATA', desc: 'تمامی کارشناسان ما دارای گواهینامه‌های بین‌المللی IATA از جمله DGR، CEIV و FIATA هستند.' },
  { icon: Clock, title: 'پاسخگویی حداکثر ۲ ساعته', desc: 'تعهد ما: استعلام قیمت و ارائه نرخ حداکثر ظرف ۲ ساعت کاری. چون می‌دانیم زمان شما ارزشمند است.' },
  { icon: Plane, title: 'فضای تضمین‌شده', desc: 'با قراردادهای بلندمدت با ایرلاین‌های معتبر، فضای بار همیشه و در هر فصلی برای شما تضمین شده است.' },
  { icon: Users, title: 'بسته‌بندی تخصصی', desc: 'واحد بسته‌بندی مجهز با رعایت استانداردهای بین‌المللی برای هر نوع کالا، از شکستنی تا خطرناک.' },
  { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی و پیگیری محموله شماست.' },
  { icon: CheckCircle, title: 'تجربه دیجیتال', desc: 'پلتفرم آنلاین برای استعلام، پیگیری و مدیریت محموله‌ها. فناوری در خدمت سادگی.' },
];

const timeline = [
  { year: '۱۳۴۴', title: 'تأسیس کشتیرانی ایران', desc: 'آغاز فعالیت حمل و نقل دریایی بین‌المللی' },
  { year: '۱۳۶۰', title: 'توسعه حمل جاده‌ای', desc: 'افزودن حمل جاده‌ای به سبد خدمات' },
  { year: '۱۳۸۰', title: 'حمل ریلی بین‌المللی', desc: 'ورود به حوزه حمل ریلی و اتصال به شبکه CIS' },
  { year: '۱۴۰۳', title: 'تولد بازوی هوایی', desc: 'تأسیس خدمات بار هوایی به عنوان تکمیل‌کننده لجستیک چهاروجهی' },
  { year: '۱۴۰۷', title: 'چشم‌انداز ۲۰۲۸', desc: 'اولین فرایتر اختصاصی + انبار فرودگاه امام' },
];

export default function WhyUs() {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <span className="text-brand-orange">چرا ما</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">چرا با ما حمل کنید؟</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ۸ دلیل که خدمات بار هوایی را به شریک لجستیکی ایده‌آل شما تبدیل می‌کند
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border-light hover:border-brand-orange/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                  <adv.icon size={24} className="text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-500 leading-6">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">بیش از یک شرکت حمل و نقل</h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-8 space-y-6">
            <p>
              <strong className="text-brand-dark">خدمات بار هوایی</strong> به عنوان بازوی هوایی کشتیرانی جمهوری اسلامی ایران، با پشتوانه بیش از نیم قرن تجربه و اعتبار در صنعت حمل و نقل بین‌المللی، تکمیل‌کننده زنجیره لجستیک چهاروجهی (دریایی، جاده‌ای، ریلی و هوایی) ایران است.
            </p>
            <p>
              ما با بهره‌گیری از قراردادهای بلندمدت با ایرلاین‌های معتبر جهانی، فضای بار تضمین‌شده‌ای را در تمام فصول سال برای مشتریان خود فراهم می‌کنیم. تیم متخصص ما با داشتن گواهینامه‌های بین‌المللی IATA، آماده ارائه بهترین راهکار لجستیکی برای هر نوع محموله‌ای است.
            </p>
            <p>
              شبکه گسترده ما در ۶ کریدور اصلی جهان — چین، امارات و خاورمیانه، اروپا، CIS، جنوب شرق آسیا و آفریقا — به ما امکان می‌دهد تا سرویس‌های درب‌تا‌درب را با بالاترین کیفیت و کمترین زمان ممکن ارائه دهیم.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">مسیر ما</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-border-light my-2"></div>}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold text-brand-dark text-lg">{item.title}</h3>
                  <p className="text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-orange py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">آماده شروع هستید؟</h2>
          <p className="text-white/80 text-lg mb-8">
            همین حالا استعلام قیمت بگیرید و تفاوت را تجربه کنید
          </p>
          <Link
            to="/quote"
            className="inline-flex bg-white text-brand-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            استعلام قیمت رایگان
          </Link>
        </div>
      </section>
    </div>
  );
}
