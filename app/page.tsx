import Image from "next/image";
import Addthought from "./components/Add-thought";
import CardSection from "./components/CardSection";

export default function Home({params}:any) {
  console.log(params)
  return (<div className="px-7 md:px-[30%] my-16">
    <Addthought />
    <CardSection />
  </div>
  );
}
