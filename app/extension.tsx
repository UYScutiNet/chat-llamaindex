import Head from "next/head";
import Script from "next/script";
import { PropsWithChildren, useEffect, useState } from "react";

const Layout = (props: PropsWithChildren<{ minHeight?: number }>) => {
  return (
    <>
      <Head>
        <title>WhatIsThePoint.xyz gives you the point</title>
        <meta
          name="description"
          content="Get the main insight from any article using GPT"
        />

        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Script
        src="/lemon.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          window.createLemonSqueezy();
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
          minWidth: "500px",
          minHeight: props.minHeight,
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default function Extension() {
  const [minHeight, setMinHeight] = useState<number | undefined>();
  const [keyInsight, setKeyInsight] = useState<string | undefined>();

  async function summarizeArticle() {
    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    // const tab = {
    //     url: "https://www.garmin.com/en-US/blog/marine/ghost-boat-with-garmin-gps-leads-father-son-duo-to-man-overboard/",
    // };

    if (tab.url) {
      try {
        console.log(" ----- tab.url", tab.url);
        // await mutateAsync({ url: tab.url });
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <Layout minHeight={minHeight}>
      <div>Welcome to access GSC!!!</div>

      {keyInsight ? (
        <div style={{ margin: "auto", padding: 2, fontSize: 1 }}>
          {keyInsight}
        </div>
      ) : null}

      <a
        // href="https://scholarstream.lemonsqueezy.com/checkout/buy/c47d6d06-4103-450b-a3f1-de24e8a3339d?embed=1&discount=0&media=0"
        href="#"
        target="_blank"
        className="lemonsqueezy-button"
        style={{ marginBottom: 2 }}
        onClick={() => {
          setMinHeight(600);
          summarizeArticle();
        }}
      >
        Support GSC
      </a>
    </Layout>
  );
}
