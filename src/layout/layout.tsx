import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Grommet,
  ResponsiveContext,
  Box,
  Header,
  Heading,
  Text,
  Button
} from "grommet";
import { Github, Trigger } from "grommet-icons";

import { switchTheme } from "../utils/theme";
import "./layout.css";
import { LayoutFooter } from "./styled";

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(false);

  return (
    <Grommet theme={switchTheme(theme)} full>
      <ResponsiveContext.Consumer>
        {() => (
          <Box fill style={{ height: `100vh`, position: "relative" }}>
            <Header
              direction="row"
              align="center"
              justify="between"
              background={theme ? "dark-1" : "brand"}
              pad={{ left: "medium", right: "small", vertical: "small" }}
            >
              <Heading
                level={3}
                margin={"none"}
                style={{ borderBottom: `none` }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`
                  }}
                  to={`/`}
                >
                  Gatsby Starter Blog
                </Link>
              </Heading>
              <Box tag="div" direction="row" align="center" justify="start">
                <Button
                  icon={<Github />}
                  onClick={() => {
                    window.open("https://github.com/dy0110");
                  }}
                />
                <Button
                  icon={<Trigger />}
                  onClick={() => {
                    setTheme(!theme);
                  }}
                />
              </Box>
            </Header>
            <Box
              tag="main"
              overflow={{ vertical: "scroll", horizontal: "hidden" }}
              background={theme ? "dark-1" : "white"}
              pad={{ horizontal: "50px", bottom: "large", top: "small" }}
              style={{ display: "block" }}
            >
              {children}
            </Box>
            <LayoutFooter
              background={theme ? "dark-1" : "light-3"}
              direction={"row"}
              align={"center"}
              justify={"center"}
              pad={{ left: "medium", right: "small", vertical: "small" }}
              width={"100%"}
            >
              <Text>
                © {new Date().getFullYear()}, Built with
                <a
                  href="https://www.gatsbyjs.org"
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`
                  }}
                >
                  Gatsby
                </a>
              </Text>
            </LayoutFooter>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default Layout;
