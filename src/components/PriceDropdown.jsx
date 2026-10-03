// import { useContext, useState ,useEffect } from "react";
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
// import { Wallet, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
// import { HouseContext } from "./HouseContext";

// const PriceRangeDropdown = () => {    
//   const { price, setPrice } = useContext(HouseContext);
//   const [isOpen, setIsOpen] = useState(false);

//   const prices = [
//     {
//       value: ' قیمت (همه)',
//     },
//     {
//       value: '100000 - 130000',
//     },
//     {
//       value: '130000 - 160000',
//     },
//     {
//       value: '160000 - 190000',
//     },
//     {
//       value: '190000 - 220000',
//     },
//     {
//       value: '20000 - 30000',
//     },
//     {
//       value: '30000 - 40000',
//     },
//   ];

//   return (
//     <Menu as='div' className='dropdown relative'>
//       <MenuButton
//         onClick={() => setIsOpen(!isOpen)}
//         className='dropdown-btn w-full'
//       >
//         <Wallet className='dropdown-icon-primary' />
//         <div>
//           <div className='text-[15px] font-medium leading-tight'>{price}</div>
//           <div className='text-[13px]'> فیلتر محدوده قیمت </div>
//         </div>
//           {isOpen ? (
//             <ArrowUpIcon className="dropdown-icon-secondary" />
//           ) : (
//             <ArrowDownIcon className="dropdown-icon-secondary" />
//           )}
//       </MenuButton>

//       <MenuItems className='dropdown-menu'>
//         {prices.map((price, index) => {
//           return (
//             <MenuItem
//               as='li'
//               onClick={() => setPrice(price.value)}
//               key={index}
//               className='cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition'
//             >
//               {price.value}
//             </MenuItem>
//           );
//         })}
//       </MenuItems>
//     </Menu>
//   );
// };

// export default PriceRangeDropdown;






import React, { useContext } from "react";
import { Wallet } from "lucide-react";
import { HouseContext } from "./HouseContext";
import Dropdown from "./Dropdown";


const fa = (n) => Number(n).toLocaleString("fa-IR");

const ranges = [
  [0, 1000000],
  [1000000, 2000000],
  [2000000, 3000000],
  [3000000, 5000000],
  [5000000, 10000000],
];

const options = [
  { label: "قیمت ها (همه)", value: "قیمت ها (همه)" },
  ...ranges.map(([min, max]) => ({
    label: `${fa(min)} تا ${fa(max)}`,
    value: `${min} - ${max}`,
  })),
];

function PriceDropdown() {
  const { price, setPrice } = useContext(HouseContext);

  return (
    <Dropdown
      icon={<Wallet size={22} />}
      options={options}
      value={price}
      onChange={setPrice}
    />
  );
}

export default PriceDropdown;