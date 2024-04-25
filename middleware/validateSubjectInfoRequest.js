import { body, validationResult } from 'express-validator';

export const validateSubjectInfoRequest = [
  body('SubjectName')
    .notEmpty().withMessage('SubjectName must not be empty')
    .isString().withMessage('SubjectName must be a string'),
]