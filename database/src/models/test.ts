import mongoose from "mongoose";

export interface LeanTest {
  test: string;
  testArr: string[];
}

const schema = new mongoose.Schema<LeanTest>({
  test: {
    type: String,
    required: true,
  },
  testArr: {
    type: [String],
    required: true,
  },
});

export default mongoose.model<LeanTest>("Test", schema);
