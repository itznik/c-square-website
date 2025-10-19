import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = 'production';
const apiVersion = '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => {
  return builder.image(source);
};
