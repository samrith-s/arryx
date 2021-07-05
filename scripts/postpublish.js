/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");

execSync("mv .package.tmp.json package.json");
