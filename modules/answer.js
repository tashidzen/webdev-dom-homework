export function answerClick() {
    const listElement = document.querySelector('.comments');
    const enteredComment = document.querySelector('.add-form-text');

    listElement.addEventListener('click', (event) => {
        const clickedComment = event.target.closest('.comment');
        if (clickedComment) {
            const textName = clickedComment.querySelector('.userName');
            const commentText = clickedComment.querySelector('.comment-text');
            enteredComment.value =
                '> ' + textName.innerText + `\n` + '> ' + commentText.innerText;
        }
    });
}
