import React from "react";
import { deleteCart, getCartFromLocal } from "../Utilities/localStorage";
import PhoneCard from "./PhoneCard";
import { useState } from "react";

const Cart = () => {
  const data = getCartFromLocal();
  const [phones, setPhones] = useState(data);

  const handleDelete = (item) => {
    deleteCart(item);
    setPhones(phones.filter((phone) => phone.id !== item.id));
  };
  return data.length === 0 ? (
    <div className=" min-h-[calc(100vh-65px)] max-w-[1200px] mx-auto w-11/12 my-[50px]">
      <h1 className="text-4xl">No items in Cart</h1>
    </div>
  ) : (
    <div className="max-w-[1200px] mx-auto w-11/12 my-[50px] grid md:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-65px)] gap-[20px]">
      {phones.map((item) => (
        <PhoneCard
          key={item.id}
          phone={item}
          isCart={true}
          handleDelete={handleDelete}></PhoneCard>
      ))}
    </div>
  );
};

export default Cart;
