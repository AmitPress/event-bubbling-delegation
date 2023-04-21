const cnsl = document.querySelector(".cnsl")
const btn = document.querySelector(".button")
const inner = document.querySelector(".inner")
const outter = document.querySelector(".outter")

btn.addEventListener('click', (e)=>{
  e.stopPropagation()
  cnsl.textContent = e.target.name
  console.log(e.target.name)
  btn.style.backgroundColor = "blue"
})

inner.addEventListener('click', (e)=>{
  cnsl.textContent = e.target.dataset.name
  console.log(e.target.dataset.name)
  inner.style.backgroundColor = "red"
})

outter.addEventListener('click', (e)=>{
  cnsl.textContent = e.target.dataset.name
  console.log(e.target.dataset.name)
  outter.style.backgroundColor = "black"
})