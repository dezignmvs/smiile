import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Smile Meditation Centre',
  description: 'Smile Meditation Centre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Navbar/>
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
