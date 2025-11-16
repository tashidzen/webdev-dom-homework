import { updateComments } from './comments.js';
import { renderComments } from './renderComments.js';
import { formatDate } from './formatDate.js';
import { replace } from './replaceAll.js';

export function writeFunction() {
    const enteredName = document.querySelector('.add-form-name');
    const enteredComment = document.querySelector('.add-form-text');
    const writeButton = document.querySelector('.add-form-button');
    let currentDate = new Date();
    writeButton.addEventListener('click', () => {
        const name = enteredName.value;
        const comment = enteredComment.value;

        if (!name || !comment) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const verifiedName = replace(name);
        const verifiedComment = replace(comment);

        const newComment = {
            name: verifiedName,
            date: formatDate(currentDate),
            text: verifiedComment,
            likes: 0,
            isLiked: false,
        };

        fetch('https://wedev-api.sky.pro/api/v1/natalya-gromova/comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
        })
            .then(() => {
                return fetch(
                    'https://wedev-api.sky.pro/api/v1/natalya-gromova/comments',
                );
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                updateComments(data.comments);
                renderComments(data.comments);
            });

        enteredName.value = '';
        enteredComment.value = '';
    });
}
