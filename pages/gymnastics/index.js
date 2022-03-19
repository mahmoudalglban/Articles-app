import Link from "next/link";
import React from "react";
import GymnasticsCom from "../../components/GymnasticsCom";
import ImportantTopics from "../../components/ImportantTopics";
import SkinCareCom from "../../components/SkinCareCom";
import SeoCom from "../../components/SeoCom";
import AddressCom from "../../components/AddressCom";

const Gymnastics = () => {
  return (
    <div>
      {/* ******************************************the hed page************************************************* */}

      <div>
      <SeoCom title="title" description="description" keyword="keyword" />
      </div>

      {/* ******************************************the first row************************************************* */}

      <div className="row">
        {/*  -----------------------------the right col-------------------------------  */}
        <div className="col-md-8">
          <Link href="/gymnastics">
            <a>
              <AddressCom title="التمارين الرياضية" />
            </a>
          </Link>
          <div>
            <GymnasticsCom />
          </div>
        </div>
        {/* ------------------------------the left col----------------------------------  */}
        <div className="col-md-4">
          <ImportantTopics />
        </div>
      </div>
      {/* ******************************************the second row************************************************* */}

      <div>
        <div>
          <a>
            <AddressCom title=" مقالات مشابهة" />
          </a>
          <div>
            <SkinCareCom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Gymnastics);
