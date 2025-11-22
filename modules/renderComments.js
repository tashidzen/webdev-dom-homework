import { initLikes } from './initLikes.js';
import { formatDate } from './formatDate.js';

export function renderComments(comments) {
    const listElement = document.querySelector('.comments');
    listElement.innerHTML = '';

    comments.forEach((comment, index) => {
        const isLiked = comment.isLiked
            ? 'like-button -active-like'
            : 'like-button';

        const commentElement = document.createElement('li');
        commentElement.className = 'comment';

        commentElement.innerHTML = `
          <div class="comment-header">
            <div class="userName">${comment.author.name}</div>
            <div>${formatDate(comment.date)}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="${isLiked}" data-index="${index}"></button>
            </div>
          </div>
          `;

        listElement.appendChild(commentElement);
    });
    initLikes();
}
