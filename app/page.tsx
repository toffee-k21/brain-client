'use client'
import Image from "next/image";
import Addthought from "./components/Add-thought";
import CardSection from "./components/CardSection";
import { GoogleLogin } from "@react-oauth/google";
import { getCurrentUser, getToken } from "@/graphql/queries/user";

export default function Home({params}:any) {

  return (<div className="px-7 md:px-[16%] grid grid-cols-3 h-screen overflow-hidden">
    <div className="col-span-2 my-16 overflow-y-scroll h-[550px]" style={{scrollbarWidth: 'none'}}>
    <Addthought />
    <CardSection />
    </div>
    <div className="bg-neutral-950 border-l-[0.1px]  border-gray-700 mx-4 p-2">
      <div className="border-gray-700 border-[0.1px] h-[560px] p-2 rounded-md">
      <div className="py-4 text-lg text-pink-400">New to Second Brain ?</div>
       <GoogleLogin
              onSuccess={async credentialResponse => {
                console.log(credentialResponse);
                const data:any = await getToken(credentialResponse.credential!);
                console.log("data agaya ", data);
                localStorage.setItem('second_brain_token', `Bearer ${data.verifyGoogleToken}`);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            <button onClick={() => getCurrentUser() } >click</button>
      </div>
    </div>
  </div>
  );
}
