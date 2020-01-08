import React from "react";
import { graphql } from "gatsby";
import { Box, Heading } from "grommet";
import { Archive } from "grommet-icons";
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
      <div style={{display: "flex", alignItems:"center"}}>
        <Archive size={"28px"} />  
        <Heading level={2} margin={{left: "8px"}}>カテゴリ: {category}</Heading>
      </div>
    
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
            description
            date(formatString: "YYYY/MM/DD", locale: "ja")
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
