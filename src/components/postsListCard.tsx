import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Box, Header, Heading, Text } from "grommet";

const Article = styled(Box)`
    box-shadow: 1px 1px #9E9E9E;
    border: solid 1px #9E9E9E;
    border-radius: 3px;
`;

const PostsListCard = ({ frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug;

  return (
    <Article tag={"article"} pad={{ vertical: "12px", horizontal: "20px" }} margin={{ bottom: "16px" }}>
      <Header direction="column" align="start">
        <Heading level={3} margin={"none"} style={{ borderBottom: `none` }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/${fields.slug}/`}
          >
            {title}
          </Link>
        </Heading>
      </Header>
      <section>
        <Text size={"medium"}>{frontmatter.description || excerpt}</Text>
      </section>
      <small>{frontmatter.date}</small>
    </Article>
  );
};

export default PostsListCard;
