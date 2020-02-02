import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import icon from "../images/icon.ico"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { initKirakira } from "../utils/kirakira"

const IndexPage = () => {
  const [title, setTitle] = useState("☆☆☆☆☆柏原のサイトへようこそ☆☆☆☆☆")

  useEffect(() => {
    setInterval(() => {
      setTitle(t => t.substr(1) + t[0])
    }, 400)
    initKirakira()
  }, [])

  function logoClick(e) {
    const div = document.getElementById("gorilla")
    const img = document.getElementById("logo")
    const clone = img.cloneNode(true)
    div.appendChild(clone)
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
    <div className="wrap">
      <header className="leftNavigation">
        <div className="profile">
          <Link to="/profile/">プロフィール</Link>
        </div>
        <div className="bss">
          <Link to="/bss/">掲示板</Link>
        </div>
        <div className="compatible">
          <Link to="/compatible/">僕との相性チェック</Link>
        </div>
        <div className="quiz">
          <Link to="/quiz/">クイズ</Link>
        </div>
        <div className="link">
          <Link to="/link/">リンク</Link>
        </div>
      </header>
      <div className="content">
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
                  <p className="pink forestgreen">
                    あなたは{" "}
                    <img
                      className="center"
                      src="http://www.rays-counter.com/d451_f6_022/5e2413911e8f4/"
                      alt="アクセスカウンター"
                    />{" "}
                    人目の訪問者です！！！
                  </p>
                  <div className="return">
                    <p>ゆっくりしていってね</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="darkmagenta">【きょうのメッセージ】</h1>
        <h2 className="red">
          一日だけ幸せでいたいならば、床屋に行け！
          <br />
          一週間だけ幸せでいたいなら、車を買え！
          <br />
          一ヶ月だけ幸せでいたいなら、結婚をしろ！
          <br />
          一年だけ幸せでいたいなら、家を買え！
          <br />
          一生幸せでいたいなら、正直でいることだ！
          <br />
        </h2>
        <div className="marquee">
          <p>★★★★★相互リンク募集中★★★★★</p>
        </div>
        <h3>↓↓↓↓↓ゴリラをクリックしてみてね↓↓↓↓↓</h3>
        <div id="gorilla" className="gorilla gorilla1">
          <img id="logo" src={logo} alt="Logo" onClick={logoClick} />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
