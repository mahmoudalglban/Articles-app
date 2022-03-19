import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";
import { Button } from "@material-ui/core";
import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container p-4 pb-0">
        <div className="d-flex flex-column" dir="rtl">
          <div className="text-center ">
            <Button>
              <Link href="/">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  الصفحة الرئيسية
                </a>
              </Link>
            </Button>
            <Button>
              <Link href="/articles">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  مقالات
                </a>
              </Link>
            </Button>

            <Button>
              <Link href="/skinCare">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  العناية بالبشرة
                </a>
              </Link>
            </Button>
            <Button>
              <Link href="/weightLoss">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  التخسيس
                </a>
              </Link>
            </Button>
            <Button>
              <Link href="/gymnastics">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  تمارين
                </a>
              </Link>
            </Button>
            <Button>
              <Link href="/grass">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>أعشاب</a>
              </Link>
            </Button>
          </div>
          <SocialMedia />
          <hr />

          <div className="text-center ">
            <Button>
              <Link href="/privacy">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  سياسة الاستخدام
                </a>
              </Link>
            </Button>
            <Button>
              <Link href="/contactUs">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  اتصل بنا
                </a>
              </Link>
            </Button>
            <Button>
              <Link href="/aboutUs">
                <a className={` ${style.ahover} ` + "text-white fs-5"}>
                  من نحن
                </a>
              </Link>
            </Button>
          </div>

          <div>
            <div className={style.copytext}>
              <span> © 2022 Copyright : </span>
              <a className="text-white">MAHMOUD HUSSIEN</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
