'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter( { subsets: [ 'latin' ] } );

// !No se puede usar metadata en un 'use client'
// export const metadata = {
//   title: 'Hot dog Le Francés',
//   description: 'Generated by create next app',
// };

export default function RootLayout( { children } ) {
  return (
    <html lang="es">
      <body className={ `${ inter.className }` }>
        { children }
      </body>
    </html>
  );
}
