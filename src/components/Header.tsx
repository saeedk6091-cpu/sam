import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Plane } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'خانه', path: '/' },
    { label: 'خدمات', path: '/services' },
    { label: 'چرا ما', path: '/why-us' },
    { label: 'درباره ما', path: '/about' },
    { label: 'پیگیری محموله', path: '/track' },
    { label: 'اخبار', path: '/faq' },
    { label: 'تماس با ما', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+982112345678" className="flex items-center gap-1 hover:text-brand-orange transition-colors">
              <Phone size={14} />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </a>
            <a href="mailto:info@barhavaei.ir" className="flex items-center gap-1 hover:text-brand-orange transition-colors">
              <Mail size={14} />
              <span>info@barhavaei.ir</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs opacity-70">FA | EN</span>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full cursor-not-allowed" title="به‌زودی">
              ورود مشتریان
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg gradient-orange flex items-center justify-center">
              <Plane className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-brand-dark text-lg lg:text-xl leading-tight">خدمات بار هوایی</h1>
              <p className="text-xs text-gray-500 hidden sm:block">بازوی هوایی کشتیرانی ایران</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-brand-orange bg-orange-50'
                    : 'text-text-primary hover:text-brand-orange hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/quote"
              className="hidden sm:inline-flex gradient-orange text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              استعلام قیمت
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border-light shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-brand-orange bg-orange-50'
                      : 'text-text-primary hover:text-brand-orange hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setMobileOpen(false)}
                className="mt-2 gradient-orange text-white px-4 py-3 rounded-lg font-medium text-sm text-center"
              >
                استعلام قیمت
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
