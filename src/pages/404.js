import React from "react"
import {graphql} from 'gatsby'
import BackgroundSection from '../components/global/BackgroundSection'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not Found" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Oops ... Page Not Found" 
    styleClass="about-background"/>
    <div className="Container">
    <h2 className="text-center text-green mt-5 mb-5"> You just hit a route that doesn&#39;t exist... the sadness. Looks like you need a coffee!</h2>
     </div>
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


export default NotFoundPage
