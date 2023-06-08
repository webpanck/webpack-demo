import './style.scss'
import './style_1.less'
import './style_2.styl'
import img from './assets/date.png'

const div = document.getElementById('app')

div.innerHTML = `
  <img src="${img}">
`