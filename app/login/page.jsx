"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";
import { Eye, EyeOff } from "lucide-react"; 
const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
     const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [error, setError] = useState(null);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // إعادة تعيين الخطأ عند كل محاولة
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        // data.message يأتي من رسالة الخطأ في الخادم
        throw new Error(data.message || "حدث خطأ ما");
      }

      // استدعاء دالة login من الـ Context لحفظ التوكن وبيانات المستخدم
      login(data.token, data.user);

      // توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول بنجاح
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          className="w-full mb-3 p-2 border rounded"
          required
        />
      {/* بداية حقل كلمة المرور الجديد */}
             <div className="relative w-full mb-3">
               <input
                 type={showPassword ? "text" : "password"} // نوع ديناميكي
                 name="password"
                 placeholder="Password"
                 onChange={handleChange}
                 value={form.password}
                 className="w-full p-2 border rounded pr-10" // مساحة للأيقونة
                 required
               />
               <button
                 type="button" // لمنع إرسال الفورم
                 onClick={() => setShowPassword(!showPassword)}
                 className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
               >
                 {/* تبديل الأيقونة حسب الحالة */}
                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
               </button>
             </div>
             {/* نهاية حقل كلمة المرور الجديد */}
        <Button type="submit" className="w-full text-white py-2 rounded">Login</Button>
      </form>
    </div>
  );
};

export default Login;