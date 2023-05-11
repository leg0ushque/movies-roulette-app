import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

import { useQueryParams } from '@/hooks';

interface IQueryLinkProps {
  href: string
}

const QueryLink : React.FC<PropsWithChildren<IQueryLinkProps>> = ({ children, href }) => {
  const { query, updateParameter } = useQueryParams();

  return <Link href={`${href}${updateParameter()}`}>{children}</Link>
}

export default QueryLink;