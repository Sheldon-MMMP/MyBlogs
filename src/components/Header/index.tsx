import React, { useState } from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import Link from "next/link"

interface classificationDefine {
  id: number,
  name: string
}

const classification: classificationDefine[] = [
  { id: 1, name: "doc" },
  { id: 2, name: "product" },
  { id: 3, name: "interview" }
]


const Header = ({ title }: { title: string }) => {
  const [optionIndex, setOptionIndex] = useState(1)
  return (
    <header className={`flex justify-between px-30 items-center ${styles.shadow} h-15`}>
      <div className='flex w-40 justify-between'>
        <Link href="/">
          <Image src="/icon.png" width={34} height={34}></Image>
        </Link>
        <h1 className="text-3xl font-800">{title}</h1>
      </div>
      <ul className='flex w-80 justify-between' >
        {
          classification.map((item, index) => <li key={index} className={`${item.id === optionIndex ? "text-dark-900" : "text-primarily"} cursor-pointer`} onClick={() => setOptionIndex(item.id)} > {item.name}</li>)
        }
      </ul>
    </header >
  )
}

export default Header
