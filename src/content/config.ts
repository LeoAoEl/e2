import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.union([image(), z.string()]),
      date: z.date(),
      author: z.string().default("E2 Estrategias"),
    }),
});

const eventosCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.union([image(), z.string()]),
      date: z.date(),
      location: z.string().optional(),
    }),
});

const teamColletion = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: z.union([image(), z.string()]),
    }),
});

export const collections = {
  blog: blogCollection,
  eventos: eventosCollection,
  team: teamColletion,
};
