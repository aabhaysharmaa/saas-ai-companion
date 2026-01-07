const { PrismaClient } = require("../src/generated/prisma/client");

const db = new PrismaClient();

async function main() {
  await db.category.createMany({
    data: [
      { name: "Famous people" },
      { name: "Movies & TV" },
      { name: "Musicians" },
      { name: "Games" },
      { name: "Philosophy" },
      { name: "Scientists" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seeded");
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
