
import { useEffect, useState } from "react";
import style from "../styles/mostRead.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore/lite";
import { db } from "../firebase";
import Link from "next/link";

const MostReadNow = () => {
  const [allArray, setAllArray] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const articleCollection = collection(db, "articles");
      const gressCollection = collection(db, "gress");
      const gymnasticsCollection = collection(db, "gymnastics");
      const skinCareCollection = collection(db, "skincares");
      const weightLossCollection = collection(db, "weightloss");

      const articlesq = query(
        articleCollection,
        orderBy("timestamp", "desc"),
        limit(2)
      );
      const gressq = query(
        gressCollection,
        orderBy("timestamp", "desc"),
        limit(2)
      );
      const gymnasticsq = query(
        gymnasticsCollection,
        orderBy("timestamp", "desc"),
        limit(2)
      );
      const skincaresq = query(
        skinCareCollection,
        orderBy("timestamp", "desc"),
        limit(2)
      );
      const weightlossq = query(
        weightLossCollection,
        orderBy("timestamp", "desc"),
        limit(2)
      );

      const articleSnapshot = await getDocs(articlesq);
      const gressSnapshot = await getDocs(gressq);
      const gymnasticsSnapshot = await getDocs(gymnasticsq);
      const skinCareSnapshot = await getDocs(skincaresq);
      const weightLossSnapshot = await getDocs(weightlossq);

      const articles = articleSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      const gress = gressSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      const gymnastics = gymnasticsSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      const skinCares = skinCareSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;

        return data;
      });

      const weightLoss = weightLossSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setAllArray(() => [
        ...articles,
        ...gress,
        ...gymnastics,
        ...skinCares,
        ...weightLoss,
      ]);
    }

    getArticles();
  }, []);

  return (
    <div>
      <div className={style.contain}>
        <p className={style.title}>الأكثر قراءة الآن</p>
        {allArray.map((detail, index) => (
          <ul className={style.uilist} key={index}>
            <li className={style.list}>
              <Link href={`/${detail.page}/${detail.id}`}>
                <a>
                  <div className={style.number}>
                    <ArrowUpwardIcon />
                  </div>

                  <p className={style.text}>{detail?.title}</p>
                </a>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MostReadNow;
