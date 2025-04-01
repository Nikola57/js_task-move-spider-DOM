'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let newX = e.clientX - wallRect.left - spiderRect.width / 2 - 10;
  let newY = e.clientY - wallRect.top - spiderRect.height / 2 - 10;

  const x = spiderRect.width + spiderRect.width / 2 - 5;
  const y = spiderRect.height + spiderRect.width / 2 - 5;

  newX = Math.max(0, Math.min(newX, wallRect.width - x));
  newY = Math.max(0, Math.min(newY, wallRect.height - y));

  spider.style.position = 'absolute';
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
