import React from "react"
import {graphql} from 'gatsby'
import BackgroundSection from '../components/global/BackgroundSection'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/Homepage/Info'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="About { Coffee Hub }" 
    styleClass="about-background"/>
    <Info />
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
}
`


export default AboutPage;