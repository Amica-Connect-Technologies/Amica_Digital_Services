#!/usr/bin/env node
/**
 * Production build script — no extra dependencies required.
 * Steps:
 *   1. Install frontend dependencies
 *   2. Build frontend with Vite  (outputs to amica-frontend/dist)
 *   3. Clear amica-backend/public
 *   4. Copy dist → amica-backend/public
 */

const { execSync } = require("child_process");
const { rmSync, cpSync, existsSync } = require("fs");
const { join } = require("path");

const root = join(__dirname, "..");
const frontendDir = join(root, "amica-frontend");
const distDir = join(frontendDir, "dist");
const publicDir = join(root, "amica-backend", "public");

function run(cmd, cwd) {
  execSync(cmd, { cwd, stdio: "inherit" });
}

console.log("\n[1/3] Installing frontend dependencies...");
run("npm install", frontendDir);

console.log("\n[2/3] Building frontend with Vite...");
run("npm run build", frontendDir);

console.log("\n[3/3] Deploying build → amica-backend/public...");
if (existsSync(publicDir)) {
  rmSync(publicDir, { recursive: true, force: true });
}
cpSync(distDir, publicDir, { recursive: true });

console.log("\nBuild complete. amica-backend/public is ready.\n");
