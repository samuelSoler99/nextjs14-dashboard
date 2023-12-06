import './ui/global.css'
import {montserrat} from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
      <h1> TITULON</h1>
      <div style={{border: '1px solid #000'}}>
        {children}
      </div>
      </body>
    <footer className='py-10 flex justify-center items-center'>
        Footer del Layout siempre disponible
    </footer>
    </html>
  );
}
