import { Icon } from "@iconify/react/dist/iconify.js"
import { FC } from "react"


interface CareerCardProps {
    title: string
    description: string 
    icon: string
    date?: string
}


const CareerCard:FC<CareerCardProps> =({title,description,icon})=>{
    return (<div className="flex items-center p-6 rounded-lg hover:bg-gradient-to-r from-slate-700 to-transparent">
        <Icon icon={icon} width={30} className="m-2 text-primary"/>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
    )
}
export default CareerCard