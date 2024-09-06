import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import BlogCard from '@/components/blogCard';

interface PostProps{
  coverImage: string | "/_posts/gradient.jpeg";
  title: string | "No Title";
  excerpt: string | "No Excerpt";
  slug: string | "No slug";
  date: string | 'No date';
}


async function getPosts() {
  const postsDirectory = path.join(process.cwd(), '_posts'); 
  try {
    const dir = await fs.opendir(postsDirectory);
    const posts = [];

    //Reading the data of each file to generate a card for it
    for await (const dirent of dir) {
      const filePath = path.join(postsDirectory, dirent.name)
      const fileContents = await fs.readFile(filePath, 'utf8');
      const {data, content} = matter(fileContents);

      //Push all of the data to an array to generate a card
      posts.push({
        slug: dirent.name.slice(0, -3), // filename without .md
        title: data.title || 'Untitled',
        date: data.date || 'No date',
        excerpt: data.excerpt || content.slice(0, 100), // fallback to a slice of content
        coverImage: data.coverImage || '/default.jpg', // default image if not provided
      });
    }

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className='bg-black w-3/4 top-0 left-0 right-0 mx-auto h-screen border-2 '>
      {posts.length > 0 ? (
        <ul className='pt-10 grid grid-cols-2 gap-4'>
          {posts.map((post, index) => (
            <li key={index}>
              <BlogCard post={post}/>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
