import { exploreThoughts, getUserThoughts } from "@/graphql/queries/thought"
import { useQuery } from "@tanstack/react-query";

// export const useGetUserThoughts = () =>{
// const data = getUserThoughts().then((res)=>res)
// return data;
// }

export function useGetUserThoughts(isExplore:boolean):any {
  let func; 
   isExplore ?  func = exploreThoughts : func = getUserThoughts;
  const { isPending, error, data } = useQuery({
    queryKey: ['user-thoughts'],
    queryFn:  func,
    refetchInterval: 5000
  });
  return data;
}