import { comments } from './comments.js';
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
            userName: verifiedName,
            date: formatDate(currentDate),
            commentText: verifiedComment,
            count_likes: 0,
            status: false,
        };

        comments.push(newComment);
        renderComments(comments);

        enteredName.value = '';
        enteredComment.value = '';
    });
}
