import DefaultLayout from '~/layouts/Default.vue'
import Surah from '~/components/Surah.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Surah', Surah)
}
