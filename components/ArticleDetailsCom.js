import React from "react";
import style from "../styles/articleDetails.module.css";

const ArticleDetailsCom = ({ detail }) => {
  const { description, title, keyword, articles, timestamp } = detail;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h1 className={` ${style.title} ` + "card-title"}>{title}</h1>
          <p className={` ${style.wrote} ` + "card-text"}>
            كتب :<span className={style.authorName}> محمود حسين </span>
          </p>
          <div className={style.date}>
            {new Date(timestamp?.seconds * 1000).toLocaleDateString(
              "ar-EG",
              options
            )}{" "}
            |{" "}
            {new Date(timestamp?.seconds * 1000).toLocaleString("ar-EG", {
              timeStyle: "short",
            })}
          </div>
          <hr />
          <div className={style.firstParagraph}>
            <h2 className="card-subtitle">{keyword}</h2>
            <p className="card-text">{articles}</p>
          </div>

          <div className={style.secondParagraph}>
            <h3 className="card-subtitle">{keyword}</h3>
            <p className="card-text">{articles}</p>
          </div>

          <div className={style.thirdParagraph}>
            <h4 className="card-subtitle">{keyword}</h4>
            <p className="card-text">{articles}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsCom;
