// import { useContext, useState } from "react";
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
// import { MapPin, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
// import { HouseContext } from "./HouseContext";

// function CityDropdown() {
//   const { city, setCity, Cities } = useContext(HouseContext);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <Menu as="div" className="dropdown relative">
//         <MenuButton
//           className="dropdown-btn w-full text-left"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <MapPin className="dropdown-icon-primary" />
//           <div>
//             <div className="text-[15px] font-medium leading-tight">{city}</div>
//             <div className="text[13px]">انتخاب مقصد </div>
//           </div>
//           {isOpen ? (
//             <ArrowUpIcon className="dropdown-icon-secondary" />
//           ) : (
//             <ArrowDownIcon className="dropdown-icon-secondary" />
//           )}
//         </MenuButton>
//         <MenuItems className="dropdown-menu">
//           {Cities.map((city, index) => {
//             return (
//               <MenuItem
//                 className="cursor-pointer rounded-full px-2 py-2 hover:bg-red-600 transition
//                     "
//                 key={index}
//                 as="li"
//                 onClick={() => setCity(city)}
//               >
//                 {city}
//               </MenuItem>
//             );
//           })}
//         </MenuItems>
//       </Menu>
//     </div>
//   );
// }

// export default CityDropdown;




import React, { useContext } from "react";
import { MapPin } from "lucide-react";
import { HouseContext } from "./HouseContext";
import Dropdown from "./Dropdown";

function CityDropdown() {
  const { city, setCity, Cities } = useContext(HouseContext);

  const options = Cities.map((c) => ({ label: c, value: c }));

  return (
    <Dropdown
      icon={<MapPin size={22} />}
      options={options}
      value={city}
      onChange={setCity}
    />
  );
}

export default CityDropdown;