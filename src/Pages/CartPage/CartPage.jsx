import React from "react";
import { useLocation } from "react-router-dom";
import Table from "../../Components/Table/Table";
const Cart = () => {
  const { pathname } = useLocation();
  console.log(location.pathname);
  return (
    <div className="my-10">
      <Table />
    </div>
  );
};

export default Cart;
