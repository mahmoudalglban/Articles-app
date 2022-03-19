import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import AddressCom from "../../components/AddressCom";
import ArticleDetailsCom from "../../components/ArticleDetailsCom";
import ArticlesCom from "../../components/ArticlesCom";
import ImportantTopics from "../../components/ImportantTopics";
import SeoCom from "../../components/SeoCom";
import SkinCareCom from "../../components/SkinCareCom";
import { db } from "../../firebase";

const DetailsGymnastics = ({ gymnastic }) => {
  const { description, title, keyword, articles ,timestamp } = gymnastic;

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
          <ArticleDetailsCom detail={gymnastic} />


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

export default DetailsGymnastics;

export async function getStaticProps({ params }) {
  const id = params.id;
  const gymnasticSnapshot = await getDoc(doc(db, "gymnastics", id));
  const gymnastic = gymnasticSnapshot.data();
  gymnastic.id = gymnasticSnapshot.id;
  return {
    props: {
      gymnastic: JSON.parse(JSON.stringify(gymnastic)),
    },
  };
}

export async function getStaticPaths() {
  const gymnasticsCollection = collection(db, "gymnastics");
  const gymnasticsSnapshot = await getDocs(gymnasticsCollection);
  const gymnastics = gymnasticsSnapshot.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });
  const paths = gymnastics.map((gymnastics) => ({
    params: {
      id: gymnastics.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
