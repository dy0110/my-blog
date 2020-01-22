import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "grommet"
import { Archive } from "grommet-icons"
import SEO from "../components/seo"
import ArticleCard from "../components/articleCard"
import { MarkdownRemarkConnection } from "../../types/graphql-types"

interface Props {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection
  }
  pageContext: any
}

const CategoryTemplate: React.FC<Props> = ({ pageContext, data }) => {
  const { category } = pageContext
  const { allMarkdownRemark } = data

  console.log("category", data)
  return (
    <Box tag={"div"} className="category-container">
      <SEO title={`Posts in category "${category}"`} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Archive size={"28px"} />
        <Heading
          level={2}
          margin={{ left: "8px" }}
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {category}
        </Heading>
      </div>
      {allMarkdownRemark.edges.map(({ node }, index) => {
        const title = node.frontmatter?.title || node.fields?.slug
        return (
          <ArticleCard
            title={title}
            key={index}
            slugTitle={node.fields?.slug}
            date={node.frontmatter?.date}
            description={node.frontmatter?.description}
            excerpt={node.excerpt}
            category={node.frontmatter?.category}
          />
        )
      })}
    </Box>
  )
}

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            date(formatString: "YYYY/MM/DD", locale: "ja")
            category
          }
        }
      }
    }
  }
`

export default CategoryTemplate
