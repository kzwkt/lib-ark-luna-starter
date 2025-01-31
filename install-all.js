const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function installDependencies(dir) {
  // Read all files and directories in the current directory
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip the `node_modules` directory
    if (entry.isDirectory() && entry.name === 'node_modules') {
      continue;
    }

    // If it's a directory, recursively check it
    if (entry.isDirectory()) {
      installDependencies(fullPath);
    }

    // If it's a package.json file, install dependencies
    if (entry.isFile() && entry.name === 'package.json') {
      console.log(`Installing dependencies for ${fullPath}`);
      try {
        execSync('npm install', { cwd: dir, stdio: 'inherit' });
      } catch (error) {
        console.error(`Failed to install dependencies in ${dir}`, error);
      }
    }
  }
}

// Start the process from the desired root folder
const rootFolder = path.resolve('.'); // Replace with your root folder
installDependencies(rootFolder);