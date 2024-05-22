'use client'
import { useRef } from "react"

export default function UseRef() {
    const inputRef = useRef<null | HTMLInputElement>(null)

    function btnClick() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    return (
        <div>
            <div>useRef 사용해보기</div>
            <input ref={inputRef}></input>
            <button onClick={btnClick}>click</button>
        </div>
    )
}