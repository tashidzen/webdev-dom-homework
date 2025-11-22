import { renderComments } from './renderComments.js';
import { updateComments } from './comments.js';
import { answerClick } from './answer.js';
import { writeFunction } from './writeFunction.js';

('use strict');

fetch('https://wedev-api.sky.pro/api/v1/natalya-gromova/comments')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        updateComments(data.comments);
        renderComments(data.comments);
    });

writeFunction();
answerClick();
