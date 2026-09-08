import { useState, useEffect } from 'react'

// Icons as simple SVG components
const PlaneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const ShipIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3m18 0V7.5M3 12v4.5c0 2.5 4 4.5 9 4.5s9-2 9-4.5" />
  </svg>
)

const TruckIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const TrainIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6c0-1.1.9-2 2-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2m10-4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const AwardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PackageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

interface CityTime {
  city: string
  cityEn: string
  timezone: string
  isPersian: boolean
}

const cities: CityTime[] = [
  { city: 'تهران', cityEn: 'Tehran', timezone: 'Asia/Tehran', isPersian: true },
  { city: 'دبی', cityEn: 'Dubai', timezone: 'Asia/Dubai', isPersian: false },
  { city: 'شانگهای', cityEn: 'Shanghai', timezone: 'Asia/Shanghai', isPersian: false },
  { city: 'فرانکفورت', cityEn: 'Frankfurt', timezone: 'Europe/Berlin', isPersian: false },
  { city: 'لندن', cityEn: 'London', timezone: 'Europe/London', isPersian: false },
]

const crossTradeRoutes = [
  { from: 'چین', fromEn: 'China', to: 'امارات', toEn: 'UAE' },
  { from: 'آلمان', fromEn: 'Germany', to: 'کنیا', toEn: 'Kenya' },
  { from: 'سنگاپور', fromEn: 'Singapore', to: 'اروپا', toEn: 'Europe' },
]

const specialCargoTypes = [
  { name: 'دارو', icon: '💊' },
  { name: 'کالای فاسدشدنی', icon: '🥬' },
  { name: 'کالای گرانبها', icon: '💎' },
  { name: 'کالای خطرناک', icon: '⚠️' },
  { name: 'بار پروژه‌ای', icon: '🏗️' },
  { name: 'فریت بار', icon: '📦' },
]

const whyUsPillars = [
  {
    title: 'بیش از نیم قرن پشتوانه',
    description: 'تجربه و تخصص در صنعت حمل‌ونقل بین‌المللی',
    icon: <AwardIcon />,
  },
  {
    title: 'شبکه بین‌المللی',
    description: 'دسترسی به بازارهای جهانی و مسیرهای استراتژیک',
    icon: <GlobeIcon />,
  },
  {
    title: 'راهکارهای یکپارچه',
    description: 'خدمات چندوجهی دریایی، زمینی و هوایی',
    icon: <CheckCircleIcon />,
  },
  {
    title: 'تخصص در محموله‌های ویژه',
    description: 'مدیریت حرفه‌ای کالاهای حساس و خاص',
    icon: <PackageIcon />,
  },
  {
    title: 'راهکارهای Cross Trade',
    description: 'حمل مستقیم بین کشورهای مبدأ و مقصد',
    icon: <MapPinIcon />,
  },
  {
    title: 'تیم حرفه‌ای',
    description: 'متخصصان با تجربه در حمل‌ونقل هوایی',
    icon: <UsersIcon />,
  },
]

