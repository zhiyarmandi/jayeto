// import React from "react";
// import { BedSingle, Bath, AreaChart } from "lucide-react";

// function House({ house }) {
//   return (
//     <div className="bg-white shadow-1 p-5 rounded-lg mt-16 mx-auto cursor-pointer hover:shadow-2xl transition">
//       <img className="mb-8 " src={house.image} />
//       <div className="bg-gray-700 rounded-full text-white px-3 py-1 inline-block">
//         {house.type}
//       </div>
//       <div className="bg-red-600 rounded-full text-white px-3 py-1 inline-block">
//         {house.city}
//       </div>

//       <div className="text-lg font-semibold max-w-65 ">{house.address}</div>
//       <div className="flex gap-x-4 my-4">
//         <div className="flex items-center text-gray-700 gap-1 ">
//           <div className="text-[20px] rounded-full ">
//             <BedSingle />
//           </div>
//           <div className="text-base ">{house.bedrooms}</div>
//         </div>
//         <div className="flex items-center text-gray-700 gap-1 ">
//           <div className="text-[20px] rounded-full ">
//             <Bath />
//           </div>
//           <div className="text-base ">{house.bathrooms}</div>
//         </div>
//         <div className="flex items-center text-gray-700 gap-1 ">
//           <div className="text-[20px] rounded-full ">
//             <AreaChart />
//           </div>
//           <div className="text-base ">{house.surface}</div>
//         </div>
//       </div>
//       <div className="text-lg font-semibold text-red-500 mb-4">
//         {house.price}  تومان 
//       </div>
//     </div>
//   );
// }

// export default House;




import React from "react";
import { Link } from "react-router-dom";
import { BedDouble, Bath, Ruler, MapPin } from "lucide-react";

function House({ house }) {
  const { id, image, type, name, city, address, price, bedrooms, bathrooms, surface } = house;

  const stats = [
    { icon: <BedDouble size={18} />, value: bedrooms, label: "خواب" },
    { icon: <Bath size={18} />, value: bathrooms, label: "حمام" },
    { icon: <Ruler size={18} />, value: surface, label: "" },
  ].filter((s) => s.value !== undefined && s.value !== null && s.value !== "");

  return (
    <Link
      to={`/details/${id}`}
      dir="rtl"
      className="group mt-15 block bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
    >
     
      <div className="relative overflow-hidden h-56 ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {type && (
          <span className="absolute top-3 right-3 bg-white/90 text-gray-800 text-sm px-3 py-1 rounded-full">
            {type}
          </span>
        )}

        {price !== undefined && (
          <span className="absolute bottom-3 right-3 text-white text-xl font-semibold">
            {Number(price).toLocaleString("fa-IR")} تومان
          </span>
        )}
      </div>

   
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-red-500 transition">
          {name}
        </h3>

        <p className="flex items-center gap-1.5 text-gray-500 text-sm mt-1.5 truncate">
          <MapPin size={15} className="shrink-0" />
          {[address, city].filter(Boolean).join("، ")}
        </p>

        {stats.length > 0 && (
          <div className="flex items-center gap-5 mt-4 pt-4 border-t border-gray-100 text-gray-700">
            {stats.map((s, i) => (
              <span key={i} className="flex items-center gap-1.5 text-sm">
                <span className="text-red-500">{s.icon}</span>
                {s.value} {s.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default House;