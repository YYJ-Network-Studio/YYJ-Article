const themeToggle = document.querySelector('#theme');
const body = document.querySelector('body');
const articleList = document.querySelector('.article-list')
const list = document.querySelectorAll('.article-list li')

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  articleList.classList.toggle('dark-mode');
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle('dark-mode');
  }
});