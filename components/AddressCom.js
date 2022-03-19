import React from "react";
import style from "../styles/address.module.css";

const AddressCom = ({ title }) => {
  return (
    <div className={style.head}>
      <p className={style.title}>{title}</p>
    </div>
  );
};

export default AddressCom;
