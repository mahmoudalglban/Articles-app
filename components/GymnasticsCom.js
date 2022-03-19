import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { db } from "../firebase";
import CardPages from "./CardPages";


const GymnasticsCom = () => {
  const [gymnastics, setGymnastics] = useState([]);

  useEffect(() => {
    async function getGymnastics() {
      const gymnasticsCollection = collection(db, "gymnastics");
      const q = query(gymnasticsCollection, orderBy("timestamp", "desc"));
      const gymnasticsSnapshot = await getDocs(q);
      const gymnastics = gymnasticsSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setGymnastics(gymnastics);
    }
    getGymnastics();
  }, []);
  return (
    <div className="row justify-content-start">
      {gymnastics.map((detail, index) => (
        <CardPages key={index} detail={detail}/>
      ))}
    </div>
  );
};

export default GymnasticsCom;
