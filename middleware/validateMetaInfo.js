import { body, validationResult } from 'express-validator';


export const validateMetaInfo = [

  body('SubjectName')
    .notEmpty().withMessage('SubjectName must not be empty')
    .isString().withMessage('SubjectName must be a string'),


  body('Weights')
    .notEmpty().withMessage('Weights must not be empty')
    .isArray({ min: 6, max: 6 }).withMessage('Weights must be an array of exactly 6 elements')
    .custom((arr) => arr.every((item) => typeof item === 'number'))
    .withMessage('Weights must contain only numbers'),


  body('chapterWiseTheoryRatio')
    .notEmpty().withMessage('chapterWiseTheoryRatio must not be empty')
    .isArray({ min: 6, max: 6 }).withMessage('chapterWiseTheoryRatio must be an array of exactly 6 elements')
    .custom((arr) => arr.every((item) => typeof item === 'number'))
    .withMessage('chapterWiseTheoryRatio must contain only numbers'),


  body('ISE1Chapters')
    .notEmpty().withMessage('ISE1Chapters must not be empty')
    .isArray({ min: 3, max: 3 }).withMessage('ISE1Chapters must be an array of exactly 3 elements')
    .custom((arr) => arr.every((item) => typeof item === 'number'))
    .withMessage('ISE1Chapters must contain only numbers'),

 
  body('ISE2Chapters')
    .notEmpty().withMessage('ISE2Chapters must not be empty')
    .isArray({ min: 3, max: 3 }).withMessage('ISE2Chapters must be an array of exactly 3 elements')
    .custom((arr) => arr.every((item) => typeof item === 'number'))
    .withMessage('ISE2Chapters must contain only numbers'),


  body('ESEChapters')
    .notEmpty().withMessage('ESEChapters must not be empty')
    .isArray({ min: 6, max: 6 }).withMessage('ESEChapters must be an array of exactly 6 elements')
    .custom((arr) => arr.every((item) => typeof item === 'number'))
    .withMessage('ESEChapters must contain only numbers'),

 
  body('ISE1TheoryRatio')
    .notEmpty().withMessage('ISE1TheoryRatio must not be empty')
    .isNumeric().withMessage('ISE1TheoryRatio must be a number'),

  body('ISE2TheoryRatio')
    .notEmpty().withMessage('ISE2TheoryRatio must not be empty')
    .isNumeric().withMessage('ISE2TheoryRatio must be a number'),

  body('ESETheoryRatio')
    .notEmpty().withMessage('ESETheoryRatio must not be empty')
    .isNumeric().withMessage('ESETheoryRatio must be a number'),
];
