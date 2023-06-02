import { Worker } from "bullmq";
import { redisConnection } from "../config.ts";

new Worker(
  "test",
  // deno-lint-ignore require-await
  async (job) => {
    console.log("Got a job with: " + JSON.stringify(job.data));
    return job.data;
  },
  {
    connection: redisConnection,
  }
);
