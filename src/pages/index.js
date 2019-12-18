import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Header, Heading } from "grommet"

import Bio from "../components/bio"
import Layout from "../layout/layout"
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
          // <article key={node.fields.slug}>
          //   <header>
          //     <h3
          //       style={{
          //         marginBottom: rhythm(1 / 4),
          //       }}
          //     >
          //       <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          //         {title}
          //       </Link>
          //     </h3>
          //     <small>{node.frontmatter.date}</small>
          //   </header>
          //   <section>
          //     <p>{node.frontmatter.description || node.excerpt}</p>
          //   </section>
          // </article>
          <Box tag="article" key={node.fields.slug}>
            <Header direction="row" align="center" justify="between">
              <Heading
                level={3}
                margin={"none"}
                style={{ borderBottom: `none` }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </Heading>
            </Header>
            <small>{node.frontmatter.date}</small>
            <section>
              <p>{node.frontmatter.description || node.excerpt}</p>
            </section>
          </Box>
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
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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
