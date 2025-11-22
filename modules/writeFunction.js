import { formatDate } from './formatDate.js';
import { replace } from './replaceAll.js';
import { fetchFunc } from './fetchFunc.js';

export function writeFunction() {
    const enteredName = document.querySelector('.add-form-name');
    const enteredComment = document.querySelector('.add-form-text');
    const writeButton = document.querySelector('.add-form-button');
    const addForm = document.querySelector('.add-form');
    const originalHTMLForm = addForm.innerHTML;
    const originalBackgroundForm = addForm.style.background;
    let currentDate = new Date();

    writeButton.addEventListener('click', () => {
        const name = enteredName.value;
        const comment = enteredComment.value;

        if (!name || !comment) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        addForm.disabled = true;
        addForm.textContent = 'Комментарий добавляется...';
        addForm.style.background = 'none';

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
                return fetchFunc(false);
            })
            .then(() => {
                addForm.disabled = false;
                addForm.innerHTML = originalHTMLForm;
                addForm.style.background = originalBackgroundForm;
                enteredName.value = '';
                enteredComment.value = '';
            });
    });
}
