'use client';

import React, { useState } from 'react';
import { supabase } from '../utils/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message === 'Invalid login credentials' 
        ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' 
        : signInError.message);
    } else {
      setMessage('تم تسجيل الدخول بنجاح! يتم الآن توجيهك...');
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-right" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
        
        {/* الشعار والترحيب */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-950 mb-2">تسجيل الدخول للمنصة</h2>
          <p className="text-sm text-slate-500">أدخل بياناتك الأكاديمية للمتابعة</p>
        </div>

        {/* رسائل الخطأ والنجاح */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 text-center">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 text-center">
            {message}
          </div>
        )}

        {/* نموذج تسجيل الدخول */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              البريد الإلكتروني
            </label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              كلمة المرور
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 rounded-xl transition-colors shadow-sm mt-2"
          >
            {loading ? 'جاري التحقق...' : 'دخول'}
          </button>
        </form>

      </div>
    </div>
  );
}