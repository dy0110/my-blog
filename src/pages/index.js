import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import Bio from "../components/bio"
import AriticleCard from "../components/ariticleCard"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  console.log("posts", posts)

  return (
    <Layout location={location} title={siteTitle}>
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
          // <Box tag="article" key={node.fields.slug}>
          //   <Header direction="row" align="center" justify="between">
          //     <Heading
          //       level={3}
          //       margin={"none"}
          //       style={{ borderBottom: `none` }}
          //     >
          //       <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          //         {title}
          //       </Link>
          //     </Heading>
          //   </Header>
          //   <small>{node.frontmatter.date}</small>
          //   <section>
          //     <p>{node.frontmatter.description || node.excerpt}</p>
          //   </section>
          // </Box>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
