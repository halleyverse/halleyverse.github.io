import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    overview: z.string(),
    centralQuestion: z.string(),
    summary: z.string(),
    methods: z.array(z.string()).default([]),
    order: z.number().int().nonnegative(),
    complete: z.boolean().default(false),
    visuals: z.array(z.object({
      image: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
    projects: z.array(z.object({
      title: z.string(),
      status: z.string(),
      year: z.string().optional(),
      summary: z.string(),
      methods: z.array(z.string()).default([]),
      images: z.array(z.object({
        image: image(),
        alt: z.string(),
      })).default([]),
      doi: z.string().optional(),
      url: z.url().optional(),
      featured: z.boolean().default(true),
    })).default([]),
  }),
});

export const collections = { research };
