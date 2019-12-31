import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import { Box } from "grommet";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const NotFoundPage: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Box  title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Box>
  );
};

export default NotFoundPage;

export const errorPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
