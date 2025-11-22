import { renderComments } from './renderComments.js';
import { comments } from './comments.js';

export const initLikes = () => {
    const likeStatus = document.querySelectorAll('.like-button');

    for (const likeStat of likeStatus) {
        likeStat.addEventListener('click', (event) => {
            event.stopPropagation();

            const index = parseInt(likeStat.dataset.index);

            if (comments[index].isLiked === false) {
                console.log('Ставим лайк');
                comments[index].isLiked = true;
                comments[index].likes += 1;
            } else {
                console.log('Убираем лайк');
                comments[index].isLiked = false;
                comments[index].likes -= 1;
            }

            renderComments(comments);
        });
    }
};
