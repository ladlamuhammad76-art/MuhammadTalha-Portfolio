import fs from 'fs';

// Read initialData.ts line by line to convert to JSON/JS object
let rawText = fs.readFileSync('./src/data/initialData.ts', 'utf8');

// Strip TypeScript type annotations
rawText = rawText.replace("import { PortfolioData } from '../types/portfolio';", "");
rawText = rawText.replace(": PortfolioData", "");
rawText = rawText.replace("export const initialPortfolioData =", "export const initialPortfolioData =");

fs.writeFileSync('./scratch/tempData.mjs', rawText);

import { initialPortfolioData } from './tempData.mjs';

console.log('Profile Name:', initialPortfolioData.profile.name);
console.log('Experiences count:', initialPortfolioData.experiences.length);
console.log('Research count:', initialPortfolioData.research.length);
console.log('Education count:', initialPortfolioData.education.length);

fetch('https://jsonblob.com/api/jsonBlob/019f9105-fc37-75ab-a8ff-fab8a7f9fdf4', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify(initialPortfolioData)
})
.then(r => r.json())
.then(res => {
  console.log('Successfully synced FULL initialPortfolioData to cloud blob!');
  console.log('Verified Profile Name:', res.profile.name);
  console.log('Verified Experiences:', res.experiences.length);
  console.log('Verified Research:', res.research.length);
})
.catch(console.error);
