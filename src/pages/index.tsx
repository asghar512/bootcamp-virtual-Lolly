import * as React from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./index.css"
import Lolly from "../images/lolly"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Virtual Lollipops for all!" />
      <div className="lolly-page__index">
        <div className="lolly-page__index-lollies">
          <Lolly top="#e97393" mid="#d23a62" bottom="#bb1161" />
          <Lolly top="#ed265b" mid="#f77249" bottom="#deaa43" />
          <Lolly top="#97e665" mid="#8ccb4c" bottom="#a8d838" />

        </div>
        <Link className='lolly-page__index-btn' to="/create">Make a new lolly to send to a friend</Link>
      </div>
      <h1 className="lolly-page__index_info">Developed by Muhammad Asghar</h1>
    </Layout>
  )
}

export default IndexPage
