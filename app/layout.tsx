import '@/styles/fonts.css';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieListPage from '@/pages/MovieListPage';

export const metadata = {
  title: 'movies-roulette',
};

export default function RootLayout( { children } : { children: React.ReactNode } ) {
  return (
    <html lang="en">
      <body>
        <MovieListPage>
          {children}
        </MovieListPage>
      </body>
    </html>
  );
}