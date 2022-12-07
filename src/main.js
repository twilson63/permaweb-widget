import Widget from './Widget.svelte'

const el = document.getElementById('stamps')
if (!el) {
  alert('Stamp Widget Target not found!')
}
const widget = new Widget({
  target: el,
  props: el.dataset
})

export default widget