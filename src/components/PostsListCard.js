
import React from "react"
import { Link } from "gatsby"

const PostsListCard = ({ frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug

  return (
    <article>
      <header>
        <h2>{title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt,
          }}
        />
        <Link to={`/${fields.slug}/`} >
          Read More &rarr;
        </Link>
      </header>
      <section >
        Posted on {frontmatter.date}
      </section>
    </article>
  )
}

export default PostsListCard