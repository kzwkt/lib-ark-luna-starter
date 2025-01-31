const fs = require('fs');
const path = require('path');
const ChildProccess = require('child_process')

const srcDir = './frontend/src/programs/v1/';
const destDir = './dist';

if (!fs.existsSync(srcDir)) 
    throw 'Source directory does not exist.';


// Get the first folder inside the source directory
const folder = fs.readdirSync(srcDir).find((item) => fs.statSync(path.join(srcDir, item)).isDirectory());

if (!folder)
    throw 'No folders found in the source directory.'

// Copy the first folder to the destination
fs.cpSync(path.join(srcDir, folder), destDir, { dereference: true });

ChildProccess.execSync("git switch luna")