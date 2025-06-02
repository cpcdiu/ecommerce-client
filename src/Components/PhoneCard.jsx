import React, { use } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import { CartContext } from "../Contexts/CartContext";
import { getCartFromLocal } from "../Utilities/localStorage";

const PhoneCard = ({ phone, isCart, handleDelete }) => {
  const navigate = useNavigate();
  const { setCartAmount } = use(CartContext);
  return (
    <div className="card bg-base-100 shadow-sm h-fit relative">
      <figure>
        <img src={phone.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{phone.name}</h2>
        <p>{phone.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/phone/${phone.id}`)}
            className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              View Details
            </span>
          </button>
        </div>
      </div>

      {isCart && (
        <div
          onClick={() => {
            handleDelete(phone);
            setCartAmount(getCartFromLocal().length);
          }}
          className="absolute  rounded-full -right-2 -top-2 cursor-pointer">
          <MdDelete
            size={30}
            className="p-[4px] rounded-full text-gray-700 bg-gray-400 hover:bg-gray-700 hover:text-gray-400"></MdDelete>
        </div>
      )}
    </div>
  );
};

export default PhoneCard;
