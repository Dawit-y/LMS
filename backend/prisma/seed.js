import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create some courses
  //   await prisma.course.createMany({
  //     data: [
  //       {
  //         name: "Introduction to Programming",
  //         image: "intro_to_programming.jpg",
  //         description: "Learn the basics of programming using Python.",
  //       },
  //       {
  //         name: "Web Development Bootcamp",
  //         image: "web_dev_bootcamp.jpg",
  //         description: "A comprehensive guide to full-stack web development.",
  //       },
  //       {
  //         name: "Data Science Fundamentals",
  //         image: "data_science_fundamentals.jpg",
  //         description: "An introduction to data science concepts and tools.",
  //       },
  //     ],
  //   });

  console.log("Database has been seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
