import { getUserThoughts } from "@/graphql/queries/thought"
import { useQuery } from "@tanstack/react-query";

// export const useGetUserThoughts = () =>{
// const data = getUserThoughts().then((res)=>res)
// return data;
// }

export function useGetUserThoughts():any {
  const { isPending, error, data } = useQuery({
    queryKey: ['user-thoughts'],
    queryFn:  getUserThoughts
  });
  return data;
}