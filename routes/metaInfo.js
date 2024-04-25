import express from "express";
import { validateMetaInfo } from "../middleware/validateMetaInfo.js";
import {validationResult} from "express-validator"
const router = express.Router();
router.post(
  '/MetaInfo',
  validateMetaInfo, 
  (req, res) => {
    const errors = validationResult(req); 

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); 
    }

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

    res.sendStatus(200);
  }
);

export default router;