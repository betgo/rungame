import React, { useState } from 'react'
import HealthBar from '../../components/HealthBar'

export default function Main() {
    const [mp, setMp] = useState(100);
    const [hp, setHp] = useState(100)
   function myclick(){
       if(hp>0){
            setMp(mp-5);
            setHp(hp-10)
       }
      
    }
    return (
        <div>
            <button onClick={myclick}>点我</button>
            <HealthBar mp={mp} hp={hp}/>
        </div>
    )
}
