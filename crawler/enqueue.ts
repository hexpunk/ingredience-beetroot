import { Queue } from "bullmq";
import { redisConnection } from "../config.ts";

const queue = new Queue("test", { connection: redisConnection });

async function addJobs() {
  console.log("Adding job...");
  await queue.add("job1", { hello: "world" });
  console.log("Added!");
}

await addJobs();

self.close();
