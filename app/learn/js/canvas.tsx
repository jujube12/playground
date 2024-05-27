'use client'
import { useEffect, useRef } from 'react'
import style from './js.module.css'
export default function UseCanvas() {
    const canvasRef = useRef(null)
    useEffect(()=>{
        let context
        if (canvasRef.current) {
            let canvas:HTMLCanvasElement = canvasRef.current
            context = canvas.getContext('2d')
        }
    
        if(context) {
            context.beginPath();
            context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            context.moveTo(110, 75);
            context.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
            context.moveTo(65, 65);
            context.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
            context.moveTo(95, 65);
            context.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
            context.stroke();

            context.fillText("Hello world", 10, 50);
        }
    })

    return (
        <div className={style.canvas_wrapper}>
            <div>캔버스 사용해보기</div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}