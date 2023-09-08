import '@styles/globals.css'
import Header from '@components/header'
import Sidebar from '@components/sidebar'

export const metadata = {
  title: '8.05 Geography Travel Brochure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-row pt-[7.5rem]">
          <Sidebar />
          <div className="w-full" id="page">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
