import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

export interface MarkdownContent {
  slug: string
  title: string
  description: string
  content: string
  htmlContent: string
}

/**
 * Markdownファイルを解析してメタデータとコンテンツを取得
 */
export async function getMarkdownContent(slug: string): Promise<MarkdownContent | null> {
  try {
    const fullPath = path.join(process.cwd(), 'content', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // gray-matterでフロントマターを解析
    const { data, content } = matter(fileContents)
    
    // remarkでMarkdownをHTMLに変換
    const processedContent = await remark()
      .use(gfm)
      .use(html)
      .process(content)
    
    const htmlContent = processedContent.toString()
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      content,
      htmlContent
    }
  } catch (error) {
    console.error(`Error reading markdown file for slug: ${slug}`, error)
    return null
  }
}

/**
 * 全てのMarkdownファイルのスラグを取得
 */
export function getAllSlugs(): string[] {
  const contentDirectory = path.join(process.cwd(), 'content')
  const fileNames = fs.readdirSync(contentDirectory)
  
  return fileNames
    .filter((fileName: string) => fileName.endsWith('.md'))
    .map((fileName: string) => fileName.replace(/\.md$/, ''))
}

/**
 * 全てのMarkdownコンテンツを取得
 */
export async function getAllMarkdownContent(): Promise<MarkdownContent[]> {
  const slugs = getAllSlugs()
  const contents = await Promise.all(
    slugs.map(slug => getMarkdownContent(slug))
  )
  
  return contents.filter((content): content is MarkdownContent => content !== null)
} 