import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "./../styles/cardPages.module.css";

const CardPages = ({ detail }) => {
  const { title, id, image, timestamp, page } = detail;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="mb-3 col-lg-4 col-sm-6 col-6">
      <div className={` ${style.card} `}>
        {image && (
          <div>
            <Image
              src={image}
              objectFit="cover"
              width={286}
              height={180}
              className="img-fluid rounded-start card-img-top"
              layout="responsive"
              alt={title}
            />
          </div>
        )}

        <div className="card-body">
          <p className={`${style.cardText}`}>{title}</p>
          <span className={` ${style.date} ` + " opacity-100"}>
            {new Date(timestamp?.seconds * 1000).toLocaleDateString(
              "ar-EG",
              options
            )}{" "}
            |{" "}
            {new Date(timestamp?.seconds * 1000).toLocaleString("ar-EG", {
              timeStyle: "short",
            })}
          </span>
          <div className={style.button}>
            <Link href={`/${page}/${id}`}>قراءه المزيد</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardPages);
