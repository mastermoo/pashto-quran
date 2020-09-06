import '~/assets/style.css'
import DefaultLayout from '~/layouts/Default.vue'
import Surah from '~/components/Surah.vue'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'ps' }

  Vue.component('Layout', DefaultLayout)
  Vue.component('Surah', Surah)

  const arabicDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  Vue.filter('toArabicNumber', num => {
    return parseInt(num).toString().replace(/[0-9]/g, (w) => arabicDigits[+w])
  })
}
