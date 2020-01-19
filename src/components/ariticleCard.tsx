import React from "react"
import styled from "styled-components"
import { Box, Header, Heading, Text } from "grommet"
import { Link } from "gatsby"
import { Tag, Archive } from "grommet-icons"
import { Maybe } from "../../types/graphql-types"

const Article = styled(Box)`
  box-shadow: 1px 1px #9e9e9e;
  border: solid 1px #9e9e9e;
  border-radius: 3px;
  width: 100%;
`

interface Props {
  title?: string | null
  slugTitle?: string | null
  date?: string
  description?: string | null
  excerpt?: string | null
  category?: string | null
  tags?: Maybe<string>[] | null
}

const ArticleCard: React.FC<Props> = ({
  title,
  slugTitle,
  date,
  description,
  excerpt,
  category,
  tags,
}) => {
  return (
    <Article
      tag="article"
      pad={{ vertical: "12px", horizontal: "20px" }}
      margin={{ bottom: "16px" }}
    >
      <Header direction="row" align="center" justify="between">
        <Heading level={3} margin={"none"} style={{ borderBottom: `none` }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={slugTitle ? slugTitle : ""}
          >
            {title}
          </Link>
        </Heading>
      </Header>
      <section>
        <Text size={"medium"}>{description || excerpt}</Text>
      </section>
      <small>{date}</small>
      {category != null && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Archive size={"small"} />
          <Text size={"xsmall"} margin={{ bottom: "2px", left: "4px" }}>
            <Link to={`category/${category}`}>{category}</Link>
          </Text>
        </div>
      )}
      {tags != null && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Tag size={"small"} />
          <Text size={"xsmall"} margin={{ bottom: "2px", left: "4px" }}>
            {tags.map((tag, index) => (
              <span key={index} style={{ marginRight: "2px" }}>
                <Link to={`tags/${tag}`}>{tag}</Link>
              </span>
            ))}
          </Text>
        </div>
      )}
    </Article>
  )
}

export default ArticleCard
