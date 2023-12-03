import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            updatedDate: z
                .string()
                .optional()
                .transform((str) => (str ? new Date(str) : undefined)),
            heroImage: image().optional(),
            category: z.string(),
            author: z.string(),
        }),
});

const projects = defineCollection({
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            updatedDate: z
                .string()
                .optional()
                .transform((str) => (str ? new Date(str) : undefined)),
            heroImage: image().optional(),
            twBgColor: z.string().optional(),
            logoImage: image().optional(),
            category: z.string(),
            stack: z.string().optional(),
            websiteLink: z.string().optional(),
            author: z.string(),
        }),
});

const services = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        heroImage: z.string().optional(),
        category: z.string(),
        author: z.string(),
    }),
});

export const collections = { blog, projects, services };
