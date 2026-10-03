import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  BedDouble,
  Bath,
  Ruler,
  CalendarDays,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { housesData } from "./data";

function Details() {
  const { id } = useParams();


  const house = housesData.find((item) => String(item.id) === String(id));


  if (!house) {
    return (
      <div dir="rtl" className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-semibold mb-3">ملک مورد نظر پیدا نشد</h1>
        <p className="text-gray-500 mb-6">
          ممکن است این ملک حذف شده باشد یا آدرس اشتباه باشد.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-red-300 px-6 py-3 rounded-lg"
        >
          بازگشت به لیست ملک‌ها
        </Link>
      </div>
    );
  }

  const stats = [
    { icon: <BedDouble size={20} />, label: "اتاق خواب", value: house.bedrooms },
    { icon: <Bath size={20} />, label: "حمام", value: house.bathrooms },
    { icon: <Ruler size={20} />, label: "متراژ", value: house.surface },
    { icon: <CalendarDays size={20} />, label: "سال ساخت", value: house.year },
  ].filter((s) => s.value !== undefined && s.value !== null && s.value !== "");

  const agent = house.agent;

  return (
    <section dir="rtl" className="container mx-auto px-4 py-8 lg:py-12 min-h-200">
    
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 p-4  text-xl transition mb-6"
      >
        <ArrowRight size={18} />
        بازگشت به لیست
      </Link>

   
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">{house.name}</h1>
          <p className="flex items-center gap-2 text-gray-500">
            <MapPin size={18} />
            {[house.address, house.city].filter(Boolean).join("، ")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {house.type && (
            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              {house.type}
            </span>
          )}
          {house.price !== undefined && (
            <span className="text-2xl font-semibold text-red-500">
              {Number(house.price).toLocaleString("fa-IR")} تومان
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
     
        <div className="flex-1">
          <img
            src={house.imageLg || house.image}
            alt={house.name}
            className="w-full max-h-120 object-cover rounded-xl mb-8"
          />

      
          {stats.length > 0 && (
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg py-4"
                >
                  <span className="text-red-500">{s.icon}</span>
                  <span className="font-semibold">{s.value}</span>
                  <span className="text-sm text-gray-500">{s.label}</span>
                </li>
              ))}
            </ul>
          )}

 
          {house.description && (
            <div>
              <h2 className="text-xl font-semibold mb-3">درباره این ملک</h2>
              <p className="leading-8 text-gray-600">{house.description}</p>
            </div>
          )}
        </div>


        {agent && (
          <aside className="w-full lg:max-w-90 h-fit border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-6">
              {agent.image && (
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold">{agent.name}</p>
                {agent.phone && (
                  <p className="text-sm text-gray-500" dir="ltr">
                    {agent.phone}
                  </p>
                )}
              </div>
            </div>

            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="نام شما"
                className="border border-gray-300 focus:border-red-500 outline-none rounded-lg px-4 h-12"
              />
              <input
                type="email"
                placeholder="ایمیل"
                className="border border-gray-300 focus:border-red-500 outline-none rounded-lg px-4 h-12"
              />
              <input
                type="tel"
                placeholder="شماره تماس"
                className="border border-gray-300 focus:border-red-500 outline-none rounded-lg px-4 h-12"
              />
              <textarea
                placeholder={`سلام، از ملک «${house.name}» خوشم اومده...`}
                className="border border-gray-300 focus:border-red-500 outline-none rounded-lg px-4 py-3 h-28 resize-none"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-red-500 hover:bg-red-600 transition text-white rounded-lg h-12"
                >
                  ارسال پیام
                </button>
                {agent.phone && (
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition rounded-lg h-12"
                  >
                    <Phone size={16} />
                    تماس
                  </a>
                )}
              </div>
            </form>
          </aside>
        )}
      </div>
    </section>
  );
}

export default Details;