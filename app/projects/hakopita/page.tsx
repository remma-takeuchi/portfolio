import { getMarkdownContent } from '@/lib/markdown'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'はこピタ - 収納棚をスマートに管理するアプリ',
  description: '収納棚の中身やサイズを記録・検索できるスマホアプリ。累計ダウンロード数70万件突破',
}

export default async function HakopitaPage() {
  const content = await getMarkdownContent('hakopita')
  
  if (!content) {
    return <div>コンテンツが見つかりません</div>
  }

  return (
    <div className="prose prose-lg max-w-none">
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: content.htmlContent }}
      />
    </div>
  )
} 