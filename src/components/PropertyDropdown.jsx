// import {  useContext, useState } from "react";
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
// import { HomeIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
// import { HouseContext } from "./HouseContext";

// function PropertyDropdown() {
//   const { property, setProperty, properties } = useContext(HouseContext);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <Menu as="div" className="dropdown relative">
//         <MenuButton
//           className="dropdown-btn w-full text-left"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <HomeIcon className="dropdown-icon-primary" />
//           <div>
//             <div className="text-[15px] font-medium leading-tight">
//               {property}
//             </div>
//             <div className="text[13px]"> نوع ملک خود را انتخاب کنید </div>
//           </div>
//           {isOpen ? (
//             <ArrowUpIcon className="dropdown-icon-secondary" />
//           ) : (
//             <ArrowDownIcon className="dropdown-icon-secondary" />
//           )}
//         </MenuButton>
//         <MenuItems className="dropdown-menu">
//           {properties.map((property, index) => {
//             return (
//               <MenuItem
//                 className="cursor-pointer rounded-full px-2 py-2 hover:bg-red-600 transition
//                     "
//                 key={index}
//                 as="li"
//                 onClick={() => setProperty(property)}
//               >
//                 {property}
//               </MenuItem>
//             );
//           })}
//         </MenuItems>
//       </Menu>
//     </div>
//   );
// }

// export default PropertyDropdown;










import React, { useContext } from "react";
import { Home } from "lucide-react";
import { HouseContext } from "./HouseContext";
import Dropdown from "./Dropdown";

function PropertyDropdown() {
  const { property, setProperty, properties } = useContext(HouseContext);

  const options = properties.map((p) => ({ label: p, value: p }));

  return (
    <Dropdown
      icon={<Home size={22} />}
      options={options}
      value={property}
      onChange={setProperty}
    />
  );
}

export default PropertyDropdown;