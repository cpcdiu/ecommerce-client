import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "./Button";
import {
  getCartFromLocal,
  saveCartToLocal,
  saveFavoritesToLocal,
} from "../Utilities/localStorage";
import { CartContext } from "../Contexts/CartContext";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { setCartAmount } = use(CartContext);

  const phone = data.find((item) => item.id === parseInt(id));

  // console.log(Object.keys(phone.price));

  return (
    <div className="max-w-[1200px] mx-auto w-11/12 min-h-[calc(100vh-65px)] mb-[60px]">
      <img className="mx-auto my-[30px]" src={phone.image} alt="" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <h1 className="text-4xl self-start">{phone.name}</h1>
        <div className="self-end flex gap-3">
          <Button
            onClick={() => {
              saveFavoritesToLocal(phone);
            }}
            label={"Favorite"}></Button>
          <Button
            onClick={() => {
              saveCartToLocal(phone);
              setCartAmount(getCartFromLocal().length);
            }}
            label={"Cart"}></Button>
        </div>
      </div>
      <h1 className="text-3xl mt-[20px]">Details : </h1>
      <h1 className="text-base font-bold mt-[20px]">Brand : {phone.brand}</h1>
      <h1 className="text-base font-bold mt-[20px]">Model : {phone.model}</h1>
      <div className="flex gap-[5px] items-start mt-[20px]">
        <h1 className="text-base font-bold">Storage :</h1>
        <div>
          {phone.storage.map((e, i) => (
            <p key={i} className="text-base">
              {e}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-[5px] items-start mt-[20px]">
        <h1 className="text-base font-bold">Price :</h1>
        <div>
          {Object.entries(phone.price).map(([storage, price], i) => (
            <p key={i} className="text-base">
              {storage} : {price}
            </p>
          ))}
        </div>
      </div>
      <h1 className="text-base font-bold mt-[20px]">
        Camera Info : <span className="font-normal">{phone.camera_info}</span>
      </h1>
      <h1 className="text-base font-bold mt-[20px]">
        Description : <span className="font-normal">{phone.description}</span>
      </h1>
    </div>
  );
};

export default Details;