const services = [
  { title: 'حمل هوایی بار', desc: 'ارسال سریع و ایمن محموله‌های شما به سراسر جهان' },
  { title: 'فرودگاه‌به‌فرودگاه', desc: 'خدمات استاندارد حمل هوایی بین فرودگاه‌ها' },
  { title: 'درب‌تا‌درب', desc: 'تحویل کامل از مبدأ تا مقصد نهایی' },
  { title: 'چارتر', desc: 'پروازهای اختصاصی برای محموله‌های بزرگ' },
  { title: 'بار تجمیعی', desc: 'بهینه‌سازی هزینه با ادغام محموله‌ها' },
  { title: 'بار پروژه‌ای', desc: 'مدیریت پروژه‌های بزرگ و پیچیده' },
  { title: 'کالای فاسدشدنی', desc: 'حمل با کنترل دما و شرایط ویژه' },
  { title: 'کالای خطرناک', desc: 'رعایت استانداردهای ایمنی بین‌المللی' },
  { title: 'بسته‌بندی تخصصی', desc: 'محافظت حداکثری از محموله‌های حساس' },
  { title: 'ترخیص گمرکی', desc: 'تسهیل فرآیندهای گمرکی و قانونی' },
  { title: 'انبارداری', desc: 'ذخیره‌سازی ایمن و مدیریت موجودی' },
  { title: 'RFS', desc: 'سرویس تغذیه جاده‌ای به فرودگاه' },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingStatus, setTrackingStatus] = useState<'idle' | 'loading' | 'found' | 'notfound'>('idle')
  const [cityTimes, setCityTimes] = useState<{ [key: string]: string }>({})
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentDate(now)
      
      const times: { [key: string]: string } = {}
      cities.forEach(city => {
        try {
          const timeStr = new Date().toLocaleTimeString('fa-IR', {
            timeZone: city.timezone,
            hour: '2-digit',
            minute: '2-digit'
          })
          times[city.cityEn] = timeStr
        } catch (e) {
          times[city.cityEn] = '--:--'
        }
      })
      setCityTimes(times)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleTrack = () => {
    if (!trackingNumber.trim()) return
    setTrackingStatus('loading')
    setTimeout(() => {
      setTrackingStatus(trackingNumber.length > 5 ? 'found' : 'notfound')
    }, 1500)
  }

  const getPersianDate = () => {
    return currentDate.toLocaleDateString('fa-IR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getGregorianDate = () => {
    return currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-brand-light font-sans" dir="rtl">
      {/* Top Bar */}
      <div className="bg-brand-navy text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+982100000000" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <PhoneIcon />
              <span>۰۲۱-۰۰۰۰۰۰۰۰</span>
            </a>
            <a href="mailto:info@barhavaei.com" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <MailIcon />
              <span>info@barhavaei.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">EN</button>
            <button className="text-white font-bold">FA</button>
            <button className="bg-brand-orange/20 text-brand-orange px-3 py-1 rounded text-xs cursor-not-allowed">
              پرتال مشتریان - به‌زودی
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                <PlaneIcon />
              </div>
              <div>
                <h1 className="text-xl font-bold text-brand-navy">خدمات بار هوایی</h1>
                <p className="text-xs text-gray-500">BAR HAVAEI AIR CARGO</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-brand-navy font-medium hover:text-brand-orange transition-colors">خانه</a>
              <a href="#services" className="text-gray-600 hover:text-brand-orange transition-colors">خدمات</a>
              <a href="#cross-trade" className="text-gray-600 hover:text-brand-orange transition-colors">Cross Trade</a>
              <a href="#why-us" className="text-gray-600 hover:text-brand-orange transition-colors">چرا ما</a>
              <a href="#about" className="text-gray-600 hover:text-brand-orange transition-colors">درباره ما</a>
              <a href="#tracking" className="text-gray-600 hover:text-brand-orange transition-colors">پیگیری</a>
              <a href="#insights" className="text-gray-600 hover:text-brand-orange transition-colors">مقالات</a>
              <a href="#contact" className="text-gray-600 hover:text-brand-orange transition-colors">تماس</a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-lg font-medium transition-colors">
                استعلام قیمت
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-brand-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a href="#" className="block text-brand-navy font-medium py-2">خانه</a>
              <a href="#services" className="block text-gray-600 py-2">خدمات</a>
              <a href="#cross-trade" className="block text-gray-600 py-2">Cross Trade</a>
              <a href="#why-us" className="block text-gray-600 py-2">چرا ما</a>
              <a href="#about" className="block text-gray-600 py-2">درباره ما</a>
              <a href="#tracking" className="block text-gray-600 py-2">پیگیری</a>
              <a href="#contact" className="block text-gray-600 py-2">تماس</a>
              <button className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-lg font-medium transition-colors mt-4">
                استعلام قیمت
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop" 
            alt="Cargo Aircraft" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-brand-navy via-brand-navy/90 to-transparent"></div>
        
        {/* Dotted Flight Path */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" preserveAspectRatio="none">
          <path 
            d="M 0 100 Q 300 50 600 80 T 1200 60 T 1800 90" 
            fill="none" 
            stroke="#D2622A" 
            strokeWidth="2" 
            strokeDasharray="5,5"
          />
        </svg>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mr-auto">
            <p className="text-brand-orange font-medium mb-4">بازوی هوایی کشتیرانی ایران</p>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">شریک جهانی شما</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ارائه راهکارهای حمل‌ونقل هوایی بین‌المللی با بیش از نیم قرن تجربه در لجستیک چندوجهی. 
              متصل‌کننده بازارهای جهانی با خدمات قابل اعتماد و حرفه‌ای.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-2">
                <PlaneIcon />
                استعلام قیمت
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-brand-navy text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                پیگیری محموله
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Operational Panel */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 grid lg:grid-cols-2 gap-8">
            {/* Tracking */}
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                <SearchIcon />
                پیگیری محموله
              </h3>
              <p className="text-gray-600 mb-6">وضعیت محموله خود را با شماره AWB پیگیری کنید</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="شماره AWB یا کد پیگیری"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
                <button 
                  onClick={handleTrack}
                  disabled={trackingStatus === 'loading'}
                  className="bg-brand-navy hover:bg-brand-navy/90 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {trackingStatus === 'loading' ? 'در حال جستجو...' : 'پیگیری بار'}
                </button>
              </div>
              {trackingStatus === 'found' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  ✓ محموله یافت شد - در حال انتقال
                </div>
              )}
              {trackingStatus === 'notfound' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  ✗ محموله یافت نشد. لطفاً شماره را بررسی کنید.
                </div>
              )}
              <p className="text-xs text-gray-500 mt-3">اتصال به سیستم عملیاتی در فاز بعدی</p>
            </div>

            {/* Quick Quote */}
            <div className="border-r lg:border-r border-gray-200 lg:pr-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                <ClockIcon />
                استعلام سریع نرخ
              </h3>
              <p className="text-gray-600 mb-6">دریافت پیش‌فاکتور اولیه در کمتر از ۲ دقیقه</p>
              <div className="grid grid-cols-2 gap-4">
                <select className="border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange">
                  <option>مبدأ</option>
                  <option>تهران</option>
                  <option>دبی</option>
                  <option>شانگهای</option>
                </select>
                <select className="border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange">
                  <option>مقصد</option>
                  <option>لندن</option>
                  <option>فرانکفورت</option>
                  <option>نایروبی</option>
                </select>
                <select className="border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange">
                  <option>نوع کالا</option>
                  <option>عمومی</option>
                  <option>فاسدشدنی</option>
                  <option>خطرناک</option>
                </select>
                <input
                  type="text"
                  placeholder="وزن (kg)"
                  className="border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
              <button className="w-full mt-4 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-lg font-medium transition-colors">
                ادامه درخواست
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Multimodal Heritage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">بازوی هوایی کشتیرانی ایران</h3>
            <p className="text-xl text-gray-600">بیش از نیم قرن تجربه در دریا، جاده و ریل؛ اکنون در آسمان</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <ShipIcon />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">دریا</h4>
              <p className="text-sm text-gray-600">حمل‌ونقل دریایی بین‌المللی</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <TruckIcon />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">جاده</h4>
              <p className="text-sm text-gray-600">شبکه گسترده حمل زمینی</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                <TrainIcon />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">ریل</h4>
              <p className="text-sm text-gray-600">حمل‌ونقل ریلی اقتصادی</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-orange">
                <PlaneIcon />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">هوا</h4>
              <p className="text-sm text-gray-600">خدمات نوین حمل هوایی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-brand-navy mb-4">چرا بار هوایی؟</h3>
            <p className="text-xl text-gray-600">مزیت‌های رقابتی که ما را متمایز می‌کند</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsPillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange mb-6">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-3">{pillar.title}</h4>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-brand-navy mb-4">خدمات ما</h3>
            <p className="text-xl text-gray-600">راهکارهای جامع حمل‌ونقل هوایی برای هر نیاز</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group p-6 border border-brand-border rounded-xl hover:border-brand-orange hover:shadow-lg transition-all cursor-pointer">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <PlaneIcon />
                </div>
                <h4 className="text-lg font-bold text-brand-navy mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                <div className="flex items-center text-brand-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>بیشتر بدانید</span>
                  <ArrowLeftIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Trade */}
      <section id="cross-trade" className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-orange font-medium mb-4">CAPABILITY بین‌المللی</p>
              <h3 className="text-4xl font-bold mb-6">Cross Trade</h3>
              <p className="text-2xl text-gray-300 mb-6">مبدأ و مقصد، هر جای جهان؛ راهکار حمل، فراتر از مرزها</p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                حمل بار بین دو کشور، بدون الزام عبور از ایران. ما به عنوان شریک لجستیکی جهانی شما، 
                محموله‌ها را مستقیماً از مبدأ به مقصد نهایی می‌رسانیم.
              </p>
              
              <div className="space-y-4 mb-8">
                {crossTradeRoutes.map((route, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                      <span className="font-bold">{route.from}</span>
                    </div>
                    <ArrowLeftIcon />
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-brand-green rounded-full"></div>
                      <span className="font-bold">{route.to}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold transition-colors">
                مشاوره مسیر Cross Trade
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-6">مسیرهای نمونه</h4>
                <div className="space-y-4">
                  {crossTradeRoutes.map((route, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="font-medium">{route.fromEn}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                        <div className="w-16 h-px bg-gray-500"></div>
                        <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                      </div>
                      <span className="font-medium">{route.toEn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network & Time */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-brand-navy mb-4">شبکه جهانی</h3>
            <p className="text-xl text-gray-600">حضور در مراکز تجاری جهان</p>
          </div>
          
          {/* World Map Placeholder */}
          <div className="bg-brand-navy rounded-2xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <path fill="#3E8E7E" d="M150,150 Q200,100 250,150 T350,150 T450,200 T550,180 T650,220 T750,180" stroke="#D2622A" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
              </svg>
            </div>
            <div className="relative z-10 grid grid-cols-5 gap-4 text-center text-white">
              {cities.map((city) => (
                <div key={city.cityEn} className="p-4">
                  <div className="text-2xl font-bold text-brand-orange mb-2">{cityTimes[city.cityEn] || '--:--'}</div>
                  <div className="font-bold mb-1">{city.city}</div>
                  <div className="text-xs text-gray-400">{city.cityEn}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Date Display */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-brand-orange mb-2">تاریخ شمسی</div>
              <div className="text-2xl font-bold text-brand-navy">{getPersianDate()}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-brand-orange mb-2">Gregorian Date</div>
              <div className="text-2xl font-bold text-brand-navy">{getGregorianDate()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Cargo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-brand-navy mb-4">محموله‌های ویژه</h3>
            <p className="text-xl text-gray-600">تخصص در حمل کالاهای حساس و خاص</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {specialCargoTypes.map((cargo, index) => (
              <div key={index} className="bg-brand-light px-6 py-4 rounded-full flex items-center gap-3 hover:bg-brand-orange hover:text-white transition-colors cursor-pointer">
                <span className="text-2xl">{cargo.icon}</span>
                <span className="font-medium">{cargo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-brand-navy mb-4">مقالات و بینش‌ها</h3>
            <p className="text-xl text-gray-600">آخرین اخبار و تحلیل‌های صنعت حمل‌ونقل هوایی</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <article key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1586528116311-ad8dd3c8310d' : i === 2 ? '1494412575802-32e084f47a89' : '1578575433930-ca5e659f8eee'}?w=600&h=400&fit=crop`}
                    alt="Article"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-brand-orange text-sm font-medium mb-2">مقاله تخصصی</div>
                  <h4 className="text-xl font-bold text-brand-navy mb-3">عنوان مقاله شماره {i}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...</p>
                  <a href="#" className="text-brand-orange font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    مطالعه بیشتر
                    <ArrowLeftIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-4 rounded-lg font-bold transition-colors">
              مشاهده همه مقالات
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">بار شما، تعهد ما</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            آماده‌ایم تا با راهکارهای حمل‌ونقل هوایی حرفه‌ای، شریک موفقیت کسب‌وکار شما باشیم
          </p>
          <button className="bg-white hover:bg-gray-100 text-brand-orange px-12 py-5 rounded-lg font-bold text-xl transition-colors inline-flex items-center gap-3">
            <PlaneIcon />
            استعلام قیمت
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                  <PlaneIcon />
                </div>
                <div>
                  <h4 className="text-lg font-bold">خدمات بار هوایی</h4>
                  <p className="text-xs text-gray-400">BAR HAVAEI AIR CARGO</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                بازوی هوایی کشتیرانی ایران - ارائه‌دهنده راهکارهای حمل‌ونقل هوایی بین‌المللی با بیش از نیم قرن تجربه
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">لینک‌های سریع</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-brand-orange transition-colors">خانه</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition-colors">خدمات</a></li>
                <li><a href="#cross-trade" className="hover:text-brand-orange transition-colors">Cross Trade</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors">درباره ما</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition-colors">تماس</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">خدمات</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-brand-orange transition-colors">حمل هوایی بار</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">بار تجمیعی</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">فریت بار</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">کالای فاسدشدنی</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">کالای خطرناک</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">تماس با ما</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <PhoneIcon />
                  <span>۰۲۱-۰۰۰۰۰۰۰۰</span>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon />
                  <span>info@barhavaei.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon />
                  <span>تهران، ایران</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© ۱۴۰۳ خدمات بار هوایی - تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="grid grid-cols-4 gap-2 p-2">
          <a href="tel:+982100000000" className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-brand-orange transition-colors">
            <PhoneIcon />
            <span className="text-xs mt-1">تماس</span>
          </a>
          <a href="https://wa.me/989120000000" className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-brand-orange transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <span className="text-xs mt-1">واتساپ</span>
          </a>
          <a href="#tracking" className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-brand-orange transition-colors">
            <SearchIcon />
            <span className="text-xs mt-1">پیگیری</span>
          </a>
          <a href="#quote" className="flex flex-col items-center justify-center py-3 bg-brand-orange text-white rounded-lg transition-colors">
            <PlaneIcon />
            <span className="text-xs mt-1">استعلام</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
