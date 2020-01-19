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
<div>
<div>
<div class="marquee">
<p>☆☆☆☆☆柏原のサイトへようこそ☆☆☆☆☆</p>
</div>
<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
    <p>あなたは<img src="http://www.rays-counter.com/d451_f6_022/5e2413911e8f4/" alt="アクセスカウンター" border="0"/>人目の訪問者です！！！</p>
    <span>ゆっくりしていってね</span>
    </td>
  </tr>
</table>
</div>
<h1>【きょうのメッセージ】</h1>
<h2>暑くなければ夏じゃない。熱くなければ人生じゃない！</h2>
</div>
)

export default IndexPage
