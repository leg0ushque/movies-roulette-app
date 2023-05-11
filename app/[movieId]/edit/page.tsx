import MovieForm from '@/components/MovieForm';

interface IPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const EditPage : React.FC<IPageProps> = ({ params, searchParams }) => {
  return (
    <MovieForm onSubmit={}/>
  );
}

export default EditPage