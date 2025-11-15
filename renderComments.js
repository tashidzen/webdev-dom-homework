import { initLikes } from './initLikes.js';

export function renderComments(comments) {
    const listElement = document.querySelector('.comments');
    listElement.innerHTML = '';

    comments.forEach((comment, index) => {
        const likeClass = comment.status
            ? 'like-button -active-like'
            : 'like-button';

        const commentElement = document.createElement('li');
        commentElement.className = 'comment';

        commentElement.innerHTML = `
          <div class="comment-header">
            <div class="userName">${comment.userName}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.commentText.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.count_likes}</span>
              <button class="${likeClass}" data-index="${index}"></button>
            </div>
          </div>
          `;

        listElement.appendChild(commentElement);
    });
    initLikes();
}
