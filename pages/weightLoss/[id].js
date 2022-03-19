import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import AddressCom from "../../components/AddressCom";
import ArticleDetailsCom from "../../components/ArticleDetailsCom";
import ArticlesCom from "../../components/ArticlesCom";
import ImportantTopics from "../../components/ImportantTopics";
import SeoCom from "../../components/SeoCom";
import SkinCareCom from "../../components/SkinCareCom";
import { db } from "../../firebase";

const DetailsWeightLessId = ({ weightLoss }) => {
  const { description, title, keyword, articles, timestamp } = weightLoss;
  return (
    <div>
      <div>
        <SeoCom title={title} description={description} keyword={keyword} />
      </div>
      <div className="row">
        <div className="col-md-8">
          <a>
            <AddressCom title="تفاصيل المقال" />
          </a>
          <ArticleDetailsCom detail={weightLoss} />


          <div>
            <a>
              <AddressCom title=" مقالات مشابهة" />
            </a>
            <div>
              <ArticlesCom />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ImportantTopics />
        </div>
      </div>
      <div>
        <a>
          <AddressCom title="مقالات ذات صلة" />
        </a>
        <div>
          <SkinCareCom />
        </div>
      </div>
    </div>
  );
};

export default DetailsWeightLessId;

export async function getStaticProps({ params }) {
  const id = params.id;
  const weightLossSnapshot = await getDoc(doc(db, "weightloss", id));
  const weightLoss = weightLossSnapshot.data();
  weightLoss.id = weightLossSnapshot.id;
  return {
    props: {
      weightLoss: JSON.parse(JSON.stringify(weightLoss)),
    },
  };
}

export async function getStaticPaths() {
  const weightLossCollection = collection(db, "weightloss");
  const weightLossSnapshot = await getDocs(weightLossCollection);
  const weightLoss = weightLossSnapshot.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });
  const paths = weightLoss.map((weightLoss) => ({
    params: {
      id: weightLoss.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
