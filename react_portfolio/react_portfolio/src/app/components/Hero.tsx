import Image from 'next/image'
import bilde from '@/app/assets/3d_cartoon_woman_circle.png'

const Hero =()=>{
    return <div className='flex m-[10%]'>
        <div className='flex-1'>
            <h1 className='text-5xl font-bold'>Hi, I'm Ada</h1>
            <p>tekst</p>
            <button className='border-2 p-2 rounded-lg'>Contact me</button>
        </div>
        <Image src={bilde} alt='profil bilde' className='w-[400px]'/>
    </div>
}

export default Hero