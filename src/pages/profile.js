import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Profile = () => (
  <div className="mt-30">
    <h1>プロフィールだよ</h1>
    <table border="2">
      <tbody>
        <tr>
          <td className="question">ニックネーム</td>
          <td className="answer">カッシー</td>
        </tr>
        <tr>
          <td className="question">血液型</td>
          <td className="answer">O型</td>
        </tr>
        <tr>
          <td className="question">出身</td>
          <td className="answer">千葉県松戸市</td>
        </tr>
        <tr>
          <td className="question">好きな食べもの</td>
          <td className="answer">カレー・ハンバーグ・回鍋肉</td>
        </tr>
        <tr>
          <td className="question">好きな歌手</td>
          <td className="answer">大塚愛</td>
        </tr>
        <tr>
          <td className="question">好きなゲーム</td>
          <td className="answer">ドラゴンクエストモンスターズテリーのワンダーランド</td>
        </tr>
        <tr>
          <td className="question">座右の銘</td>
          <td className="answer">健康第一</td>
        </tr>
        <tr>
          <td className="question">起きる時間</td>
          <td className="answer">8時</td>
        </tr>
        <tr>
          <td className="question">寝る時間</td>
          <td className="answer">21時</td>
        </tr>
        <tr>
          <td className="question">歯磨きする時間</td>
          <td className="answer">8時5分と20時30分</td>
        </tr>
      </tbody>
    </table>
    <Link to="/">戻るよ</Link>
  </div>
)

export default Profile
