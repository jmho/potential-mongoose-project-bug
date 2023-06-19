import Test from "./models/test";
import mongoose from "mongoose";

export async function createTest(value: string, arrValue: string[]) {
  await Test.create({ test: value, testArr: arrValue });
}

export async function checkExistence() {
  const test_collection = await mongoose.connection.db.collection("tests");
  console.log(test_collection);
  console.log(await test_collection.find({}).toArray());
}

export async function findInTest(value: string) {
  return await Test.find({
    test: {
      $in: [value],
    },
  }).lean();
}

export async function findInTestWorking(value: string) {
  return await mongoose.connection.db
    .collection("tests")
    .find({
      test: {
        $in: [value],
      },
    })
    .toArray();
}
