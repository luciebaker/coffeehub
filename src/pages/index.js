import React from "react"
import {graphql} from 'gatsby'
import BackgroundSection from '../components/global/BackgroundSection'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/Homepage/Info'
import Menu from '../components/Homepage/Menu'
import Events from '../components/Homepage/Events'
import Contact from '../components/Homepage/Contact'
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Welcome to the { Coffee Hub }" 
    styleClass="default-background"/>
    <Info />
    <Menu items={data.menu} />
    <Events />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"coffeehub2.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu: allContentfulCoffeeHubMenu {
    edges {
      node {
        id
        name
        description
        price
        category
      }
    }
  }
}
`


export default IndexPage;