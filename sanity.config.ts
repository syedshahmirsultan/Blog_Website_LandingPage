'use client'

import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schema'
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'



// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  name :'blog_website',
  title :"Bloggers_Studio",

  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
