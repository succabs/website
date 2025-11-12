import { getCollection, type CollectionEntry } from "astro:content";

const WORDS_PER_MINUTE = 200;
export const BLOG_PAGE_SIZE = 10;

type BlogEntry = CollectionEntry<"blog">;

type ProcessedBlogEntry = BlogEntry & {
  data: BlogEntry["data"] & { readTime: number };
};

export async function getProcessedBlogPosts(): Promise<ProcessedBlogEntry[]> {
  return (await getCollection("blog"))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const wordCount = post.body?.trim().split(/\s+/).length ?? 0;
      const readTime = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
      return {
        ...post,
        data: {
          ...post.data,
          readTime,
        },
      };
    });
}

export function getAllTags(posts: ProcessedBlogEntry[]): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.data.tags ?? []))).sort();
}

export type { ProcessedBlogEntry };
