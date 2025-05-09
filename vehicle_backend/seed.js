const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const carTypes = await prisma.vehicleType.createMany({
    data: [
      { name: 'Hyundai' },
      { name: 'SUV' },
      { name: 'Sedan' }
    ]
  });

  const bikeType = await prisma.vehicleType.create({
    data: { name: 'Cruiser' }
  });

  const vehicles = await prisma.vehicle.createMany({
    data: [
      { name: 'Hyundai i20', vehicleTypeId: 1 }, // Hatchback
      { name: 'Mahindra XUV700', vehicleTypeId: 2 }, // SUV
      { name: 'Honda City', vehicleTypeId: 3 }, // Sedan
      { name: 'Royal Enfield Meteor', vehicleTypeId: 4 } // Cruiser
    ]
  });

  console.log('Seeding completed');
}

main()
  .then(() => {
    console.log('Seeding completed');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
