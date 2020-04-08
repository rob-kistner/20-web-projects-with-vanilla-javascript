document.querySelector('[data-test]').addEventListener('click', e => {
  e.target.innerText = e.target.getAttribute('data-test')
})