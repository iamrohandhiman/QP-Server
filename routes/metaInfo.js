import express from 'express';
import { validateMetaInfo } from '../middleware/validateMetaInfo.js';

const router = express.Router();

router.post('/MetaInfo', validateMetaInfo, (req, res) => {
  const {
    SubjectName,
    Weights,
    chapterWiseTheoryRatio,
    ISE1Chapters,
    ISE2Chapters,
    ESEChapters,
    ISE1TheoryRatio,
    ISE2TheoryRatio,
    ESETheoryRatio,
  } = req.body;
  res.sendStatus(200)
});

export default router;
