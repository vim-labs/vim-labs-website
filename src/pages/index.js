import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Ideate</>,
    imageUrl: "img/abstract_1.svg",
    description: (
      <>
        The first sparks form at a simple concept, an exciting conversation, and
        a shared vision.
      </>
    )
  },
  {
    title: <>Iterate</>,
    imageUrl: "img/abstract_2.svg",
    description: (
      <>
        From a humble draft, forms begin to take shape as an iterative process
        transforms good into great.
      </>
    )
  },
  {
    title: <>Incubate</>,
    imageUrl: "img/abstract_3.svg",
    description: (
      <>
        Community involvement and experimentation leads to new discoveries and
        opportunities.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className="banner heroBanner"></header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <h1>Creative Exploration</h1>
              <h2 style={{ fontWeight: 300 }}>
                We are a design studio / technology laboratory in Las Vegas, NV,
                developing bold new prototypes and exploring wild &amp; crazy
                ideas that might just work.
              </h2>
              <div className="row" style={{ marginTop: "80px" }}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
