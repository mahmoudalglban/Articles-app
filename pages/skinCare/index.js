import Link from "next/link";
import React from "react";
import GymnasticsCom from "../../components/GymnasticsCom";
import ImportantTopics from "../../components/ImportantTopics";
import MostReadNow from "../../components/MostReadNow";
import SkinCareCom from "../../components/SkinCareCom";
import WeightLossCom from "../../components/WeightLossCom";
import SeoCom from "../../components/SeoCom";
import AddressCom from "../../components/AddressCom";

const SkinCare = () => {
  return (
    <div>
      {/* ******************************************the head page************************************************* */}

      {/* the hed page */}
      <div>
      <SeoCom title="title" description="description" keyword="keyword" />
      </div>
      {/* ******************************************the firs row************************************************* */}
      <div className="row">
        {/* --------------------------the right col--------------------------  */}
        <div className="col-md-8">
          <Link href="/skinCare">
            <a>
              <AddressCom title="العناية بالبشرة" />
            </a>
          </Link>
          <div>
            <SkinCareCom />
          </div>
        </div>
        {/* -------------------------the left col-----------------------------  */}
        <div className="col-md-4">
          <ImportantTopics />
        </div>
      </div>
      {/* *********************************************the second row********************************************** */}

      <div>
        <a>
          <AddressCom title=" مقالات مشابهة" />
        </a>
        <div>
          <WeightLossCom />
        </div>
      </div>

      {/* ********************************************the third row *********************************************** */}

      <div className="row">
        {/* -----------------------the right col------------------------------- */}
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
        {/* ------------------------the left col-------------------------------- */}
        <div className="col-md-4">
          <MostReadNow />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SkinCare);
