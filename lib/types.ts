import {z} from "zod";

export const CategorySchema = z.object({
    id: z.string().optional(),
    category: z.
                string().
                trim().
                min(1, {
                    message: "Category must contain at least 1 character"
                }).
                max(30, {
                    message: "Category must contain bot be longer than 30 characters"
                }),
});

export const ProductSchema = z.object({
    id: z.string().optional(),
    category: z.
                string().
                trim().
                min(1, {
                    message: "Category must contain at least 1 character"
                }).
                max(30, {
                    message: "Category must contain bot be longer than 30 characters"
                }),
    product: z.
                string().
                trim().
                min(1, {
                    message: "Product must contain at least 1 character"
                }).
                max(30, {
                    message: "Product must contain bot be longer than 30 characters"
                }),
    quantity: z.
                number(
                    {
                        required_error: 'Quantity is required.',
                        invalid_type_error: 'Quantity must be a number.'
                    }
                ).
                nonnegative({
                    message: 'Quantity must be in between 0 and 99999.'
                }).
                lt(100000, {
                    message: 'Quantity must be in between 0 and 99999.'
                }),
});

export type ProductType = z.infer<typeof ProductSchema>;

export interface NewCategory {
    category: string;
}

export interface NewProduct {
    category: string;
    product: string;
    quantity: number;
};