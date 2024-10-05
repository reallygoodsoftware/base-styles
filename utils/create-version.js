const fs = require('fs');
const path = require('path');

function createNewVersion() {
  const baseStylesPath = path.join(__dirname, '..', 'base-styles.css');
  const versionsDir = path.join(__dirname, '..', 'versions');
  const changelogPath = path.join(__dirname, '..', 'changelog.md');
  
  // Read base-styles.css
  const baseStylesContent = fs.readFileSync(baseStylesPath, 'utf-8');

  // Get the most recent version file
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

  if (versionFiles.length === 0) {
    const newVersion = '0.0.1.css';
    const newVersionPath = path.join(versionsDir, newVersion);
    fs.writeFileSync(newVersionPath, baseStylesContent);
    fs.copyFileSync(newVersionPath, path.join(versionsDir, 'latest.css'));
    updateChangelog(newVersion, changelogPath);
    return;
  }

  const latestVersion = versionFiles[0];
  const latestVersionPath = path.join(versionsDir, latestVersion);
  const latestVersionContent = fs.readFileSync(latestVersionPath, 'utf-8');

  // Compare base-styles.css with the most recent version
  const baseStylesTrimmed = baseStylesContent.trim();
  const latestVersionTrimmed = latestVersionContent.trim();
  
  if (baseStylesTrimmed === latestVersionTrimmed) {
    console.log('No changes detected, skipping');
    return;
  }

  // Create new version file
  const [major, minor, patch] = latestVersion.replace('.css', '').split('.').map(Number);
  const newVersion = `${major}.${minor}.${patch + 1}.css`;
  const newVersionPath = path.join(versionsDir, newVersion);

  fs.writeFileSync(newVersionPath, baseStylesContent);

  // Update latest.css
  fs.copyFileSync(newVersionPath, path.join(versionsDir, 'latest.css'));

  // Update changelog
  updateChangelog(newVersion, changelogPath);
}

function updateChangelog(version, changelogPath) {
  const changelogContent = fs.readFileSync(changelogPath, 'utf-8');
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  const changelogUpdate = `## ${version.replace('.css', '')} (${currentDate})\n\n`;

  fs.writeFileSync(changelogPath, changelogUpdate + changelogContent);
}

createNewVersion();