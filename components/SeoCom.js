import React from "react";
import Head from "next/head";

const SeoCom = ({ title, description, keyword }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="application-name" content="mahmoud" />
        <meta name="Keywords" content={keyword} />
        {/* <meta http-equiv="refresh" content="20000" /> */}
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="author" content="Mahmoud Hussien" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/24.png" />
      </Head>
    </div>
  );
};

export default SeoCom;
