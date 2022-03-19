import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { db } from "../firebase";
import CardPages from "./CardPages";


const GrassCom = () => {
  const [gress, setGress] = useState([]);

  useEffect(() => {
    async function getGress() {
      const gressCollection = collection(db, "gress");
      const q = query(gressCollection, orderBy("timestamp", "desc"));
      const gressSnapshot = await getDocs(q);
      const gress = gressSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setGress(gress);
    }
    getGress();
  }, []);
  return (
    <div className="row justify-content-start">
      {gress.map((detail, index) => (
        <CardPages key={index} detail={detail} />
      ))}
    </div>
  );
};

export default GrassCom;
