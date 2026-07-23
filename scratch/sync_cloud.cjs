const fs = require('fs');

let fileStr = fs.readFileSync('./src/data/initialData.ts', 'utf8');
fileStr = fileStr.replace("import { PortfolioData } from '../types/portfolio';", "");
fileStr = fileStr.replace("export const initialPortfolioData: PortfolioData =", "const initialPortfolioData =");
fileStr += "\nmodule.exports = { initialPortfolioData };";

fs.writeFileSync('./scratch/tempData.cjs', fileStr);

const { initialPortfolioData } = require('./tempData.cjs');

fetch('https://jsonblob.com/api/jsonBlob/019f9105-fc37-75ab-a8ff-fab8a7f9fdf4', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify(initialPortfolioData)
})
.then(r => r.json())
.then(res => {
  console.log('Successfully synced FULL initialPortfolioData to cloud blob!');
  console.log('Profile Name:', res.profile ? res.profile.name : 'N/A');
  console.log('Experiences Count:', res.experiences ? res.experiences.length : 0);
  console.log('Research Count:', res.research ? res.research.length : 0);
})
.catch(console.error);
