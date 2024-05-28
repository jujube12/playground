"use client";
import { useEffect, useRef, useState } from "react";
import style from "../function.module.css";

function ControlCanvas() {}

export default function MakeTitleImg() {
    let inputText = "";
    let font = false;
    const canvasRef = useRef(null);
    const dpr = window.devicePixelRatio;
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let imgFontSize = 30;
    function writeText(input: string, size: number, font?: boolean) {
        if (context) {
            console.log(context);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = size + "px selif";
            font ? context.strokeText(input, 500 / 2, 300 / 2) : context.fillText(input, 500 / 2, 300 / 2);
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
            if (context) {
                context.scale(dpr, dpr);
            }
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
                            if (imgFontSize >= 200) {
                                alert("최대 폰트 사이즈입니다.");
                            } else {
                                imgFontSize += 5;
                                writeText(inputText, imgFontSize);
                            }
                        }}>
                        +
                    </div>
                    <div
                        onClick={() => {
                            if (imgFontSize <= 15) {
                                alert("최소 폰트 사이즈입니다.");
                            } else {
                                imgFontSize -= 5;
                                writeText(inputText, imgFontSize);
                            }
                        }}>
                        -
                    </div>
                </div>
                <div className={style.makeTitleImg_fontBtn}>
                    <div
                        onClick={() => {
                            if (font) {
                                font = false;
                                writeText(inputText, imgFontSize, font);
                            } else {
                                font = true;
                                writeText(inputText, imgFontSize, font);
                            }
                        }}>
                        font change
                    </div>
                </div>
                <div className={style.makeTitleImg_copyBtn}>copy</div>
            </div>
        </div>
    );
}
