interface IPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default IPageProps