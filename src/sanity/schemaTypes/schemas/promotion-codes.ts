import { defineField, defineType } from "sanity";


export const promotionCodes = defineType({
    name: 'promotionCodes',
    title: 'Promotion Codes',
    type: "document",
    fields: [
        defineField({
            name: 'code',
            title: "code",
            type: "string",
        }),
        defineField({
            name: 'discountPercentage',
            title: "Discount Percentage (%)",
            type: "number",
        }),
        defineField({
            name: 'expirationDate',
            title: "Expiration Date",
            type: "date",
        }),
    ]
})