// ایمپورت کردن کتابخانه ری‌اکت
import React from 'react';
import hero from './assets/hero.png';

// تعریف تایپ برای پراپ‌های کامپوننت کارت
interface UserCardProps {
  // نام کاربر
  name?: string;
  // نقش یا تخصص کاربر
  role?: string;
}

// تعریف کامپوننت با استفاده از تایپ اسکریپت
const App: React.FC<UserCardProps> = ({ name = 'ali', role = 'admin' }) => {
  return (
    // کلاس‌ها توسط پلاگین به صورت خودکار مرتب شده‌اند:
    // ابتدا layout (flex)، سپس spacing (p-6)، بعد border/radius و در نهایت رنگ‌ها و افکت‌ها
    <div className="rounded-2xl flex flex-col items-center justify-center  border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
      {/* مرتب‌سازی کلاس‌های تصویر: سایز، گردی، حاشیه پایین */}
      <img src={hero} alt="User Avatar" className="mb-4 h-16 w-16 rounded-full object-cover" />
      {/* کلاس‌های تایپوگرافی متن: سایز فونت، وزن فونت، رنگ */}
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      {/* استایل‌دهی به متن نقش کاربر با رنگ ملایم‌تر */}
      <p className="text-sm font-medium text-gray-500">{role}</p>
    </div>
  );
};
export default App;
