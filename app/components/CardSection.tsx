import React, { useEffect } from 'react'
import Card from './Card'
import { getUserThoughts } from '@/graphql/queries/thought';
import { useCurrentUser } from '@/hooks/useCurrenUser';
import { useGetUserThoughts } from '@/hooks/useGetUserThoughts';


const CardSection = ({ isExplore }:{isExplore:boolean}) => {
  let data =[];
  isExplore == true ? data = useGetUserThoughts(isExplore)?.exploreThoughts : data = useGetUserThoughts(isExplore)?.getThoughts;
  if(data){
    console.log(data);
  }
 
  return (
    <div className='py-6'>
      {
        data ? data.map((r:any)=>{
          return <Card details={r} key={r.id}/>
        }) : <div></div>
      } 
    </div> 
  )
}

export default CardSection