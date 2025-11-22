import { renderComments } from './renderComments.js';
import { updateComments } from './comments.js';

export const fetchFunc = (showLoading = true) => {
    if (showLoading) {
        const comments = document.querySelector('.comments');
        comments.textContent =
            'Пожалуйста, подождите, комментарии загружаются...';
    }

    return fetch('https://wedev-api.sky.pro/api/v1/natalya-gromova/comments')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateComments(data.comments);
            renderComments(data.comments);
        });
};
