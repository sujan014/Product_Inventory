import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main(){
    await prisma.category.create({
        data: {
            name: "Fruits",
            product: {
                create: {
                    name: "Apple",
                    inventory: {
                        create: {
                            qty: 500,
                        }
                    }
                }
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })