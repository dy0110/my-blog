import React from "react";
import styled from "styled-components";
import { Box, Header, Heading, Text } from "grommet";
import { Link } from "gatsby";
import { Tag, Archive } from "grommet-icons";

const Article = styled(Box)`
    box-shadow: 1px 1px #9E9E9E;
    border: solid 1px #9E9E9E;
    border-radius: 3px;
    width: 100%
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
      {category != null && (
        <div style={{display: "flex", alignItems:"center"}}>
          <Archive size={"small"}/>
          <Text size={"xsmall"} margin={{bottom: "2px", left: "4px"}}>
            <Link
              to={`category/${slugCategory}`}
            >
             {category}
            </Link>
          </Text>
        </div>
      )}
      {slugTags != null && (
        <div style={{display: "flex", alignItems:"center"}}>
        <Tag size={"small"}/>
        <Text size={"xsmall"} margin={{bottom: "2px", left: "4px"}}>
          {
            slugTags.map((slugTag, index) => (
              <span style={{marginRight: "2px"}}>
                <Link
                  key={index}
                  to={`tags/${slugTag}`}
                >
                  {tags != null && tags[index]}
                </Link>
              </span>
            ))
          }
        </Text>
        </div>
      )}
    </Article>
  );
};

export default ArticleCard;
