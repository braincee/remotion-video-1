import '../../styles/global.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remotion and Next.js',
  description: 'Remotion and Next.js',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
