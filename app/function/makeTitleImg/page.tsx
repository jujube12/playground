"use client";
import { useEffect, useRef, useState } from "react";
import style from "../function.module.css";

function ControlCanvas() {}

export default function MakeTitleImg() {
    let inputText = "";

    const canvasRef = useRef(null);
    const dpr = window.devicePixelRatio;
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let imgFontSize = 30;
    function writeText(input: string, size: number) {
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = size + "px selif";
            context?.fillText(input, canvas.width / 2, canvas.height / 2);
            // context.scale(dpr, dpr);
        }
    }
    useEffect(() => {
        //canvas 초기화
        if (canvasRef.current) {
            canvas = canvasRef.current;
            context = canvas.getContext("2d");
            canvas.style.width = `500px`;
            canvas.style.height = `300px`;
            canvas.width = 500 * dpr;
            canvas.height = 300 * dpr;
        }
    }, []);

    return (
        <div className={style.makeTitleImg_wrapper}>
            <div className={style.makeTitleImg_title}>썸네일 만들기</div>
            <div className={style.makeTitleImg_input}>
                <input
                    onChange={(e) => {
                        inputText = e.target.value;
                    }}></input>
                <button
                    onClick={() => {
                        writeText(inputText, imgFontSize);
                    }}>
                    입력
                </button>
            </div>
            <div className={style.makeTitleImg_canvas}>
                <canvas ref={canvasRef} style={{ backgroundColor: "white" }}></canvas>
            </div>
            <div className={style.makeTitleImg_btn}>
                <div className={style.makeTitleImg_changeBtn}>
                    <div>font size</div>
                    <div
                        onClick={() => {
                            imgFontSize += 5;
                            writeText(inputText, imgFontSize);
                        }}>
                        +
                    </div>
                    <div
                        onClick={() => {
                            imgFontSize -= 5;
                            writeText(inputText, imgFontSize);
                        }}>
                        -
                    </div>
                </div>
                <div>copy</div>
            </div>
        </div>
    );
}
