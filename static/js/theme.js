const themeToggle = document.getElementById('theme');
const originalColor = themeToggle.style.color;
const body = document.querySelector('body');
const articleList = document.querySelector('.article-list')
const list = document.querySelectorAll('.article-list li')
const container = document.querySelector('.container')

themeToggle.addEventListener('click', () => {
  if (themeToggle.style.color == 'white') {
    themeToggle.style.color = 'gray'
  } else {
    themeToggle.style.color = 'white';
  }
  body.classList.toggle('dark-mode');
  articleList.classList.toggle('dark-mode');
  container.classList.toggle('dark-mode');
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle('dark-mode');
  }
});