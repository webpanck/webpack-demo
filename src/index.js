import './style.scss'
import './style_1.less'
import './style_2.styl'
import img from './assets/date.png'

const div = document.getElementById('app')

div.innerHTML = `
  <img src="${img}">
`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
  const promise = import('./lazy')
  promise.then((module) => {
    module.default()
  }, () => {
    console.log('模块加载错误')
  })
}

div.appendChild(button)