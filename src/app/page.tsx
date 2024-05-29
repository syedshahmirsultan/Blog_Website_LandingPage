import { groq } from 'next-sanity';
import Hero from './components/Hero';
import { client } from '@/sanity/lib/client';
import BlogContent from './components/BlogContent';

// Define the GROQ query to fetch all posts with author and categories data, ordered by creation date in ascending order
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

// Async function to fetch posts and render the home page
export default async function Home() {
  // Fetch posts from the Sanity client using the defined query
  const posts = await client.fetch(query);

  // Render the main content of the home page
  return (
    <main>
      {/* Render the Hero component */}
      <Hero />
      {/* Render the BlogContent component with fetched posts */}
      <BlogContent posts={posts} />
    </main>
  );
}

   
