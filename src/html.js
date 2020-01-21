import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
<div id="m-booked-bl-simple-week-vertical-28088">
  <div class="booked-wzs-160-275 weather-customize" style="background-color:#137AE9; width:160px;" id="width1 "> <a target="_blank" class="booked-wzs-top-160-275" href="https://www.booked.net/"><img src="//s.bookcdn.com/images/letter/s5.gif" alt="booked.net" /></a>
    <div class="booked-wzs-160-275_in">
      <div class="booked-wzs-160-275-data">
        <div class="booked-wzs-160-275-left-img wrz-01"></div>
        <div class="booked-wzs-160-275-right">
          <div class="booked-wzs-day-deck">
            <div class="booked-wzs-day-val">
              <div class="booked-wzs-day-number"><span class="plus">+</span>5</div>
              <div class="booked-wzs-day-dergee">
                <div class="booked-wzs-day-dergee-val">&deg;</div>
                <div class="booked-wzs-day-dergee-name">C</div>
              </div>
            </div>
            <div class="booked-wzs-day">
              <div class="booked-wzs-day-d"><span class="plus">+</span>5&deg;</div>
              <div class="booked-wzs-day-n"><span class="plus">+</span>4&deg;</div>
            </div>
          </div>
          <div class="booked-wzs-160-275-info">
            <div class="booked-wzs-160-275-city">松戸市</div>
            <div class="booked-wzs-160-275-date">火曜日, 21</div>
          </div>
        </div>
      </div>
      <a target="_blank" href="https://booked.jp/weather/matsudo-55095" class="booked-wzs-bottom-160-275">
        <table cellpadding="0" cellspacing="0" class="booked-wzs-table-160">
          <tr>
            <td class="week-day"> <span class="week-day-txt">水曜日</span></td>
            <td class="week-day-ico">
              <div class="wrz-sml wrzs-03"></div>
            </td>
            <td class="week-day-val"><span class="plus">+</span>7&deg;</td>
            <td class="week-day-val"><span class="plus">+</span>3&deg;</td>
          </tr>
          <tr>
            <td class="week-day"> <span class="week-day-txt">木曜日</span></td>
            <td class="week-day-ico">
              <div class="wrz-sml wrzs-03"></div>
            </td>
            <td class="week-day-val"><span class="plus">+</span>12&deg;</td>
            <td class="week-day-val"><span class="plus">+</span>4&deg;</td>
          </tr>
          <tr>
            <td class="week-day"> <span class="week-day-txt">金曜日</span></td>
            <td class="week-day-ico">
              <div class="wrz-sml wrzs-03"></div>
            </td>
            <td class="week-day-val"><span class="plus">+</span>13&deg;</td>
            <td class="week-day-val"><span class="plus">+</span>8&deg;</td>
          </tr>
          <tr>
            <td class="week-day"> <span class="week-day-txt">土曜日</span></td>
            <td class="week-day-ico">
              <div class="wrz-sml wrzs-18"></div>
            </td>
            <td class="week-day-val"><span class="plus">+</span>8&deg;</td>
            <td class="week-day-val"><span class="plus">+</span>6&deg;</td>
          </tr>
          <tr>
            <td class="week-day"> <span class="week-day-txt">日曜日</span></td>
            <td class="week-day-ico">
              <div class="wrz-sml wrzs-18"></div>
            </td>
            <td class="week-day-val"><span class="plus">+</span>5&deg;</td>
            <td class="week-day-val"><span class="plus">+</span>4&deg;</td>
          </tr>
          <tr>
            <td class="week-day"> <span class="week-day-txt">月曜日</span></td>
            <td class="week-day-ico">
              <div class="wrz-sml wrzs-22"></div>
            </td>
            <td class="week-day-val"><span class="plus">+</span>7&deg;</td>
            <td class="week-day-val"><span class="plus">+</span>3&deg;</td>
          </tr>
        </table>
        <div class="booked-wzs-center"> <span class="booked-wzs-bottom-l">週間天気予報を見る</span> </div>
      </a>
    </div>
  </div>
  <script type="text/javascript">
    var css_file=document.createElement("link"); css_file.setAttribute("rel","stylesheet"); css_file.setAttribute("type","text/css"); css_file.setAttribute("href",'https://s.bookcdn.com/css/w/booked-wzs-widget-160x275.css?v=0.0.1'); document.getElementsByTagName("head")[0].appendChild(css_file); function setWidgetData(data) { if(typeof(data) != 'undefined' && data.results.length > 0) { for(var i = 0; i < data.results.length; ++i) { var objMainBlock = document.getElementById('m-booked-bl-simple-week-vertical-28088'); if(objMainBlock !== null) { var copyBlock = document.getElementById('m-bookew-weather-copy-'+data.results[i].widget_type); objMainBlock.innerHTML = data.results[i].html_code; if(copyBlock !== null) objMainBlock.appendChild(copyBlock); } } } else { alert('data=undefined||data.results is empty'); } }
  </script>
  <script type="text/javascript" charset="UTF-8" src="https://widgets.booked.net/weather/info?action=get_weather_info&ver=6&cityID=55095&type=4&scode=124&ltid=3458&domid=587&anc_id=57665&cmetric=1&wlangID=16&color=137AE9&wwidth=160&header_color=ffffff&text_color=333333&link_color=08488D&border_form=1&footer_color=ffffff&footer_text_color=333333&transparent=0"></script>
  </div>
      </body>
    </html>
      )
    }

HTML.propTypes = {
        htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
  }
