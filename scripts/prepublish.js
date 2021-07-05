/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const { writeFileSync } = require("fs");
const { resolve } = require("path/posix");

execSync("cp package.json .package.tmp.json");

const pkg = require("../package.json");

// Delete unwated scripts
delete pkg.scripts.postinstall;
delete pkg.scripts.build;
delete pkg.scripts.dev;
delete pkg.scripts.use;
delete pkg.scripts.release;

// Delete unwated fields
delete pkg.devDependencies;
delete pkg.private;

writeFileSync(resolve("package.json"), JSON.stringify(pkg, null, 2));
