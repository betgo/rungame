import React from 'react'
import './HealthBar.less'
interface power{
    hp:number,
    mp:number
}
const TotalHP =100;
const TotalMP = 100;
function HealthBar(props:power) {

 
    
    let currentHP = props.hp
    let currentMP = props.mp
    console.log(currentHP);
    console.log(currentMP);
    let HPStyle = {transform: `translateY(${(TotalHP-currentHP)/TotalHP*100}%)`};
    let MPStyle = {transform: `translateY(${(TotalMP-currentMP)/TotalMP*100}%)`};
    let MPStyle2 = {transform: `translateY(${(TotalMP-currentMP)*2/TotalHP*100}%)`};
    let HPStyle2 = {transform: `translateY(${(TotalHP/2-currentHP)*2/TotalMP*100}%)`};
    return (
        <div>
            <div className="container">
          

                <div className="left" style={HPStyle}></div>
                <div className="right" style={MPStyle}></div>
                <div className="topRadius">
                    <div className="bar" style={MPStyle2}></div>
                </div>
                <div className="bottomRadius">
                    <div className="bar" style={currentHP<TotalHP/2 ?HPStyle2:{}}></div>
                </div>
            </div>
        </div>

    )
}

export default HealthBar
