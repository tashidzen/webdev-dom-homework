import { formatDate } from './formatDate.js';
import { renderComments } from './renderComments.js';
import { comments } from './comments.js';
import { answerClick } from './answer.js';
import { writeFunction} from './writeFunction.js';

('use strict');
writeFunction();
renderComments(comments);
answerClick();