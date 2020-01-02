import React from "react";
import { Link, graphql } from "gatsby";
import { Box } from "grommet";

import Auther from "../components/auther";
import SEO from "../components/seo";
import { MarkdownRemark } from "../../types/graphql-types";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    },
    markdownRemark: MarkdownRemark
  },
  pageContext: any
}

const BlogPostTemplate:React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  console.log("post", post);

  return (
    <Box>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              display: `block`
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Auther />
          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </footer>
      </article>
    </Box>
  );
};

export default BlogPostTemplate;

export const blogPostPageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD", locale: "ja")
        description
        tags
        category
      }
    }
  }
`;
