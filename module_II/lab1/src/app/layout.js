'use client';
import * as React from "react";
import { NextUIProvider } from '@nextui-org/react';
import { NavbarHome } from '../components/navbar-home/page';

import 'swiper/css';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter( { subsets: [ 'latin' ] } );

export default function RootLayout( { children } ) {
  return (
    <html lang="es">
      <body className={ `${ inter.className }` }>
        <NextUIProvider>
          <NavbarHome />
          { children }
        </NextUIProvider>
      </body>
    </html>
  );
}
