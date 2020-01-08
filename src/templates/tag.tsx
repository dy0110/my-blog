import React from "react";
import { graphql } from "gatsby";
import { Box, Heading } from "grommet";
import { Tag } from "grommet-icons";
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
  const { tag } = pageContext;
  return (
    <Box tag={"div"} className="tag-container">
      <SEO title={`Posts in tag "${tag}"`} />
      <div style={{display: "flex", alignItems:"center"}}>
       <Tag size={"28px"} /> 
       <Heading level={2} margin={{left: "8px"}}>タグ: {tag}</Heading>
      </div>
      <PostsList postEdges={data.allMarkdownRemark.edges} />
    </Box>
  );
};

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tags
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
