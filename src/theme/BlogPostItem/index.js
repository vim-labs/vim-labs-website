/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import classnames from "classnames";
import { MDXProvider } from "@mdx-js/react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import MDXComponents from "@theme/MDXComponents";

import styles from "./styles.module.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false
  } = props;
  const { date, permalink, tags } = metadata;
  const { author, title } = frontMatter;
  const { siteConfig } = useDocusaurusContext();

  const renderPostHeader = () => {
    const match = date.substring(0, 10).split("-");
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <header>
        <h1 className={classnames("margin-bottom--sm", styles.blogPostTitle)}>
          <Link to={permalink}>{title}</Link>
        </h1>
        <div className="margin-bottom--sm">
          <small>
            {month} {day}, {year}
          </small>
        </div>
        <div className="avatar margin-bottom--md">
          <a
            className="avatar__photo-link"
            href={siteConfig.customFields.authors[author].url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="avatar__photo"
              src={siteConfig.customFields.authors[author].avatarUrl}
              alt={author}
            />
          </a>
          <div className="avatar__intro">
            {
              <>
                <h4 className="avatar__name">
                  <a
                    href={siteConfig.customFields.authors[author].url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {author}
                  </a>
                </h4>
                <small className="avatar__subtitle">
                  {siteConfig.customFields.authors[author].title}
                </small>
              </>
            }
          </div>
        </div>
      </header>
    );
  };

  return (
    <article className={!isBlogPostPage ? "margin-bottom--xl" : undefined}>
      {renderPostHeader()}
      <section className="markdown">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </section>
      {(tags.length > 0 || truncated) && (
        <footer className="row margin-vert--lg">
          {tags.length > 0 && (
            <div className="col">
              <strong>Tags:</strong>
              {tags.map(({ label, permalink: tagPermalink }) => (
                <Link
                  key={tagPermalink}
                  className="margin-horiz--sm"
                  to={tagPermalink}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
          {truncated && (
            <div className="col text--right">
              <Link
                to={metadata.permalink}
                aria-label={`Read more about ${title}`}
              >
                <strong>Read More</strong>
              </Link>
            </div>
          )}
        </footer>
      )}
    </article>
  );
}

export default BlogPostItem;
