import React, { useState, useEffect } from "react"
import Helmet from 'react-helmet'
import { Link } from "gatsby"
import logo from '../images/logo.png'
import icon from '../images/icon.ico'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [title, setTitle] = useState('☆☆☆☆☆柏原のサイトへようこそ☆☆☆☆☆')

  useEffect(() => {
    setInterval(() => {
      setTitle((t) => t.substr(1) + t[0])
    }, 400);
  }, [])
  
function test(){
  alert('aaaa')
}


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
  return (
    <div align="center">
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href={icon}></link>
      </Helmet>
      <div>
        <div className="marquee">
          <p>☆☆☆☆☆柏原のサイトへようこそ☆☆☆☆☆</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td className="center">
                <p className="pink forestgreen">あなたは <img src="http://www.rays-counter.com/d451_f6_022/5e2413911e8f4/" alt="アクセスカウンター" border="0" /> 人目の訪問者です！！！</p>
                <div className="return">
                  <p>ゆっくりしていってね</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="darkmagenta">【きょうのメッセージ】</h1>
      <h2 className="red">世界には2つの都市しか存在しない。<br/>松戸か、松戸以外か</h2>
      <div className="marquee">
        <p>★★★★★相互リンク募集中★★★★★</p>
      </div>
      <div className="return">
      <img src={logo} alt="Logo" />
      </div>
    </div>
  )
}

export default IndexPage


