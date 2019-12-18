/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Box, Paragraph, Text } from "grommet"

import { rhythm } from "../utils/typography"

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
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Box direction="row" align="center" justify="start" height={"120px"}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 70,
          borderRadius: `100%`,
          minHeight: 70,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <Paragraph>
        <strong>{author}</strong>
        <br />
        <small>フロントエンジニア</small>
        <br />
        <Text>プログラミングと趣味のことを書きたい</Text>
      </Paragraph>
    </Box>
  )
}

export default Bio
