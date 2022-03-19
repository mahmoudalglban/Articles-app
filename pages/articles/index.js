import Link from "next/link";
import ArticlesCom from "../../components/ArticlesCom";
import ImportantTopics from "../../components/ImportantTopics";
import SkinCareCom from "../../components/SkinCareCom";
import WeightLossCom from "../../components/WeightLossCom";
import MostReadNow from "../../components/MostReadNow";
import React from "react";
import SeoCom from "../../components/SeoCom";
import AddressCom from "../../components/AddressCom";

const Articles = () => {
  return (
    <div>
      {/* ******************************************the hed page************************************************* */}

      <div>
      <SeoCom title="title" description="description" keyword="keyword" />
      </div>
      {/* ******************************************the firs row************************************************* */}

      <div className="row">
        {/* -------------------------------the right cal---------------------------------  */}
        <div className="col-md-8">
          <Link href="/articles">
            <a>
              <AddressCom title="مقالات" />
            </a>
          </Link>
          <div>
            <ArticlesCom />
          </div>
        </div>
        {/* ------------------------------the left  cal---------------------------------  */}
        <div className="col-md-4">
          <ImportantTopics />
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
          {/* ----------------------------------the right col------------------------------ */}
          <div className="col-md-8">
            <div>
              <a>
                <AddressCom title="مقالات ذات صلة" />
              </a>
              <div>
                <WeightLossCom />
              </div>
            </div>
          </div>
          {/*  ---------------------------------the left col-------------------------------- */}
          <div className="col-md-4">
            <MostReadNow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Articles);
