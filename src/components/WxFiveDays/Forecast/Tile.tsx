import React from 'react'
import Wind from './Icons/Wind'
import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Pressure from './Icons/Pressure'
import Pop from './Icons/Pop'
import Visibility from './Icons/Visibility'


type Props = {
icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
title: string
info: string | JSX.Element
description: string
}


const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop,
}

const Tile = ({icon, title, info, description}: Props) => {
    
    const Icon = icons[icon]
    
    return (
        <article>
            <div>
         <Icon/> <h4>{title}</h4>
         </div>
         <h3>{info}</h3>
         <p>{description}</p>
        </article>
    )
}

export default Tile