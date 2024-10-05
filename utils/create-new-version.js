const fs = require('fs');
const path = require('path');

function createNewVersion() {
  const versionsDir = path.join(__dirname, 'versions');
  const versionFiles = fs.readdirSync(versionsDir)
    .filter(file => file.match(/^\d+\.\d+\.\d+\.css$/))
    .sort((a, b) => {
      const versionA = a.replace('.css', '').split('.').map(Number);
      const versionB = b.replace('.css', '').split('.').map(Number);
      for (let i = 0; i < 3; i++) {
        if (versionA[i] !== versionB[i]) {
          return versionB[i] - versionA[i];
        }
      }
      return 0;
    });

  if (versionFiles.length < 2) {
    console.log('Not enough version files to compare.');
    return;
  }

  const latestVersion = versionFiles[0];
  const previousVersion = versionFiles[1];

  const latestContent = fs.readFileSync(path.join(versionsDir, latestVersion), 'utf-8');
  const previousContent = fs.readFileSync(path.join(versionsDir, previousVersion), 'utf-8');

  if (latestContent === previousContent) {
    console.log('The last two versions are identical. No new version created.');
    return;
  }

  const [major, minor, patch] = latestVersion.replace('.css', '').split('.').map(Number);
  const newVersion = `${major}.${minor}.${patch + 1}.css`;
  const newVersionPath = path.join(versionsDir, newVersion);

  fs.writeFileSync(newVersionPath, latestContent);
  console.log(`New version created: ${newVersion}`);

  // Update latest.css
  fs.copyFileSync(newVersionPath, path.join(versionsDir, 'latest.css'));
  console.log('latest.css updated');
}

createNewVersion();