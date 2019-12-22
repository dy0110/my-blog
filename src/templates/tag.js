import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "grommet"

import SEO from "../components/seo"
import PostsList from "../components/postsList"

const CategoryTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  return (
    <Box tag={"div"} className="tag-container">
      <SEO title={`Posts in tag "${tag}"`} />
      <Heading level={2}>タグ: {tag}</Heading>
      <PostsList postEdges={data.allMarkdownRemark.edges} />
    </Box>
  )
}

export const pageQuery = graphql`
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
            date(formatString: "YYYY/MM/DD", locale: "ja")
          }
        }
      }
    }
  }
`

export default CategoryTemplate
