import React from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Header from '../../components/Header'
import Directory from '../../components/Directory'
import Content from '../../components/Content'

const Blog: React.FC = () => {

  const router = useRouter();

  const { species } = router.query;
  return (
    <div>
      <Head>
        <title>{species}</title>
      </Head>
      <Header title={species as string}></Header>
      <div>
        <Directory></Directory>
        <Content></Content>
      </div>
    </div>
  )
}

export default Blog

