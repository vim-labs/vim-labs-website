/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function BlogPostPage(props) {
  const { content: BlogPostContents, metadata } = props;
  const { frontMatter } = BlogPostContents;
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${metadata.title}`}
      description={metadata.description}
      image={frontMatter.featuredImage}
    >
      {BlogPostContents && (
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <BlogPostItem frontMatter={frontMatter} metadata={metadata}>
                <BlogPostContents />
              </BlogPostItem>
              <div className="margin-vert--xl">
                <BlogPostPaginator
                  nextItem={metadata.nextItem}
                  prevItem={metadata.prevItem}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
