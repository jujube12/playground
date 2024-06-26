"use client";
import { useEffect, useRef } from "react";
import style from "../function.module.css";

export default function MakeTitleImg() {
    let inputText = "";
    let font = false;
    let fontColor = "#000000";
    let backgroundColor = "#ffffff";
    let fontWeight = "500";
    const canvasRef = useRef(null);
    const inputColorRef = useRef(null);
    const inputBackRef = useRef(null);
    const dpr = window.devicePixelRatio;

    let canvasWidth: number;
    if (innerWidth < 768) {
        canvasWidth = innerWidth;
    } else {
        canvasWidth = 500;
    }
    let canvasheight = 300;

    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let imgFontSize = 30;
    function writeText(input: string, size: number, font?: boolean) {
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = fontWeight + " " + size + "px selif";
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = fontColor;
            font ? context.strokeText(input, canvasWidth / 2, canvasheight / 2) : context.fillText(input, canvasWidth / 2, canvasheight / 2);
        }
    }
    useEffect(() => {
        //canvas 초기화
        if (canvasRef.current) {
            canvas = canvasRef.current;
            context = canvas.getContext("2d");
            canvas.style.width = canvasWidth + `px`;
            canvas.style.height = canvasheight + `px`;
            canvas.width = canvasWidth * dpr;
            canvas.height = canvasheight * dpr;
            if (context) {
                context.scale(dpr, dpr);
            }
        }
    }, []);

    return (
        <div className={style.makeTitleImg_wrapper}>
            <div className={style.makeTitleImg_title}>make text image</div>
            <div className={style.makeTitleImg_input}>
                <input
                    onChange={(e) => {
                        inputText = e.target.value;
                    }}></input>
                <button
                    onClick={() => {
                        imgFontSize = 30;
                        fontColor = "#000000";
                        backgroundColor = "#ffffff";
                        if (inputColorRef.current) {
                            let a: HTMLInputElement = inputColorRef.current;
                            a.value = "#000000";
                        }
                        if (inputBackRef.current) {
                            let a: HTMLInputElement = inputBackRef.current;
                            a.value = "#ffffff";
                        }
                        writeText(inputText, imgFontSize);
                    }}>
                    enter
                </button>
            </div>
            {/* canvas */}
            <div className={style.makeTitleImg_canvas}>
                <canvas ref={canvasRef} style={{ backgroundColor: backgroundColor }}></canvas>
            </div>
            {/* control button */}
            <div className={style.makeTitleImg_controlBtn}>
                <div className={style.makeTitleImg_changeFontColorBtn}>
                    <div>font color</div>
                    <input
                        ref={inputColorRef}
                        type="color"
                        defaultValue="#000000"
                        onChange={(e) => {
                            fontColor = e.target.value;
                            writeText(inputText, imgFontSize);
                        }}></input>
                </div>
                <div className={style.makeTitleImg_changeBackColorBtn}>
                    <div>background color</div>
                    <input
                        ref={inputBackRef}
                        type="color"
                        defaultValue="#ffffff"
                        onChange={(e) => {
                            backgroundColor = e.target.value;
                            writeText(inputText, imgFontSize);
                        }}></input>
                </div>
                <div className={style.makeTitleImg_changeFontSizeBtn}>
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
                <div className={style.makeTitleImg_changefontBtn}>
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
            </div>
            <div className={style.makeTitleImg_copyBtn}>copy</div>
        </div>
    );
}
