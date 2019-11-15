import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Render a single blog post template.
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
