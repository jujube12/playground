'use client'

import { useEffect, useRef, useState } from "react"
import style from '../function.module.css'

export default function MakeTitleImg() {
    const [text, setText] = useState('')
    const canvasRef = useRef(null)
    let inputText = ''
    useEffect(()=>{
        if(canvasRef.current){
            let canvas:HTMLCanvasElement = canvasRef.current
            let context = canvas.getContext('2d')
            if (context){
                context.clearRect(0,0, canvas.width, canvas.height)
                context.font = '48px selif'
                context.textAlign ='center'
                context?.fillText(text, canvas.width/2, canvas.height/2)   
            }
        }
    })

    return (
        <div className={style.makeTitleImg_wrapper}>
            <div className={style.MakeTitleImg_title}>썸네일 만들기</div>
            <div>
                <input onChange={(e)=>{inputText = e.target.value}}></input>
                <button onClick={()=>{setText(inputText)}}>입력</button>
            </div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}