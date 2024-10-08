import { montserrat } from './ui/fonts';
import './ui/global.css';

//este es el layout que cubre toda la pagina
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        
        {children}

        <footer className='py-10 flex justify-center items-center'>
          Hecho por Luciano Morandi
        </footer>
      </body>
    </html>
  );
}
