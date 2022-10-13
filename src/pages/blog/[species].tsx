import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Header from '../../components/Header'
import { ARTICLE, DIRECTORY } from '../../api/api'
import 'github-markdown-css'
import Image from 'next/image'

interface directoryDefine {
  article_id: number,
  article_name: string,
  category_id: string,
  created_at: Date,
  md_path: string,
  type_id: string,
  updated_at: Date
}

// 解析md文件
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});


/*
  @category：是什么类的文章如：js，html等
  @type：是那类型的文章：如：doc等
  @id：是文章的编号
*/
const Blog: React.FC = () => {
  const router = useRouter();
  let { species } = router.query;
  const [result, setResult] = useState("无")
  const [directory, setDirectory]: [directory: directoryDefine[], setDirectory: Function] = useState([]);
  const [type, setType] = useState("doc");
  const [content, setContent]: any = useState("无");


  const getContent = (category: string, id: number) => {
    // 请求文章数据
    ARTICLE({ category, id }).then((data: any) => {
      setContent(data)
      const markdown = data.path
      setResult(md.render(markdown));
    }).catch(rej => {
      console.error(rej);
    })
  }

  const getDirectory = async (category: string, type: string) => {
    // 获取目录
    const data: any = await DIRECTORY({ category, type })
    setDirectory(data)
    // 获取文章
    if (data.length) {
      getContent(species as string, data[0].article_id)
    }
  }

  //获取子组件中的type
  const getType = (data: string) => {
    setType(data);
  }

  useEffect(() => {
    /*
    出现问题一：useEffect的执行时间：重外部链接跳到该页面时，外面的现在执行。
               在当前页面刷新时，先执行useEffect。
    解决方法：监听你需要外部的那个值，就可以了
    */
    if (species) {
      getDirectory(species as string, type)
    }
  }, [type, species])


  return (
    <div className='min-h-100vh flex flex-col relative'>
      <Head>
        <title>{species}</title>
      </Head>
      <div className='sticky top-0 bg-light-50'>
        <Header getMsg={getType} title={species as string} ></Header>
      </div>
      {
        // 当没有文章时，显示数据为空的图片
        directory.length == 0 ? <Image src={"/数据为空.svg"} width={600} height={600} ></Image> :
          <div className='flex min-w-300 flex-1'>
            <div className='flex-grow-[1] border-r-2px border-b-dark-400 fixed w-60 h-100vh pl-10 text-stroke-purple-900'>
              {
                directory.map(({ article_id, article_name }: { article_name: string, article_id: number }, index) =>
                  <div className={`cursor-pointer h-8 ${article_id !== content.articleId ? null : 'text-stroke-purple-600 font-800'}`}
                    onClick={() => { getContent(species as string, article_id) }}
                    key={index}>{article_name}</div>
                )
              }
            </div>
            <div className='flex-grow-[3] markdown-body flex justify-center pt-10 pl-60'>
              {/* 将获取的文章内容插入到浏览器中 */}
              <div className='w-180' dangerouslySetInnerHTML={{ __html: result }}></div>
            </div>
          </div>
      }
    </div >
  )
}

export default Blog

