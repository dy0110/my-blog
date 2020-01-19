import React from "react";
import { graphql } from "gatsby";

import Auther from "../components/auther";
import AriticleCard from "../components/ariticleCard";
import SEO from "../components/seo";
import { MarkdownRemarkConnection } from "../../types/graphql-types";

interface Props {
  data: {
    allMarkdownRemark:MarkdownRemarkConnection}
}

const BlogIndex: React.FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO title="All posts" />
      <Auther />
      {posts.map(({ node },index) => {
        const title = node.frontmatter?.title || node.fields?.slug;
        return (
          <AriticleCard
            title={title}
            key={index}
            slugTitle={node.fields?.slug}
            date={node.frontmatter?.date}
            description={node.frontmatter?.description}
            excerpt={node.excerpt}
            category={node.frontmatter?.category}
            tags={node.frontmatter?.tags}
          />
        );
      })}
    </>
  );
};

export default BlogIndex;

export const topPageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD", locale: "ja")
            title
            description
            category
            tags
          }
        }
      }
    }
  }
`;
