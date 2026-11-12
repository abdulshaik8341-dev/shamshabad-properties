import { createClient } from '@sanity/client';
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import type { PortableTextBlock } from '@portabletext/react';
import { blogPosts, getPostBySlug } from '@/data/blog';

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '1qa8sbog',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
};

export const sanityClient = createClient(sanityConfig);

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export interface UnifiedBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  body: PortableTextBlock[] | string[];
  source: 'sanity' | 'local';
}

interface RawSanityPost {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  date?: string;
  author?: string;
  mainImage?: SanityImageSource;
  imageUrl?: string;
  readTime?: string;
  body?: PortableTextBlock[];
}

const DEFAULT_BLOG_IMAGE =
  'https://images.pexels.com/photos/4456656/pexels-photo-4456656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  "slug": slug.current,
  title,
  "excerpt": coalesce(excerpt, pt::text(body[0..0]), ""),
  "category": coalesce(category, categories[0]->title, "Market Insights"),
  "date": coalesce(publishedAt, _createdAt),
  "author": coalesce(author->name, author, "Shamshabad Real Estate Team"),
  mainImage,
  "imageUrl": coalesce(mainImage.asset->url, image.asset->url),
  "readTime": coalesce(readTime, "4 min read"),
  body
}`;

const SINGLE_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  "excerpt": coalesce(excerpt, pt::text(body[0..0]), ""),
  "category": coalesce(category, categories[0]->title, "Market Insights"),
  "date": coalesce(publishedAt, _createdAt),
  "author": coalesce(author->name, author, "Shamshabad Real Estate Team"),
  mainImage,
  "imageUrl": coalesce(mainImage.asset->url, image.asset->url),
  "readTime": coalesce(readTime, "4 min read"),
  body
}`;

function mapSanityPost(raw: RawSanityPost): UnifiedBlogPost | null {
  if (!raw.slug || !raw.title) return null;

  let resolvedImage = raw.imageUrl || DEFAULT_BLOG_IMAGE;
  if (raw.mainImage) {
    try {
      resolvedImage = urlFor(raw.mainImage).width(1200).auto('format').url();
    } catch {
      resolvedImage = raw.imageUrl || DEFAULT_BLOG_IMAGE;
    }
  }

  return {
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt || 'Read our latest insight on Shamshabad real estate and open plots.',
    category: raw.category || 'Market Insights',
    date: raw.date || new Date().toISOString(),
    author: raw.author || 'Shamshabad Real Estate Team',
    image: resolvedImage,
    readTime: raw.readTime || '4 min read',
    body: Array.isArray(raw.body) ? raw.body : [],
    source: 'sanity',
  };
}

function mapLocalPosts(): UnifiedBlogPost[] {
  return blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    author: post.author,
    image: post.image,
    readTime: post.readTime,
    body: post.content,
    source: 'local',
  }));
}

export async function fetchBlogPosts(): Promise<UnifiedBlogPost[]> {
  try {
    const rawPosts = await sanityClient.fetch<RawSanityPost[]>(POSTS_QUERY);
    const mapped = (rawPosts || [])
      .map(mapSanityPost)
      .filter((p): p is UnifiedBlogPost => p !== null);

    if (mapped.length > 0) {
      return mapped;
    }
  } catch (err) {
    console.warn('Could not fetch blog posts from Sanity, using local fallback:', err);
  }

  return mapLocalPosts();
}

export async function fetchBlogPostBySlug(
  slug: string,
): Promise<{ post: UnifiedBlogPost | null; related: UnifiedBlogPost[] }> {
  try {
    const [rawPost, allPosts] = await Promise.all([
      sanityClient.fetch<RawSanityPost | null>(SINGLE_POST_QUERY, { slug }),
      fetchBlogPosts(),
    ]);

    if (rawPost) {
      const mapped = mapSanityPost(rawPost);
      if (mapped) {
        return {
          post: mapped,
          related: allPosts.filter((p) => p.slug !== mapped.slug).slice(0, 3),
        };
      }
    }

    const localPost = getPostBySlug(slug);
    if (localPost) {
      const mappedLocal: UnifiedBlogPost = {
        slug: localPost.slug,
        title: localPost.title,
        excerpt: localPost.excerpt,
        category: localPost.category,
        date: localPost.date,
        author: localPost.author,
        image: localPost.image,
        readTime: localPost.readTime,
        body: localPost.content,
        source: 'local',
      };
      return {
        post: mappedLocal,
        related: allPosts.filter((p) => p.slug !== mappedLocal.slug).slice(0, 3),
      };
    }

    return { post: null, related: [] };
  } catch {
    const localPost = getPostBySlug(slug);
    if (!localPost) return { post: null, related: [] };
    const localAll = mapLocalPosts();
    return {
      post: {
        slug: localPost.slug,
        title: localPost.title,
        excerpt: localPost.excerpt,
        category: localPost.category,
        date: localPost.date,
        author: localPost.author,
        image: localPost.image,
        readTime: localPost.readTime,
        body: localPost.content,
        source: 'local',
      },
      related: localAll.filter((p) => p.slug !== localPost.slug).slice(0, 3),
    };
  }
}
