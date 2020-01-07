import React from "react";
import styled from "styled-components";
import { Box, Header, Heading, Text } from "grommet";
import { Link } from "gatsby";

const Article = styled(Box)`
    box-shadow: 1px 1px #9E9E9E;
    border: solid 1px #9E9E9E;
    border-radius: 3px;
`;

const ArticleCard = ({
  title,
  slugTitle,
  date,
  description,
  excerpt,
  category,
  slugCategory,
  tags,
  slugTags
}) => {
  return (
    <Article tag="article" key={slugTitle} pad={{ vertical: "12px", horizontal: "20px" }} margin={{bottom: "16px"}}>
      <Header direction="row" align="center" justify="between">
        <Heading level={3} margin={"none"} style={{ borderBottom: `none` }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={slugTitle}
          >
            {title}
          </Link>
        </Heading>
      </Header>
      <section>
        <Text size={"medium"}>{description || excerpt}</Text>
      </section>
      <small>{date}</small>
      <Text size={"xsmall"}>
        カテゴリ:{" "}
        <Link
          to={`category/${slugCategory}`}
        >
          {category != null ? category : ""}
        </Link>
      </Text>
      <Text size={"xsmall"}>
        タグ:{" "}
        {slugTags != null
          ? slugTags.map((slugTag, index) => (
              <>
                <Link
                  key={index}
                  to={`tags/${slugTag}`}
                >
                  {tags != null && tags[index]}
                </Link>
                {"  "}
              </>
            ))
          : ""}
      </Text>
    </Article>
  );
};

export default ArticleCard;
