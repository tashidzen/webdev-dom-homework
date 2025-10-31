export const listElement = document.querySelector('.comments');
export const enteredName = document.querySelector('.add-form-name');
export const enteredComment = document.querySelector('.add-form-text');

export function answerClick() {
    listElement.addEventListener('click', (event) => {
        const clickedComment = event.target.closest('.comment');
        if (clickedComment) {
            const textName = clickedComment.querySelector('.userName');
            enteredName.value = '> ' + textName.innerText;
            const commentText = clickedComment.querySelector('.comment-text');
            enteredComment.value = '> ' + commentText.innerText;
        }
    });
}
