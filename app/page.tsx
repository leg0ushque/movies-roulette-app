import SearchFormHeader from '@/layouts/SearchFormHeader';
import IPageProps from '@/shared/types/IPageProps';

export default function RootPage({
  params,
  searchParams,
}: IPageProps) {
  return (
    <SearchFormHeader />
  )
;
}