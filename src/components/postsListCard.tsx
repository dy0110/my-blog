import React from "react";
import { Link } from "gatsby";
import { Box, Header, Heading, Text } from "grommet";

const PostsListCard = ({ frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug;

  return (
    <Box tag={"article"} margin={{ bottom: "small" }}>
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
    </Box>
  );
};

export default PostsListCard;
