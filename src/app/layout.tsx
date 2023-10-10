import '../../assets/style/style.scss'
import type { Metadata } from 'next'
import ProgressBar from "@/components/layout/ProgressBar/ProgressBar";
import ContactButton from '@/components/layout/ContactButton/ContactButton';

export const metadata: Metadata = {
  title: 'Создание сайта под ключ',
  description: 'Generated by create next app',
  viewport: 'width=device-width, initial-scale=1.0, user-scalable=no'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ProgressBar/>
      <ContactButton/>
      {children}
      </body>
    </html>
  )
}
