import { Link } from 'react-router-dom';
import { Lock, User, AlertCircle } from 'lucide-react';

export default function Portal() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm text-center">
          <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
            <Lock size={28} className="text-brand-orange" />
          </div>
          <h1 className="text-2xl font-bold text-brand-dark mb-3">ورود مشتریان</h1>
          <p className="text-gray-600 leading-7 mb-6">
            پورتال مشتریان در حال توسعه است و به‌زودی در دسترس قرار خواهد گرفت.
          </p>

          {/* Disabled Login Form */}
          <div className="space-y-4 opacity-50 pointer-events-none">
            <div className="relative">
              <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text" disabled
                placeholder="نام کاربری یا ایمیل"
                className="w-full border border-border-light rounded-lg pr-12 pl-4 py-3 text-sm bg-gray-50"
              />
            </div>
            <div className="relative">
              <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password" disabled
                placeholder="رمز عبور"
                className="w-full border border-border-light rounded-lg pr-12 pl-4 py-3 text-sm bg-gray-50"
              />
            </div>
            <button
              disabled
              className="w-full gradient-orange text-white py-3 rounded-lg font-medium"
            >
              ورود
            </button>
          </div>

          <div className="mt-6 bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-4">
            <div className="flex items-center gap-2 text-brand-orange text-sm">
              <AlertCircle size={16} />
              <span className="font-medium">به‌زودی فعال می‌شود</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 leading-5">
              پورتال مشتریان با قابلیت مشاهده اسناد، فاکتورها، پیگیری محموله‌ها و مدیریت حساب در فاز ۲ فعال خواهد شد.
            </p>
          </div>

          <div className="mt-6">
            <Link to="/" className="text-brand-orange hover:underline text-sm font-medium">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
