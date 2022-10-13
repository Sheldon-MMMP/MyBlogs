import React, { useEffect, useState } from "react";
import Head from "next/head"
import Image from "next/image"
import Link from "next/link";

interface skillTypedefine {
  id: number,
  name: string
}

const skillType: skillTypedefine[] = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Web' },
  { id: 3, name: 'Computer' },
  { id: 4, name: 'Arithmetic' }
]


interface routerdefine {
  id: number,
  name: string,
  image: string,
  link: string
}
const router: routerdefine[] = [
  { id: 1, name: 'html', image: '/html.png', link: 'html' },
  { id: 1, name: 'css', image: '/css.png', link: 'css' },
  { id: 1, name: 'js', image: '/js.png', link: 'js' },
  { id: 1, name: 'vue', image: '/vue.png', link: 'vue' },
  { id: 1, name: 'react', image: '/react.png', link: 'react' },
  { id: 1, name: 'http', image: '/http.png', link: 'http' },
]

interface socialPlatformdefine {
  id: number,
  name: string,
  link: string
}
const socialPlatform: socialPlatformdefine[] = [
  { id: 1, name: "JueJin", link: "https://juejin.cn/user/4279763049394365" },
  { id: 2, name: "GitHub", link: "https://github.com/Sheldon-MMMP" },
  { id: 3, name: "Gitee", link: "https://gitee.com/wf_Love-1314" },
  { id: 4, name: "CSDN", link: "https://blog.csdn.net/Alex_ygz?type=blog" }
]

const Home: React.FC = () => {
  const [optionIndex, setOptionIndex] = useState(1)

  return (
    <div>
      <Head>
        <title>Welcome to My blog site</title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <div className="bg-index h-screen w-screen bg-index flex items-center flex-col">
        <div className="w-screen  flex justify-between px-6 mt-8 min-w-220">
          <Image src="/icon.png" width={34} height={34}></Image>
          <Image src="/Menu.png" width={34} height={34}></Image>
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
                skillType.map((item, index) => <li key={index} className={item.id === optionIndex ? "text-dark-900" : "text-primarily"} onClick={() => setOptionIndex(item.id)}><a className="cursor-pointer">{item.name}</a></li>)
              }
            </ul>
          </div>
          <div className="mt-5 mb-10 text-primarily">Please point out any mistakes in the notes.</div>
          <div className="flex flex-wrap w-280 justify-between h-319 content-between">
            {
              router.map((item, index) => <Link key={index} href={`blog/${item.link}`}><div><Image className="cursor-pointer" src={item.image} width={540} height={400}></Image></div></Link>)
            }
          </div>
        </div>
      </div>
      {/* 底部 */}
      <div className="flex justify-center my-40">
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
