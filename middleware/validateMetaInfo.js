export const validateMetaInfo = (req, res, next) => {
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

  const missingFields = [];


  if (!SubjectName) missingFields.push("SubjectName");
  if (!Weights) missingFields.push("Weights");
  if (!chapterWiseTheoryRatio) missingFields.push("chapterWiseTheoryRatio");
  if (!ISE1Chapters) missingFields.push("ISE1Chapters");
  if (!ISE2Chapters) missingFields.push("ISE2Chapters");
  if (!ESEChapters) missingFields.push("ESEChapters");
  if (!ISE1TheoryRatio) missingFields.push("ISE1TheoryRatio");
  if (!ISE2TheoryRatio) missingFields.push("ISE2TheoryRatio");
  if (!ESETheoryRatio) missingFields.push("ESETheoryRatio");

  if (missingFields.length > 0) {
    return res.status(400).send(`Missing required fields: ${missingFields.join(", ")}`);
  }

  next(); 
};
