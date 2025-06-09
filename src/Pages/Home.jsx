import React, { useState } from "react";
import bannerImg from "./../assets/images/banner.png";
import { useLoaderData } from "react-router";
import PhonesContainer from "../Components/PhonesContainer";
import Button from "../Components/Button";

const Home = () => {
  const phones = useLoaderData();
  // console.log(phones);
  const [data, setData] = useState(phones);
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(value);
    if (value == "") {
      setData(phones);
    } else {
      const newData = phones.filter(
        (item) =>
          item.name.toLowerCase().split(" ").includes(value.toLowerCase()) ||
          item.brand.toLowerCase().split(" ").includes(value.toLowerCase()) ||
          item.storage
            .toString()
            .toLowerCase()
            .split(" ")
            .includes(value.toLowerCase())
      );

      setData(newData);
      setValue("");
    }
  };
  return (
    <div className="min-h-[calc(100vh-65px)] max-w-[1200px] mx-auto w-11/12 py-[48px]">
      <header className="flex flex-col justify-center items-center text-center">
        <div className="max-w-[448px]">
          <img className="w-full" src={bannerImg} alt="" />
        </div>

        <h1 className="text-7xl font-thin text-gray-900">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view details and purchase of top
          flagship phones <br />
          of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={handleSearch}
          className="flex flex-col justify-center items-center w-full mb-4 md:flex-row md:px-24 mt-[20px]">
          <input
            className="w-2/3 h-12 px-4 mb-3  bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Phone by Model or Brand"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {/* <button type="submit" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"></span>
          </button> */}

          <Button type="submit" label={"Search"}></Button>
        </form>
      </header>
      <main>
        <PhonesContainer phones={data}></PhonesContainer>
      </main>
    </div>
  );
};

export default Home;
