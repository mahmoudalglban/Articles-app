import React from "react";
import Link from "next/link";
import Image from "next/image";

import style from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-black  ">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <Image
              src="/24.png"
              objectFit="cover"
              width={100}
              height={20}
           
              alt="logo"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            className="navbar-nav ms-auto"
            dir="rtl"
          >
            <Link aria-current="page" href="/">
              <li className={style.navFont}>
                <a>الرئيسية</a>
              </li>
            </Link>

            <Link href="/articles">
              <li className={style.navFont}>
                <a>مقالات</a>
              </li>
            </Link>

            <Link href="/weightLoss">
              <li className={style.navFont}>
                <a>تخسيس</a>
              </li>
            </Link>

            <Link href="/skinCare">
              <li className={style.navFont}>
                <a>العناية بالبشرة</a>
              </li>
            </Link>

            <Link href="/grass">
              <li className={style.navFont}>
                <a>أعشاب</a>
              </li>
            </Link>

            <Link href="/gymnastics">
              <li className={style.navFont}>
                <a>تمارين</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
