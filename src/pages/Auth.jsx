import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";

function Field({ icon, type = "text", placeholder, value, onChange, dir }) {
  return (
    <div className="relative">
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        type={type}
        dir={dir}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-12 pr-12 pl-4 rounded-lg border border-gray-300 outline-none focus:border-red-500 transition"
      />
    </div>
  );
}


function Auth({ mode = "login" }) {
  const isLogin = mode === "login";
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(isLogin ? "login" : "register", form);
  };

  return (
    <section dir="rtl" className="container mx-auto px-4 py-12 flex justify-center min-h-150">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl p-8 shadow-sm h-fit">
        <h1 className="text-2xl font-semibold mb-2">
          {isLogin ? "ورود به حساب" : "ساخت حساب جدید"}
        </h1>
        <p className="text-gray-500 mb-8">
          {isLogin
            ? "ایمیل و رمز عبورت رو وارد کن."
            : "اطلاعات زیر رو پر کن تا حسابت ساخته بشه."}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <Field icon={<User size={18} />} placeholder="نام و نام خانوادگی" value={form.name} onChange={set("name")} />
              <Field icon={<Phone size={18} />} type="tel" dir="ltr" placeholder="شماره موبایل" value={form.phone} onChange={set("phone")} />
            </>
          )}

          <Field icon={<Mail size={18} />} type="email" dir="ltr" placeholder="ایمیل" value={form.email} onChange={set("email")} />

          <div className="relative">
            <Field
            
              icon={<Lock size={18} />}
              type={showPass ? "text" : "password"}
              dir="ltr"
              placeholder="رمز عبور"
              value={form.password}
              onChange={set("password")}
            />
            <button
              type="button"
              onClick={() => setShowPass((s) => !s)}
              aria-label={showPass ? "پنهان کردن رمز" : "نمایش رمز"}
              className="absolute  left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="h-12 rounded-lg bg-red-500 hover:bg-red-600 text-white transition mt-2"
          >
            {isLogin ? "ورود" : "ثبت نام"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          {isLogin ? "حساب نداری؟ " : "قبلاً ثبت نام کردی؟ "}
          <Link
            to={isLogin ? "/register" : "/login"}
            className="text-red-500 hover:underline"
          >
            {isLogin ? "ثبت نام" : "ورود"}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Auth;