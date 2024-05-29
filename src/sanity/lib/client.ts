import { createClient } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn
})

const builder = ImageUrlBuilder(client);

export const urlFor =(source:any)=>{
  return builder.image(source);
}