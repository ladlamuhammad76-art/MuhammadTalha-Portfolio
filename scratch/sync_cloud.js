const fs = require('fs');

// Read initialData.ts content and strip type annotations for node execution
let fileStr = fs.readFileSync('./src/data/initialData.ts', 'utf8');
fileStr = fileStr.replace("import { PortfolioData } from '../types/portfolio';", "");
fileStr = fileStr.replace("export const initialPortfolioData: PortfolioData =", "const initialPortfolioData =");
fileStr += "\nmodule.exports = { initialPortfolioData };";

fs.writeFileSync('./scratch/tempData.js', fileStr);

const { initialPortfolioData } = require('./tempData.js');

fetch('https://jsonblob.com/api/jsonBlob/019f9105-fc37-75ab-a8ff-fab8a7f9fdf4', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify(initialPortfolioData)
})
.then(r => r.json())
.then(res => console.log('Successfully synced FULL initialPortfolioData to cloud blob!'))
.catch(console.error);
