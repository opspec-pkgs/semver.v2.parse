const semVerParser = require('semver-parser')
const fs = require('fs');

try {
  const semVer = semVerParser.parseSemVer(process.env.semVer);
  delete semVer.version
  delete semVer.matches
  fs.writeFileSync(
    '/semVer',
    JSON.stringify(semVer)
  );
} catch (err) {
  console.error(err.message);
  process.exit(1)
}