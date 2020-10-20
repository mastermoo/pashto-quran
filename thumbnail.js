const nodeHtmlToImage = require('node-html-to-image')
const surahs = require('./src/data/surahs.json')

const arabicDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const toArabicNumber = num =>
  parseInt(num)
    .toString()
    .replace(/[0-9]/g, w => arabicDigits[+w])

nodeHtmlToImage({
  html: `<html>
    <head>
      <style>
        @font-face {
          font-family: Palatino Arabic;
          src: url("https://quran.tolafghan.com/assets/fonts/Palatino-Arabic-Regular.72716ada.ttf");
          font-weight:400
        }
        body {
          width: 1080px;
          height: 566px;
          background-image: url("https://quran.tolafghan.com/assets/img/pattern.5292864e.png");
          background-size: 400px 348px;
          background-color: #091a28;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
        h1 {
          font-family: Palatino Arabic, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
          font-size: 150px;
          color: gold;
          margin: 0;
        }
        h2 {
          margin: 0;
          font-size: 58px;
        }
        p {
          margin: 0;
          font-size: 28px;
        }
      </style>
    </head>
    <body>
      <div>
        <p>{{ number }}</p>
        <h1>{{ title }}</h1>
        <h2>{{ titlePs }}</h2>
      </div>
    </body>
  </html>
  `,
  content: surahs.map(s => ({
    number: toArabicNumber(Number(s.index)),
    title: s.titleAr,
    titleEn: s.title,
    titlePs: s.titlePs,
    output: `./static/surah-thumbnails/surah-${Number(s.index)}.png`,
  })),
}).then(() => console.log('Thumbnails created successfully!'))
