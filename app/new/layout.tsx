import SearchFormHeader from '@/layouts/SearchFormHeader';

export default function TestelLayout( { children } : { children: React.ReactNode } ) {
  return (
    <SearchFormHeader>
      {children}
    </SearchFormHeader>
  );
}