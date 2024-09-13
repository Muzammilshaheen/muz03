import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
        <figure className="bg-red-100 rounded-xl p-8 dark:bg-slate-800">
  <Image className="w-44 h-44 rounded-non mx-auto" src="/adress.png" alt="" width="384" height="512" />

  <div className ="pt-6 text-center space-y-4">
  <h1 className="text-lg text-4xl bg-pink-200 rounded-full text-xs text-xl ml-auto px-2 py-2 text-cyan-500 italic"> 
    Muzammil
    </h1>
     
    <blockquote>
    
      <p className="text-lg font-lg bg-pink-400 rounded-non text-xs text-xl ml-auto px-2 py-2 text-cyan-500 bg-white">
        AZIZ ABAD RAHIM YAR KHAN
      </p>
      </blockquote>
    </div>
    </figure>
    </div>
  )
}
export default page