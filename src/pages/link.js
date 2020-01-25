import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bss = () => (
    <div className="mt-30">
        <h1>リンク集だよ</h1>
        <ul>
            <li><a href="https://matsudo-tsushin.com/news">☆☆☆松戸つうしん☆☆☆</a></li>
            <li><a href="https://www.gaccom.jp/safety/area/t32812">☆☆☆松戸の治安情報☆☆☆</a></li>
            <li><a href="https://www.tomita-cocoro.jp/">☆☆☆松戸が誇る日本一のつけ麺 とみ田☆☆☆</a></li>
            <li><a href=" https://terrywonderland.wiki.fc2.com/">☆☆☆テリーのワンダーランド攻略サイト☆☆☆</a></li>
        </ul>
        <Link to="/">戻るよ</Link>
    </div>
)

export default Bss
