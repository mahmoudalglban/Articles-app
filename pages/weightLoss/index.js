import Link from "next/link";
import GymnasticsCom from "../../components/GymnasticsCom";
import ImportantTopics from "../../components/ImportantTopics";
import SkinCareCom from "../../components/SkinCareCom";
import WeightLossCom from "../../components/WeightLossCom";
import MostReadNow from "../../components/MostReadNow";
import React from "react";
import SeoCom from "../../components/SeoCom";
import AddressCom from "../../components/AddressCom";

const weightLoss = () => {
  return (
    <div>
      {/* ******************************************the head page************************************************* */}

      <div>
      <SeoCom title="title" description="description" keyword="keyword" />
      </div>
      {/* ******************************************the firs row************************************************* */}

      <div className="row">
        {/* --------------------------the right col------------------------------  */}
        <div className="col-md-8">
          <Link href="/weightLoss">
            <a>
              <AddressCom title="التخسيس" />
            </a>
          </Link>
          <div>
            <WeightLossCom />
          </div>
        </div>
        {/* --------------------------the left col-------------------------------  */}
        <div className="col-md-4">
          <ImportantTopics />
        </div>
      </div>
      {/* ******************************************the second row************************************************* */}

      <div>
        <a>
          <AddressCom title=" مقالات مشابهة" />
        </a>
        <div>
          <SkinCareCom />
        </div>
      </div>
      {/* ******************************************the third row************************************************* */}

      <div className="row">
        {/* --------------------------the right col------------------------------- */}
        <div className="col-md-8">
          <div>
            <a>
              <AddressCom title="مقالات ذات صلة" />
            </a>
            <div>
              <GymnasticsCom />
            </div>
          </div>
        </div>
        {/* --------------------------the left col-------------------------------- */}
        <div className="col-md-4">
          <MostReadNow />
        </div>
      </div>
    </div>
  );
};

export default React.memo(weightLoss);
