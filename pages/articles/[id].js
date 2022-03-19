import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import ImportantTopics from "../../components/ImportantTopics";
import { db } from "../../firebase";
import ArticlesCom from "../../components/ArticlesCom";
import SkinCareCom from "../../components/SkinCareCom";
import React from "react";
import SeoCom from "../../components/SeoCom";
import AddressCom from "../../components/AddressCom";
import ArticleDetailsCom from "../../components/ArticleDetailsCom";

const Articles = ({ article }) => {
  const { description, title, keyword, articles, timestamp } = article;

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
          <ArticleDetailsCom detail={article} />
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

export default React.memo(Articles);

export async function getStaticProps({ params }) {
  const id = params.id;
  const articleSnapshot = await getDoc(doc(db, "articles", id));
  const article = articleSnapshot.data();
  article.id = articleSnapshot.id;
  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
    },
  };
}

export async function getStaticPaths() {
  const articleCollection = collection(db, "articles");
  const articleSnapshot = await getDocs(articleCollection);
  const articles = articleSnapshot.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });
  const paths = articles.map((article) => ({
    params: {
      id: article.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
