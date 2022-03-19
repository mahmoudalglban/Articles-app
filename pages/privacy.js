import React from "react";
import AddressCom from "../components/AddressCom";
import SeoCom from "../components/SeoCom";
import style from "../styles/privacy.module.css";

const Privacy = () => {
  return (
    <div className="container" dir="rtl">
      <div className="card ">
        <div className="card-body">
          <SeoCom
            title="سياسة الاستخدام للموقع والواجبات التي يجب اتباعها "
            description="لا يجوز تعمد استخدام أي برنامج إلكتروني أو وسيلة أو جهاز للتدخل أو
            محاولة التدخل إلكترونياً أو يدوياً بعملية التشغيل أو الأداء الوظيفي
            للموقع."
          />
          <AddressCom title="سياسة الاستخدام " />

          <p className={` ${style.text} ` + "card-text "}>
            لا يجوز تعمد استخدام أي برنامج إلكتروني أو وسيلة أو جهاز للتدخل أو
            محاولة التدخل إلكترونياً أو يدوياً بعملية التشغيل أو الأداء الوظيفي
            للموقع.
          </p>
          <p className={` ${style.text} ` + "card-text "}>
            - لا يجوز الحصول (أو محاولة الحصول) على إذن دخول غير مصرح به ، أو
            التدخل في أو إتلاف أو تشويش:
          </p>
          <p className={` ${style.text} ` + "card-text "}>
            (1) أي جزء من أجزاء الموقع.
          </p>
          <p className={` ${style.text} ` + "card-text mb-5 "}>
            (2) أي جهاز أو شبكة يخزن عليها الموقع.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
