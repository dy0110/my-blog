/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Box, Paragraph, Text } from "grommet";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/myIcon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <Box direction="row" align="center" justify="center" height={"120px"}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: 8,
          marginBottom: 0,
          minWidth: 70,
          borderRadius: `100%`,
          minHeight: 70
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <Paragraph>
        <strong>{author}</strong>
        <br />
        <Text size={"xsmall"}>フロントエンジニア</Text>
        <br />
        <Text size={"small"}>趣味とプログラミング</Text>
      </Paragraph>
    </Box>
  );
};

export default Bio;
