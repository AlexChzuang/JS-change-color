document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('onclick', function () {
    var element = document.querySelector('circle')
    element.classList.toggle('active');
  })
})