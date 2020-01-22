import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "grommet"
import { Tag } from "grommet-icons"
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
  const { tag } = pageContext
  const { allMarkdownRemark } = data

  return (
    <Box tag={"div"} className="tag-container">
      <SEO title={`Posts in tag "${tag}"`} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tag size={"28px"} />
        <Heading
          level={2}
          margin={{ left: "8px" }}
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {tag}
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
            tags={node.frontmatter?.tags}
          />
        )
      })}
    </Box>
  )
}

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            tags
          }
        }
      }
    }
  }
`

export default CategoryTemplate
