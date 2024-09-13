import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="text-lg text-4xl bg-pink-200 rounded-full text-xs text-xl ml-auto px-2 py-2 text-cyan-500 italic p-6 gap-6 text-center">
    <Link href="\">home page,</Link>
    <Link href="\about">About,</Link>
    <Link href="\adress">Adress,,</Link>

    </div>
     )
    }
    export default Footer