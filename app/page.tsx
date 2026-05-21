import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* الشريط العلوي - الهيدر */}
      <header className="bg-white shadow-sm border-b border-gray-100 p-3 sm:p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-lg sm:text-2xl font-bold text-slate-800 text-center sm:text-right">
            منصة حلقات الشيخ أحمد مهدلي التعليمية
          </h1>
          <Link
            href="/login"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors text-center"
          >
            تسجيل الدخول
          </Link>
        </div>
      </header>

      {/* المحتوى الرئيسي للموقع */}
      <main className="w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 md:p-8 my-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 rounded-full mb-6">
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            مرحباً بكم في الفضاء التعليمي للمنصة
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
            نعمل حالياً على إعداد وتكامل الأنظمة وقواعد البيانات لتوفير تجربة تعليمية وأكاديمية متميزة.
          </p>
          <div className="flex justify-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              قاعدة البيانات متصلة
            </span>
          </div>
        </div>
      </main>

      {/* التذييل - الفوتر */}
      <footer className="bg-slate-900 text-slate-400 text-center px-4 py-6 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} منصة حلقات الشيخ أحمد مهدلي. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}