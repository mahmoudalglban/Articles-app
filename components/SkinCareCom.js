import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { db } from "../firebase";
import CardPages from "./CardPages";
import Link from "next/link";

const SkinCareCom = () => {
  const [skinCare, setSkinCare] = useState([]);

  useEffect(() => {
    async function getSkinCare() {
      const skinCareCollection = collection(db, "skincares");
      const q = query(skinCareCollection, orderBy("timestamp", "desc"));
      const skinCareSnapshot = await getDocs(q);
      const skinCares = skinCareSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;

        return data;
      });
      setSkinCare(skinCares);
    }
    getSkinCare();
  }, []);
  return (
    <div className="row justify-content-start">
      {skinCare.map((detail, index) => (
        <CardPages key={index} detail={detail} />
      ))}
    </div>
  );
};

export default SkinCareCom;
