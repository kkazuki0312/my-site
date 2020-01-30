export const initKirakira = () => {
  //以下、このサイトからのコピペ: http://oekakirenn.webcrow.jp/mouse/mouse_moji1.html

  //★星の色指定
  var colors = [
    ["#f00", "#fcc", "#f0f", "#0aa", "#0f3", "#666", "#fff"], //カラフル
    ["#ff0"], //ゴールド
    ["#fff"], //雪
  ]
  var sparkles = 60 //★原本50。キラキラ星の数

  //指定ここまで-----------------★内容物が無くてもHTML5動作可能へ。複数色指定へ　2016/04/23-----------*/
  /****************************
   *  Tinkerbell Magic Sparkle *
   *(c)2005-13 mf2fm web-design*
   *  http://www.mf2fm.com/rv  *
   * DON'T EDIT BELOW THIS BOX *
   ****************************/
  var cNum = 0 //■追加。色数のカウント
  var x = 300,
    ox = 300
  var y = 400,
    oy = 400
  var swide = window.innerWidth,
    shigh = window.innerHeight
  var sleft = (sdown = 0)
  var sdown = 0
  var tiny = [],
    star = [],
    starv = [],
    starx = [],
    stary = [],
    tinyx = [],
    tinyy = [],
    tinyv = []
  var i, rats, rlef, rdow
  let randomColor = colors[Math.floor(Math.random() * colors.length)]

  for (var i = 0; i < sparkles; i++) {
    var rats = createDiv(3, 3)
    rats.style.visibility = "hidden"
    document.body.appendChild((tiny[i] = rats))
    starv[i] = 0
    tinyv[i] = 0
    var rats = createDiv(5, 5)
    rats.style.backgroundColor = "transparent"
    rats.style.visibility = "hidden"
    var rlef = createDiv(1, 5)
    var rdow = createDiv(5, 1)
    rats.appendChild(rlef)
    rats.appendChild(rdow)
    rlef.style.top = "2px"
    rlef.style.left = 0
    rdow.style.top = 0
    rdow.style.left = "2px"
    document.body.appendChild((star[i] = rats))
  }
  sparkle()
  function sparkle() {
    var c
    if (x != ox || y != oy) {
      ox = x
      oy = y
      for (c = 0; c < sparkles; c++)
        if (!starv[c]) {
          star[c].style.left = (starx[c] = x) + "px"
          star[c].style.top = (stary[c] = y) + "px"
          star[c].style.clip = "rect(0px, 5px, 5px, 0px)"
          star[c].childNodes[0].style.backgroundColor = star[
            c
          ].childNodes[1].style.backgroundColor =
            randomColor[cNum % randomColor.length]
          cNum++ //■修正
          star[c].style.visibility = "visible"
          starv[c] = 50
          break
        }
    }
    for (c = 0; c < sparkles; c++) {
      if (starv[c]) update_star(c)
      if (tinyv[c]) update_tiny(c)
    }
    setTimeout(sparkle, 40)
  }
  function update_star(i) {
    if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)"
    if (starv[i]) {
      stary[i] += 1 + Math.random() * 3
      if (stary[i] < shigh + sdown) {
        star[i].style.top = stary[i] + "px"
        starx[i] += ((i % 5) - 2) / 5
        star[i].style.left = starx[i] + "px"
      } else {
        star[i].style.visibility = "hidden"
        starv[i] = 0
        return
      }
    } else {
      tinyv[i] = 50
      tiny[i].style.top = (tinyy[i] = stary[i]) + "px"
      tiny[i].style.left = (tinyx[i] = starx[i]) + "px"
      tiny[i].style.width = "2px"
      tiny[i].style.height = "2px"
      tiny[i].style.backgroundColor =
        star[i].childNodes[0].style.backgroundColor //■2013年版追加
      star[i].style.visibility = "hidden"
      tiny[i].style.visibility = "visible"
    }
  }
  function update_tiny(i) {
    if (--tinyv[i] == 25) {
      tiny[i].style.width = "1px"
      tiny[i].style.height = "1px"
    }
    if (tinyv[i]) {
      tinyy[i] += 1 + Math.random() * 3
      if (tinyy[i] < shigh + sdown) {
        tiny[i].style.top = tinyy[i] + "px"
        tinyx[i] += ((i % 5) - 2) / 5
        tiny[i].style.left = tinyx[i] + "px"
      } else {
        tiny[i].style.visibility = "hidden"
        tinyv[i] = 0
        return
      }
    } else tiny[i].style.visibility = "hidden"
  }
  document.onmousemove = function(e) {
    y = e.pageY
    x = e.pageX
    sdown = window.pageYOffset
    sleft = window.pageXOffset
  }
  function createDiv(height, width) {
    var div = document.createElement("div")
    div.style.position = "absolute"
    div.style.height = height + "px"
    div.style.width = width + "px"
    div.style.overflow = "hidden"
    /*■2005年分削除  div.style.backgroundColor=color;*/
    return div
  }
}
