import express from "express";
import { validateMetaInfo } from "../middleware/validateMetaInfo.js";
import { validateSubjectInfoRequest } from "../middleware/validateSubjectInfoRequest.js";
import { validationResult, matchedData } from "express-validator";
import { SubjectMeta } from "../mongoose/SubjectMeta.js";

const router = express.Router();

router.post("/MetaInfo", validateMetaInfo, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = matchedData(req);
  console.log(data);
  const newSubjectMeta = new SubjectMeta(data);
  try {
    const savedSubjectMeta = await newSubjectMeta.save();
    return res.status(201).json(savedSubjectMeta);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Error saving data.");
  }
});

router.get("/MetaInfo", validateSubjectInfoRequest, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = matchedData(req);
  console.log(data);
  try {
    const subjectData = await SubjectMeta.findOne({
      SubjectName: data.SubjectName
    });

    if (!subjectData) {
      return res.status(404).send("Subject not found.");
    }

    return res.status(200).json(subjectData);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error fetching data.");
  }
});

export default router;
