import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqCategories = [
  {
    category: 'عمومی',
    items: [
      { q: 'خدمات بار هوایی چیست و چه ارتباطی با کشتیرانی ایران دارد؟', a: 'خدمات بار هوایی، بازوی هوایی کشتیرانی جمهوری اسلامی ایران است. با بیش از ۵۹ سال تجربه کشتیرانی در حمل دریایی، جاده‌ای و ریلی، اکنون با تأسیس این مجموعه، زنجیره لجستیک چهاروجهی تکمیل شده و خدمات حمل هوایی بار نیز ارائه می‌شود.' },
      { q: 'مناطق تحت پوشش شما کدام کشورها هستند؟', a: 'ما در ۶ کریدور اصلی جهانی فعال هستیم: چین (شانگهای، پکن، گوانگجو، شنژن)، امارات و خاورمیانه (دبی، ابوظبی، دوحه)، اروپا (فرانکفورت، آمستردام، استانبول)، CIS (مسکو، آلماتی، تاشکند)، جنوب شرق آسیا (بانکوک، سنگاپور) و آفریقا (نایروبی، لاکوس).' },
      { q: 'حداقل و حداکثر وزن قابل قبول برای حمل هوایی چقدر است؟', a: 'حداقل وزن معمولاً ۴۵ کیلوگرم است (برای کانسولیدیشن). حداکثر وزن بستگی به نوع هواپیما و مسیر دارد. برای محموله‌های بسیار سنگین یا حجیم، سرویس چارتر پیشنهاد می‌شود.' },
    ]
  },
  {
    category: 'قیمت و استعلام',
    items: [
      { q: 'چگونه می‌توانم استعلام قیمت بگیرم؟', a: 'از طریق فرم استعلام قیمت در سایت، تماس تلفنی، واتساپ یا ایمیل. کارشناسان ما حداکثر ظرف ۲ ساعت کاری نرخ دقیق را ارائه می‌دهند.' },
      { q: 'آیا قیمت‌ها شامل بیمه هم می‌شود؟', a: 'بله، بیمه پایه محموله در تمام سرویس‌ها لحاظ شده است. برای محموله‌های با ارزش بالا، بیمه تکمیلی با هزینه اضافی قابل تهیه است.' },
      { q: 'زمان پاسخگویی به استعلام چقدر است؟', a: 'تعهد ما پاسخگویی حداکثر ظرف ۲ ساعت کاری است. در موارد فوری، تماس مستقیم با کارشناسان امکان‌پذیر است.' },
    ]
  },
  {
    category: 'عملیات و حمل',
    items: [
      { q: 'مدت زمان حمل هوایی چقدر است؟', a: 'بسته به مسیر متفاوت است. به عنوان مثال: تهران-دبی حدود ۲ ساعت پرواز، تهران-فرانکفورت حدود ۶ ساعت. زمان کل (درب‌تا‌درب) معمولاً ۳ تا ۷ روز کاری است.' },
      { q: 'آیا امکان پیگیری آنلاین محموله وجود دارد؟', a: 'بله، از طریق بخش پیگیری محموله در سایت و با وارد کردن شماره بارنامه، می‌توانید وضعیت لحظه‌ای محموله خود را مشاهده کنید.' },
      { q: 'کالاهای خطرناک (DG) را حمل می‌کنید؟', a: 'بله، تیم ما دارای گواهینامه DGR (Dangerous Goods Regulations) از IATA است و تمام ۹ کلاس کالای خطرناک را مطابق مقررات بین‌المللی حمل می‌کنیم.' },
      { q: 'آیا سرویس حمل کالای فاسدشدنی و دارو دارید؟', a: 'بله، سرویس حمل با کنترل زنجیره سرد برای مواد غذایی، گل، دارو و واکسن با رعایت استانداردهای IATA CEIV Pharma و Fresh ارائه می‌شود.' },
    ]
  },
  {
    category: 'مدارک و گمرک',
    items: [
      { q: 'چه مدارکی برای ارسال بار هوایی نیاز است؟', a: 'بارنامه هوایی (AWB)، فاکتور تجاری (Commercial Invoice)، پکینگ لیست، گواهی مبدأ و در صورت نیاز مجوزهای خاص (بهداشت، استاندارد و...). تیم ما در تهیه مدارک راهنمایی کامل ارائه می‌دهد.' },
      { q: 'آیا خدمات ترخیص گمرکی هم ارائه می‌دهید؟', a: 'بله، واحد ترخیص گمرکی ما در گمرکات فرودگاهی فعال است و تمام تشریفات گمرکی صادرات و واردات را انجام می‌دهد.' },
    ]
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (key: string) => {
    setOpenItems(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <span className="text-brand-orange">سوالات متداول</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">سوالات متداول</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            پاسخ سوالات رایج درباره خدمات بار هوایی
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx} className="mb-12">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <span className="text-brand-orange font-bold text-sm">{catIdx + 1}</span>
                </div>
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item, i) => {
                  const key = `${catIdx}-${i}`;
                  const isOpen = openItems.includes(key);
                  return (
                    <div key={i} className="bg-white rounded-xl border border-border-light overflow-hidden">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-5 text-right hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-brand-dark leading-7">{item.q}</span>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-brand-orange shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 animate-fade-in-up">
                          <p className="text-gray-600 leading-7 border-t border-border-light pt-4">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">سوال دیگری دارید؟</h2>
          <p className="text-gray-600 mb-8">
            اگر پاسخ سوال خود را پیدا نکردید، با ما تماس بگیرید
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="gradient-orange text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              تماس با ما
            </Link>
            <Link
              to="/quote"
              className="border border-border-light text-brand-dark px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              استعلام قیمت
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
