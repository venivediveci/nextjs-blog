import Image from 'next/image'
import SectionLayout from '../components/SectionLayout'
import { Button } from '@mui/material'
import pic from '../public/images/love_to_learn.jpg'

const HeroSection: React.FC = () => {
  return (
    <SectionLayout>
      <div className="flex justify-center">
        <div className="w-4/12 mr-16 flex flex-col items-center">
          <p className="text-gray-100 text-2xl py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            alias fugit minima hic dolores sequi labore nam, repellat est
            laudantium corporis. Porro nihil exercitationem labore pariatur
            nulla hic commodi obcaecati.
          </p>
          <Button className="px-8 py-2 text-xl mt-8" variant="outlined">
            Get Started
          </Button>
        </div>
        <Image src={pic} alt="love to learn"></Image>
      </div>
    </SectionLayout>
  )
}

export default HeroSection
