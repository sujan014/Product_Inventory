import { Inventory } from "@prisma/client";
import prisma from "../../utils/prisma";

export async function getAllInventories(){
    return await prisma.inventory.findMany();
}
