import Head from 'next/head'
import Image from 'next/image'
import Slider from '../Component/Slider/Slider'
import Title from '../Component/Title/Title'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
       <Title title={`Ehsan Marketing`} description={ `this is the page that are workinhg for consumer `}/>

      <h1 className='text-primary'>Wellcome to the Ehsan marketingdfd </h1>
      <Slider />


    </div>
  )
}
