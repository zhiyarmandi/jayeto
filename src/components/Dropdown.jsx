import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

/**
 * دراپ‌داون مشترک برای هر سه فیلتر
 * options: [{ label: "نمایش", value: "مقدار" }]
 */
function Dropdown({ icon, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // بستن با کلیک بیرون یا زدن Escape
  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} dir="rtl" className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full h-16 bg-white text-gray-800 rounded-lg px-4 flex items-center gap-3 shadow-md border-2 transition
          ${open ? "border-red-500" : "border-transparent hover:border-red-200"}`}
      >
        <span className="text-red-500 shrink-0">{icon}</span>
        <span className="flex-1 text-right truncate">
          {selected ? selected.label : value}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full mt-2 w-full z-30 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 max-h-64 overflow-y-auto py-1"
        >
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`flex items-center justify-between gap-2 px-4 py-3 cursor-pointer transition
                  ${active ? "bg-red-50 text-red-600 font-medium" : "hover:bg-gray-50"}`}
              >
                <span>{opt.label}</span>
                {active && <Check size={16} />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;