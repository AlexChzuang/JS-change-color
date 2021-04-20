document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', function () {

    var element = document.querySelector('.circle')  // 因為這裡是要選 class 所以前面要 .
    element.classList.toggle('active'); // 因為前面有 classList 所以選 class 的話不用給它 .
  })
})

