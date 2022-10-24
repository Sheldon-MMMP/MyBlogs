import React, { useEffect, useState } from "react";
import Head from "next/head"
import Image from "next/image"
import Link from "next/link";
import { skillType, router, socialPlatform } from "../local/information"

const Home: React.FC = () => {
  const [optionIndex, setOptionIndex] = useState(1)

  return (
    <div>
      <Head>
        <title>Welcome to My blog site</title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <div className="bg-index h-screen w-full bg-index flex items-center flex-col">
        <div className="w-full flex justify-between px-6 mt-8 min-w-220">
          <Image src="/icon.png" width={34} height={34}></Image>
          <Link href="/editBlog" prefetch={false}>
            <a className="cursor-pointer">
              <Image src="/Menu.png" width={34} height={34}></Image>
            </a>
          </Link>
        </div>
        <div className="max-w-600 min-w-280">
          <div className="flex justify-between mt-40">
            <div className="right flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-bold-400 text-4xl">Welcome to my blog site</h2>
                <h2 className="font-bold-400 text-4xl mt-1">I'm Cognos</h2>
              </div>
              <div className="w-103">
                <p className="text-subhead text-1xl">
                  Cognos is an indispensable professional role in the development of software products in the Internet era
                </p>
              </div>
              <div className=""><p className="text-wechat text-1xl">WeChat:Make_Yourself_Proud5</p></div>
            </div>
            <div className="lef flex-1 flex justify-end">
              <Image src="/logo.png" width={386} height={497}></Image>
            </div>
          </div>
        </div>
      </div>
      {/* 内容 */}
      <div className="flex justify-center mt-9">
        <div className="max-w-600 min-w-280">
          <div className="flex justify-between">
            <h2 className="text-2xl">My Note</h2>
            <ul className="flex w-70 justify-between items-center">
              {
                skillType.map((item, index) => <li key={index} onClick={() => setOptionIndex(item.id)}><a className={`cursor-pointer ${item.id === optionIndex ? "text-dark-900" : "text-primarily"}`}>{item.name}</a></li>)
              }
            </ul>
          </div>
          <div className="mt-5 mb-10 text-primarily">Please point out any mistakes in the notes.</div>
          <div className="flex flex-wrap w-280 justify-between h-319 content-between">
            {
              router.map((item, index) => <Link key={index} href={{ pathname: `blog/${item.link}` }}><a><Image className="cursor-pointer" src={item.image} width={540} height={400}></Image></a></Link>)
            }
          </div>
        </div>
      </div>
      {/* 底部 */}
      <div className="flex justify-center py-40">
        <div className="flex w-80 text-primarily justify-between">
          {
            socialPlatform.map((item, index) => <Link key={index} href={item.link}>{item.name}</Link>)
          }
        </div>
      </div>
    </div >
  )
}



export default Home
