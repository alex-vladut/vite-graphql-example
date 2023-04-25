import { useQuery } from '@apollo/client';

import { UserDocument } from './getUser.graphql';

type Props = {
  id: string;
};

export function User({ id }: Props) {
  const { data, loading, error } = useQuery(UserDocument, {
    variables: { id },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error</span>;
  return <div>{data?.getUser?.name}</div>;
}
