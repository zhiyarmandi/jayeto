// function Footer() {
//   return (
//     <div className="bg-black  py-8 ">
//       <h1 className=" text-center text-lg text-white">
//         ساخته شده توسط
//         <span className="text-xl"> من </span>
//       </h1>
//     </div>
//   );
// }

// export default Footer;






import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// ---- اطلاعات خودت رو اینجا عوض کن ----
const SITE_NAME = "جای تو";
const CONTACT = {
  phone: "021-12345678",
  email: "support@jayeto.com",
  address: "تهران، خیابان ولیعصر، پلاک فلانیی",
  hours: "شنبه تا پنجشنبه، ۹ تا ۱۸",
};
const SOCIALS = [
  { name: "اینستاگرام", icon: FaInstagram, href: "#" },
  { name: "تلگرام", icon: FaTelegramPlane, href: "#" },
  { name: "لینکدین", icon: FaLinkedinIn, href: "#" },
  { name: "توییتر", icon: FaTwitter, href: "#" },
];
const LINKS = [
  { label: "صفحه اصلی", to: "/" },
  { label: "اجاره ملک", to: "/" },
  { label: "درباره ما", to: "/" },
  { label: "قوانین و مقررات", to: "/" },
];
// --------------------------------------

function Footer() {
  const year = new Date().toLocaleDateString("fa-IR", { year: "numeric" });

  return (
    <footer dir="rtl" className="bg-gray-900 text-gray-400 mt-16">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr]">
        {/* درباره */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            {SITE_NAME}
          </Link>
          <p className="mt-4 leading-8 max-w-sm">
            چیزی  اجاره ملک با اطلاعات درست و مشاوره واقعی. اگر سوالی
            داشتی، تیم پشتیبانی کنارته.
          </p>

          <div className="flex gap-3 mt-6">
            {SOCIALS.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* لینک‌ها */}
        <div>
          <h3 className="text-white font-semibold mb-4">دسترسی سریع</h3>
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-red-400 transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* پشتیبانی */}
        <div>
          <h3 className="text-white font-semibold mb-4">پشتیبانی</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-red-500 shrink-0" />
              <a
                href={`tel:${CONTACT.phone}`}
                dir="ltr"
                className="hover:text-white transition"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-red-500 shrink-0" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-white transition"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-red-500 shrink-0 mt-1" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-red-500 shrink-0" />
              <span>{CONTACT.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p>
            © {year} {SITE_NAME}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-5">
            <Link to="/" className="hover:text-white transition">
              حریم خصوصی
            </Link>
            <Link to="/" className="hover:text-white transition">
              سوالات متداول
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;