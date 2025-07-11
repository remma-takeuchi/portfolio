import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HomeIcon, UserIcon, FolderIcon } from '@heroicons/react/24/outline'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '竹内 錬磨 - ポートフォリオ',
  description: '個人開発者として「はこピタ」などのモバイルアプリを開発・運営しています',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <a href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <UserIcon className="h-8 w-8 text-blue-600" />
                  <span>竹内 錬磨</span>
                </a>
                <div className="flex space-x-8">
                  <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group">
                    <HomeIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>ホーム</span>
                  </a>
                </div>
              </nav>
            </div>
          </header>
          <main className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="text-center text-gray-600">
                <p>© 2025 Remma Takeuchi. All rights reserved.</p>
                <p className="mt-2">
                  <a 
                    href="https://github.com/remma-takeuchi/portfolio" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub リポジトリ
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 