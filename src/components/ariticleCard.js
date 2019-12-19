import React from "react"
import { Box, Header, Heading } from "grommet"
import { Link } from "gatsby"

const ArticleCard = ({
  title,
  slugTitle,
  date,
  description,
  excerpt,
  category,
  slugCategory,
  tags,
  slugTags,
}) => {
  return (
    <Box tag="article" key={slugTitle}>
      <Header direction="row" align="center" justify="between">
        <Heading level={3} margin={"none"} style={{ borderBottom: `none` }}>
          <Link style={{ boxShadow: `none` }} to={slugTitle}>
            {title}
          </Link>
        </Heading>
      </Header>
      <small>{date}</small>
      <small>
        カテゴリ:{" "}
        <Link style={{ boxShadow: `none` }} to={`category/${slugCategory}`}>
          {category != null ? category : ""}
        </Link>
      </small>
      <small>
        タグ:{" "}
        {slugTags != null
          ? slugTags.map((slugTag, index) => (
              <>
                <Link
                  key={index}
                  style={{ boxShadow: `none` }}
                  to={`tags/${slugTag}`}
                >
                  {tags != null && tags[index]}
                </Link>
                {"  "}
              </>
            ))
          : ""}
      </small>

      <section>
        <p>{description || excerpt}</p>
      </section>
    </Box>
  )
}

export default ArticleCard
