import MovieDetailsHeader from '@/layouts/MovieDetailsHeader';

interface IPageProps {
  params: { movieId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const MoviePage : React.FC<IPageProps> = ({ params, searchParams }) => {
  return (
    <MovieDetailsHeader movieId={params.movieId} />
  )
}

export default MoviePage