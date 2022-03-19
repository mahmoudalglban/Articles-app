import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { db } from "../firebase";
import CardPages from "./CardPages";
import Link from "next/link";

const WeightLossCom = () => {
  const [weightLoss, setWeightLoss] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const weightLossCollection = collection(db, "weightloss");
      const q = query(weightLossCollection, orderBy("timestamp", "desc"));
      const weightLossSnapshot = await getDocs(q);
      const weightLoss = weightLossSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setWeightLoss(weightLoss);
    }
    getArticles();
  }, []);
  return (
    <div className="row justify-content-start">
      {weightLoss.map((detail, index) => (
        <CardPages key={index} detail={detail}/>
      ))}
    </div>
  );
};

export default WeightLossCom;
