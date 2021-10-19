import { useEffect } from 'react'
import Layout from '../components/layout'
import HeaderSection from '../sections/HeaderSection'
import HeroSection from '../sections/HeroSection'

const Home: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <Layout>
      <HeaderSection />
      <HeroSection />
    </Layout>
  )
}

export default Home
