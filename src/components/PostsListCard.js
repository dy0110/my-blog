import React from "react"
import { Link } from "gatsby"
import { Box, Header, Heading } from "grommet"

const PostsListCard = ({ frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug

  return (
    <Box tag={"article"} margin={{ bottom: "small" }}>
      <Header direction="column" align="start">
        <Heading level={3} margin={"none"} style={{ borderBottom: `none` }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/${fields.slug}/`}
          >
            {title}
          </Link>
        </Heading>
      </Header>
      <small>{frontmatter.date}</small>
      <section> {frontmatter.description || excerpt}</section>
    </Box>
  )
}

export default PostsListCard
