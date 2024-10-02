import Image from 'next/image'
import Girl from '@/app/assets/3d_cartoon_woman_laptop.png'
import aboutData from '@/app/data/aboutData.json'
import CareerCard from './CareerCard'

const About =()=>{
    return <div className=" bg-black bg-opacity-65 m-[10%]">
        <h1>About</h1>
        <div className='flex'>
            <Image src={Girl} alt='idk'className='w-[400px] max-md:hidden'/>
        <div className='flex flex-col gap-4 justify-around'>
            {aboutData.map((career, index) => (
                <CareerCard {...career}/>
            ))}
            </div>
        </div>
    </div>
}

export default About