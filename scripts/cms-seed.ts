import { seedCmsFromCode } from "../src/cms/seed";

async function main() {
  const result = await seedCmsFromCode();
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
