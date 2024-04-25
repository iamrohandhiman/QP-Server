import { Schema, model } from "mongoose";

const SubjectMetaSchema = new Schema(
  {
    SubjectName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Weights: {
      type: [Number],
      required: true,
    },
    chapterWiseTheoryRatio: {
      type: [Number],
      required: true,
    },
    ISE1Chapters: {
      type: [Number],
      required: true,
    },
    ISE2Chapters: {
      type: [Number],
      required: true,
    },
    ESEChapters: {
      type: [Number],
      required: true,
    },
    ISE1TheoryRatio: {
      type: Number,
      required: true,
    },
    ISE2TheoryRatio: {
      type: Number,
      required: true,
    },
    ESETheoryRatio: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export const SubjectMeta = model("SubjectMeta", SubjectMetaSchema); 
