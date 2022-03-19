import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import AddressCom from "../../components/AddressCom";
import ArticleDetailsCom from "../../components/ArticleDetailsCom";
import ArticlesCom from "../../components/ArticlesCom";
import ImportantTopics from "../../components/ImportantTopics";
import SeoCom from "../../components/SeoCom";
import SkinCareCom from "../../components/SkinCareCom";
import { db } from "../../firebase";

const DetailsGrass = ({ gress }) => {
  const { description, title, keyword, articles, timestamp } = gress;
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

          <ArticleDetailsCom detail={gress} />


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

export default DetailsGrass;

export async function getStaticProps({ params }) {
  const id = params.id;
  const gressSnapshot = await getDoc(doc(db, "gress", id));
  const gress = gressSnapshot.data();
  gress.id = gressSnapshot.id;
  return {
    props: {
      gress: JSON.parse(JSON.stringify(gress)),
    },
  };
}

export async function getStaticPaths() {
  const gressCollection = collection(db, "gress");
  const gressSnapshot = await getDocs(gressCollection);
  const gress = gressSnapshot.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });
  const paths = gress.map((gress) => ({
    params: {
      id: gress.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
