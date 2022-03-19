import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

import Image from "next/image";
import { db } from "../firebase";

const MainCom = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    async function getPhoto() {
      const photoCollection = collection(db, "image");
      const photoSnapshot = await getDocs(photoCollection);
      const photos = photoSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPhoto(photos);
    }
    getPhoto();
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide text-center mb-3 mt-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        {photo.map((detail, index) => (
          <div
            className={index === 0 ? "carousel-item active" : "carousel-item "}
            key={index}
          >
            {detail?.image && (
              <div>
                <Image
                  src={detail?.image}
                  width={1200}
                  height={400}
                  // quality={50}
                  className="d-block w-100"
                  layout="responsive"
                  alt={detail?.title}
                  priority
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon text-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden text-dark">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainCom;
