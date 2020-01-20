import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <div align="center">
    <div>
      <div className="marquee">
        <p>☆☆☆☆☆柏原のサイトへようこそ☆☆☆☆☆</p>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="center">
              <p className="pink forestgreen">あなたは <img src="http://www.rays-counter.com/d451_f6_022/5e2413911e8f4/" alt="アクセスカウンター" border="0" /> 人目の訪問者です！！！</p>
              <span>ゆっくりしていってね</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1 className="darkmagenta">【きょうのメッセージ】</h1>
    <h2 className="red">本気になれば自分が変わる！本気になれば全てが変わる！！！！</h2>
  </div>
)

export default IndexPage
