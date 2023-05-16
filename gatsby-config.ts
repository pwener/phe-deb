import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Phe & Deb`,
    siteUrl: `https://phedeb.com.br`,
  },
  graphqlTypegen: true,
  plugins: [`gatsby-plugin-styled-components`],
}

export default config
