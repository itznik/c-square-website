import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// IMPORTANT: Get these from your sanity.io project dashboard
export const projectId = 'kwb9x7v7';
export const dataset = 'production';
const apiVersion = '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
});

// Helper function for generating image URLs with optimal settings
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => {
  return builder.image(source);
};
