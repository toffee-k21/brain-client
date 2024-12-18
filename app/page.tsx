'use client'
import Image from "next/image";
import Addthought from "./components/Add-thought";
import CardSection from "./components/CardSection";
import { GoogleLogin } from "@react-oauth/google";
import { getCurrentUser, getToken } from "@/graphql/queries/user";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useCurrentUser } from "@/hooks/useCurrenUser";

interface GetCurrentUserData {
  id: string;
  name: string;
  email: string;
  proflieImgURL?: string;
}

interface UserData {
  getCurrentUser: GetCurrentUserData | null;
}
export default function Home({params}:any) {

  const userData:UserData = useCurrentUser();

  return (
  <div className="px-7 md:px-[16%] grid grid-cols-3 h-screen overflow-hidden">
    <div className="col-span-2 my-16 overflow-y-scroll h-[550px]" style={{scrollbarWidth: 'none'}}>
    <Addthought />
    <CardSection />
    </div>
    <div className="bg-neutral-950 border-l-[0.1px]  border-gray-700 mx-4 p-2 ">
        <div className="border-gray-700 border-[0.1px] h-[560px] p-2 rounded-md relative">
      
          {userData?.getCurrentUser == null ? <div>
            <div className="py-4 text-lg text-pink-400">New to Second Brain ?</div><GoogleLogin
              onSuccess={async credentialResponse => {
                console.log(credentialResponse);
                const data: any = await getToken(credentialResponse.credential!);
                console.log("data agaya ", data);
                localStorage.setItem('second_brain_token', `Bearer ${data.verifyGoogleToken}`);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div> : <div></div>}
            {/* <button onClick={() => getCurrentUser() } >click</button> */}
      {userData && userData?.getCurrentUser ? <div className="flex items-center">
            <div className="text-xl m-2">Hello, </div>{" "}
        
              <div className="text-pink-400 text-lg">{userData?.getCurrentUser.name}</div>
              <div className="flex absolute bottom-4 left-4 items-center">
              <Image src={userData?.getCurrentUser?.proflieImgURL!} alt={"profile image"} width={40} height={40} className="rounded-full mx-2"/>
              <div>{userData?.getCurrentUser.name}</div></div>
        
        </div> : 
        <div></div>}
      </div>
      <div></div>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
  </div>
  );
}
