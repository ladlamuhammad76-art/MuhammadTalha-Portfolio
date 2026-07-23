import { initialPortfolioData } from '../src/data/initialData';

async function main() {
  console.log('Profile Name:', initialPortfolioData.profile.name);
  console.log('Experiences Count:', initialPortfolioData.experiences.length);
  console.log('Research Count:', initialPortfolioData.research.length);

  const res = await fetch('https://jsonblob.com/api/jsonBlob/019f9105-fc37-75ab-a8ff-fab8a7f9fdf4', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(initialPortfolioData)
  });
  const data = await res.json();
  console.log('Cloud Blob updated successfully! Verified Profile Name:', data.profile.name);
}

main().catch(console.error);
