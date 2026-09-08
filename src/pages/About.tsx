import { Link } from 'react-router-dom';
import { Plane, Anchor, Truck, Train, Globe, Users, Award, Target } from 'lucide-react';

const values = [
  { icon: Award, title: 'تعهد به کیفیت', desc: 'رعایت بالاترین استانداردهای بین‌المللی در تمام عملیات' },
  { icon: Users, title: 'مشتری‌محوری', desc: 'نیاز مشتری، محور تمام تصمیمات و فرآیندهای ماست' },
  { icon: Target, title: 'شفافیت', desc: 'قیمت‌گذاری شفاف، بدون هزینه پنهان' },
  { icon: Globe, title: 'نوآوری', desc: 'بهره‌گیری از فناوری‌های نوین برای بهبود خدمات' },
];

const modes = [
  { icon: Anchor, title: 'حمل دریایی', desc: '۵۹ سال تجربه', color: 'bg-blue-500' },
  { icon: Truck, title: 'حمل جاده‌ای', desc: 'پوشش سراسری', color: 'bg-green-500' },
  { icon: Train, title: 'حمل ریلی', desc: 'اتصال به CIS', color: 'bg-purple-500' },
  { icon: Plane, title: 'حمل هوایی', desc: 'بازوی هوایی', color: 'bg-brand-orange' },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <span className="text-brand-orange">درباره ما</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">درباره ما</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            داستان نیم قرن تجربه در حمل و نقل بین‌المللی و تولد بازوی هوایی
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border-light">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">داستان ما</h2>
            <div className="space-y-6 text-gray-600 leading-8 text-lg">
              <p>
                <strong className="text-brand-dark">کشتیرانی جمهوری اسلامی ایران</strong> با بیش از ۵۹ سال سابقه، یکی از بزرگ‌ترین و معتبرترین شرکت‌های حمل و نقل بین‌المللی در منطقه است. از حمل دریایی تا جاده‌ای و ریلی، این مجموعه همواره پیشگام ارائه خدمات لجستیکی جامع بوده است.
              </p>
              <p>
                در سال ۱۴۰۳، با تأسیس <strong className="text-brand-dark">خدمات بار هوایی</strong>، حلقه مفقوده زنجیره لجستیک چهاروجهی تکمیل شد. اکنون ما با ترکیب تجربه نیم قرن حمل دریایی با تخصص حمل هوایی، سرویسی بی‌نظیر و یکپارچه به مشتریان خود ارائه می‌دهیم.
              </p>
              <p>
                مأموریت ما ساده اما بلندپروازانه است: <em className="text-brand-orange font-medium">شریک جهانی شما بودن</em> — از لحظه درخواست تا تحویل محموله در مقصد نهایی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Modes */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-4 text-center">لجستیک چهاروجهی</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            تکمیل زنجیره حمل و نقل با چهار حالت حمل، یکپارچه و هماهنگ
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {modes.map((mode, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-border-light hover:shadow-lg transition-all">
                <div className={`w-16 h-16 ${mode.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <mode.icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-brand-dark mb-1">{mode.title}</h3>
                <p className="text-sm text-gray-500">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border-light text-center hover:border-brand-green/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <val.icon size={24} className="text-brand-green" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-6">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">چشم‌انداز ۲۰۲۸</h2>
          <p className="text-gray-300 text-lg leading-8 mb-8">
            تا سال ۲۰۲۸، خدمات بار هوایی به اولین اپراتور فرایتر اختصاصی ایران تبدیل خواهد شد.
            با راه‌اندازی انبار اختصاصی در فرودگاه بین‌المللی امام خمینی و ناوگان هوایی مستقل،
            ظرفیت و سرعت خدمات خود را به سطح بین‌المللی ارتقا خواهیم داد.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <Plane size={24} className="text-brand-orange mx-auto mb-2" />
              <p className="text-white text-sm">اولین فرایتر اختصاصی</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <Globe size={24} className="text-brand-green mx-auto mb-2" />
              <p className="text-white text-sm">توسعه به ۱۰ کریدور</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">تیم ما</h2>
          <p className="text-gray-600 text-lg leading-8 mb-8">
            تیمی از متخصصان باتجربه حمل و نقل بین‌المللی با گواهینامه‌های IATA،
            آماده ارائه بهترین خدمات به شما هستند.
          </p>
          <Link
            to="/contact"
            className="inline-flex gradient-orange text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
          >
            تماس با تیم ما
          </Link>
        </div>
      </section>
    </div>
  );
}
