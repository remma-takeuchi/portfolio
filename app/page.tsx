import { getMarkdownContent } from '@/lib/markdown'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '竹内 錬磨（Remma Takeuchi）',
  description: '個人開発者として「はこピタ」などのモバイルアプリを開発・運営しています',
}

export default async function HomePage() {
  const content = await getMarkdownContent('index')
  
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