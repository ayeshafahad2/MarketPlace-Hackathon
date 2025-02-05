import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Auto-generates slug from title
        maxLength: 200,
      },
      validation: (rule) => rule.required().error("Slug is required."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Describe the image for accessibility & SEO",
          initialValue: (parent) => parent?.title || "Product Image", // Auto-generate alt text from title
        }),
      ],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
    }),
    defineField({
      name: "isNew",
      title: "New Badge",
      type: "boolean",
    }),
  ],
  initialValue: {
    isNew: true,  // Set default for isNew, if required
  },
});
