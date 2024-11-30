import { AppRouterCacheProvider, AppRouterCacheProviderProps } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from './theme/ThemeProvider';
import theme from './theme/theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

 export default function RootLayout(props: AppRouterCacheProviderProps) {
   return (
     <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
           {props.children}
        </ThemeProvider>
        </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
