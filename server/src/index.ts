import {
  createTest,
  findInTest,
  findInTestWorking,
  connectToDb,
  checkExistence,
} from "database";

async function main() {
  await connectToDb();
  console.log("connected to db");
  await createTest("test", ["test", "test2"]);

  // await checkExistence();
  console.log("-------Broken find function-------");
  try {
    const dataFailed = await findInTest("test");
    console.log("Data", dataFailed);
  } catch (e) {
    console.log("Error", e);
  }

  console.log("-------Working find function-------");
  try {
    const dataWorking = await findInTestWorking("test");
    console.log("Data", dataWorking);
  } catch (e) {
    console.log("Error", e);
  }
}

main();
