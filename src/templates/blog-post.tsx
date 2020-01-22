import React from "react"
import { Link, graphql } from "gatsby"
import { Box } from "grommet"

import Author from "../components/author"
import SEO from "../components/seo"
import { MarkdownRemark } from "../../types/graphql-types"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: MarkdownRemark
  }
  pageContext: any
}

const BlogPostTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const { previous, next } = pageContext
  const title = post != null ? post.title : ""
  const description = post != null ? post.description : ""

  return (
    <Box>
      <SEO
        title={title != null ? title : ""}
        description={
          (description != null ? description : undefined) ||
          (data.markdownRemark.excerpt != null
            ? data.markdownRemark.excerpt
            : undefined)
        }
      />
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              display: `block`,
            }}
          >
            {post != null ? post.date : ""}
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html:
              data.markdownRemark.html != null ? data.markdownRemark.html : "",
          }}
        />
        <hr />
        <footer>
          <Author />
          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </footer>
      </article>
    </Box>
  )
}

export default BlogPostTemplate

export const blogPostPageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD", locale: "ja")
        description
        tags
        category
      }
    }
  }
`
