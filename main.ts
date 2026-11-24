import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "One prompt in. One excuse out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
