import React from "react";
import { graphql } from "gatsby";
import { Box, Heading } from "grommet";

import SEO from "../components/seo";
import PostsList from "../components/postsList";
import { MarkdownRemarkConnection } from "../../types/graphql-types";

interface Props {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection
  },
  pageContext: any
}

const CategoryTemplate: React.FC<Props> = ({ pageContext, data }) => {
  const { category } = pageContext;
  return (
    <Box tag={"div"} className="category-container">
      <SEO title={`Posts in category "${category}"`} />

      <Heading level={2}>カテゴリ: {category}</Heading>
      <PostsList postEdges={data.allMarkdownRemark.edges} />
    </Box>
  );
};

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD", locale: "ja")
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
