import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { db } from "../firebase";
import CardPages from "./CardPages";
import React from "react";


const ArticlesCom = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const articleCollection = collection(db, "articles");
      const q = query(articleCollection, orderBy("timestamp", "desc"));
      const articleSnapshot = await getDocs(q);
      const articles = articleSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      
      setArticles(articles);
    }
    getArticles();

  }, []);

  return (
    <div className="row justify-content-start">
      {articles.map((detail, index) => (
        <CardPages key={index} detail={detail}/>
      ))}
    </div>
  );
};

export default React.memo(ArticlesCom) ;
