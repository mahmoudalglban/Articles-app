import ImportantTopics from "../components/ImportantTopics";
import MostReadNow from "../components/MostReadNow";
import ArticlesCom from "../components/ArticlesCom";
import GrassCom from "../components/GrassCom";
import GymnasticsCom from "../components/GymnasticsCom";
import SkinCareCom from "../components/SkinCareCom";
import Link from "next/link";
import WeightLossCom from "../components/WeightLossCom";
import React from "react";
import SeoCom from "../components/SeoCom";
import AddressCom from "../components/AddressCom";

function Home() {
  return (
    <div>
      <div>
        <SeoCom title="title" description="description" keyword="keyword" />
      </div>
      {/* first row com articles */}

      <div className="row">
        <div className="col-md-8">
          <AddressCom title="الرئيسية" />
          <div>
            <ArticlesCom />
          </div>
        </div>
        <div className="col-md-4">
          <ImportantTopics />
        </div>
      </div>
      {/* secand row com gymnastics  */}
      <div>
        <Link href="/gymnastics">
          <a>
            <AddressCom title="التمارين الرياضية" />
          </a>
        </Link>

        <div>
          <GymnasticsCom />
        </div>
      </div>

      {/* third row com gress  */}
      <div className="row">
        <div className="col-md-8">
          <Link href="/grass">
            <a>
              <AddressCom title="أعشاب" />
            </a>
          </Link>
          <div>
            <GrassCom />
          </div>
        </div>

        <div className="col-md-4">
          <div>
            <MostReadNow />
          </div>
        </div>
      </div>
      {/* four row com skincare */}
      <div>
        <Link href="/skinCare">
          <a>
            <AddressCom title="العناية بالبشرة" />
          </a>
        </Link>
        <div>
          <SkinCareCom />
        </div>
      </div>
      {/* five row com weightloss */}

      <Link href="/weightLoss">
        <a>
          <AddressCom title="التخسيس" />
        </a>
      </Link>
      <div>
        <WeightLossCom />
      </div>
    </div>
  );
}

export default React.memo(Home);
