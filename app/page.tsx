'use client'
import Image from "next/image";
import Addthought from "./components/Add-thought";
import CardSection from "./components/CardSection";
import { GoogleLogin } from "@react-oauth/google";
import { getToken } from "@/graphql/queries/user";
import { useCurrentUser } from "@/hooks/useCurrenUser";
import { use, useEffect, useState } from "react";

interface GetCurrentUserData {
  id: string;
  name: string;
  email: string;
  proflieImgURL?: string;
}

interface UserData {
  getCurrentUser: GetCurrentUserData | null;
}
export default function Home({ params }: any) {
  const [noteToMyself, setNoteToMyself] = useState<string>("");
  const userData: UserData = useCurrentUser();
  useEffect(() => {
    return () => {
      localStorage.setItem('note_to_myself', noteToMyself);
    }
  }, [])

  return (
    <div className="px-7 md:px-[16%] grid grid-cols-3 h-screen overflow-hidden ">
      <div className="col-span-3 md:col-span-2 my-36 md:my-16 overflow-y-scroll h-full md:h-[550px]" style={{ scrollbarWidth: 'none' }}>
        <Addthought />
        <CardSection isExplore={false} />
      </div>
      <div className="bg-neutral-950 border-l-[0.1px]  border-gray-700 mx-4 p-2 hidden md:block">
        <div className=" my-4 border-gray-700 border-[0.1px] h-[260px] p-3 rounded-md relative">
          <span className="text-pink-500 text-lg">Note: to myself</span>
          <textarea name="" id="" placeholder="you can write notes for yourself here" className="bg-neutral-950 focus:ring-0 outline-none resize-none py-4" rows={7} cols={27} style={{ scrollbarWidth: "none" ,maxWidth:'100%', maxHeight:'100%'}} onChange={(e) => setNoteToMyself(e.target.value)}></textarea>

        </div>
        <div className="border-gray-700 border-[0.1px] h-[260px] p-4 rounded-md relative my-4 flex flex-col">
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
          {
            userData && userData?.getCurrentUser ? <div className="flex items-center">
              <div className="flex absolute bottom-4 left-4 items-center w-full">
                <div className="flex items-center bg-neutral-900 p-2 w-[85%] rounded-3xl">
                  <Image src={userData?.getCurrentUser?.proflieImgURL!} alt={"profile image"} width={30} height={30} className="rounded-full mr-2 " />
                  <div className="text-pink-500">{userData?.getCurrentUser.name}</div></div>
              </div>
            </div> :
              <div></div>
          }
        </div>
      </div>
    </div>
  );
}
