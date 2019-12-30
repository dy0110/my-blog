import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import AriticleCard from "../components/ariticleCard"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <AriticleCard
            title={title}
            key={node.fields.slug}
            slugTitle={node.fields.slug}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            excerpt={node.excerpt}
            category={node.frontmatter.category}
            slugCategory={node.fields.category}
            tags={node.frontmatter.tags}
            slugTags={node.fields.tags}
          />
        )
      })}
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            category
            tags
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
`
