import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "./Button";

const PhonesContainer = ({ phones }) => {
  // console.log(phones);

  const [data, setData] = useState(phones);
  const [isAll, setIsAll] = useState(false);

  useEffect(() => {
    if (!isAll) {
      setData(phones.slice(0, 6));
    } else {
      setData(phones);
    }
  }, [isAll, phones]);

  const handleClick = () => {
    setIsAll((prev) => !prev);
    if (isAll) {
      window.scrollTo(0, 400);
    }
  };
  return (
    <div>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {data.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>

      {/* <button
        onClick={handleClick}
        className="relative inline-block text-lg group cursor-pointer">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">{isAll ? "View less" : "View all"}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"></span>
      </button> */}

      <Button
        onClick={handleClick}
        label={isAll ? "View less" : "View all"}></Button>
    </div>
  );
};

export default PhonesContainer;
