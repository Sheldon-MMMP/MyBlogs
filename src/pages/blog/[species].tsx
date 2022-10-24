import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Header from '../../components/Header'
import { ARTICLE, DIRECTORY } from '../../api/api'
import 'github-markdown-css'
import Image from 'next/image'
import hljs from 'highlight.js'  // 引入highlight.js库
import 'highlight.js/styles/github.css'  // 引入github风格的代码高亮样式
import { directoryDefine, speciedPropsDefine } from '../../local/define'

// 解析md文件
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: any) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str, true).value;
      } catch (__) { }
    }
    return ''; // 使用额外的默认转义
  }
});

// 如果直接使用useRouter() 获取数据的话，不能立刻拿到数据，我们这个时我们就可以使用getServerSideProps()向组件通过props的形式进行传入，这样就可以立刻拿到路由参数。
export async function getServerSideProps(context: any) {
  return {
    props: { params: context.params }
  }
}


/*
  @category：是什么类的文章如：js，html等
  @type：是那类型的文章：如：doc等
  @id：是文章的编号
*/
const Blog: React.FC<speciedPropsDefine> = (props: speciedPropsDefine) => {
  let { species } = props.params

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

  /**
   * 发送请求函数
   * @param category 是什么类的文章如：js，html等
   * @param type 当前文章是什么类型
   */
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
    if (species)
      getDirectory(species as string, type)
  }, [type, species])


  return (
    <div className='min-h-100vh flex flex-col relative'>
      <Head>
        <title>{species}</title>
        <link rel="icon" href="/icon.png"></link>
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

