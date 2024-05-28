'use client'
import { useEffect, useRef, useState } from "react"
import style from '../function.module.css'

export default function MakeTitleImg() {
    const [text, setText] = useState('')
    const canvasRef = useRef(null)
    const dpr = window.devicePixelRatio
    let inputText = ''
    useEffect(()=>{
        if(canvasRef.current){
            let canvas:HTMLCanvasElement = canvasRef.current
            let context = canvas.getContext('2d')
            canvas.style.width = `500px`;
            canvas.style.height = `300px`;
            canvas.width = 500 * dpr
            canvas.height = 300 * dpr
            if (context){
                context.clearRect(0,0, canvas.width, canvas.height)
                context.textAlign ='center'
                context?.fillText(text, canvas.width/2, canvas.height/2)   
                context.scale(dpr,dpr)
            }
        }
    })

    return (
        <div className={style.makeTitleImg_wrapper}>
            <div className={style.makeTitleImg_title}>썸네일 만들기</div>
            <div className={style.makeTitleImg_input}>
                <input onChange={(e)=>{inputText = e.target.value}}></input>
                <button onClick={()=>{setText(inputText)}}>입력</button>
            </div>
            <div className={style.makeTitleImg_canvas}>
                <canvas ref={canvasRef} style={{backgroundColor:'white'}}></canvas>
            </div>
            <div className={style.makeTitleImg_btn}>
                <div className={style.makeTitleImg_changeBtn}>
                    <div>font size</div>
                    <div>+</div>
                    <div>-</div>
                </div>
                <div className={style.makeTitleImg_changeBtn}>
                    <div>font position</div>
                    <div>+</div>
                    <div>-</div>
                </div>
                <div>copy</div>
            </div>
        </div>
    )
}