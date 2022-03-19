import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import AddressCom from "../../components/AddressCom";
import ArticleDetailsCom from "../../components/ArticleDetailsCom";
import ArticlesCom from "../../components/ArticlesCom";
import ImportantTopics from "../../components/ImportantTopics";
import SeoCom from "../../components/SeoCom";
import SkinCareCom from "../../components/SkinCareCom";
import { db } from "../../firebase";

const DetailsSkinCare = ({ skinCare }) => {
  const { description, title, keyword, articles, timestamp } = skinCare;

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
          <ArticleDetailsCom detail={skinCare} />

          <div>
            <a>
              <AddressCom title="مقالات مشابهة" />
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

export default DetailsSkinCare;

export async function getStaticProps({ params }) {
  const id = params.id;
  const skinCareSnapshot = await getDoc(doc(db, "skincares", id));
  const skinCare = skinCareSnapshot.data();
  skinCare.id = skinCareSnapshot.id;
  return {
    props: {
      skinCare: JSON.parse(JSON.stringify(skinCare)),
    },
  };
}

export async function getStaticPaths() {
  const skinCareCollection = collection(db, "skincares");
  const skinCareSnapshot = await getDocs(skinCareCollection);
  const skinCares = skinCareSnapshot.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });
  const paths = skinCares.map((skin) => ({
    params: {
      id: skin.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
