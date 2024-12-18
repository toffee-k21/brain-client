import { getCurrentUser } from "@/graphql/queries/user";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser():any {
  const { isPending, error, data } = useQuery({
    queryKey: ['current-user'],
    queryFn:  getCurrentUser,
    refetchInterval: 5000
  });
  return data;
}