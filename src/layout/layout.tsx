import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Grommet,
  ResponsiveContext,
  Box,
  Header,
  Heading,
  Text,
  Button,
  Footer,
} from "grommet"
import { Github, Trigger } from "grommet-icons"

import { switchTheme } from "../utils/theme"
import "./layout.css"

const bodyResponsivePadding = (size: string): string => {
  if (size === "small") {
    return "48px"
  } else if (size === "medium") {
    return "280px"
  } else if (size === "large") {
    return "540px"
  }
  return "360px"
}

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(false)

  return (
    <Grommet theme={switchTheme(theme)} full>
      <ResponsiveContext.Consumer>
        {size => (
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
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  dy0110&#39;s Blog
                </Link>
              </Heading>
              <Box tag="div" direction="row" align="center" justify="start">
                <Button
                  icon={<Github />}
                  onClick={() => {
                    window.open("https://github.com/dy0110")
                  }}
                />
                <Button
                  icon={<Trigger />}
                  onClick={() => {
                    setTheme(!theme)
                  }}
                />
              </Box>
            </Header>
            <Box
              tag="main"
              overflow={{ vertical: "scroll", horizontal: "hidden" }}
              background={theme ? "dark-1" : "white"}
              pad={{
                horizontal: bodyResponsivePadding(size),
                bottom: "large",
                top: "small",
              }}
              style={{ display: "block", height: "100%" }}
            >
              {children}
            </Box>
            <Footer
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
                    color: `inherit`,
                  }}
                >
                  Gatsby
                </a>
              </Text>
            </Footer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default Layout
