'use client'
import { useRouter } from "next/navigation"
import style from './page.module.css'

export default function RoutingBox() {
    const router = useRouter()
    return (
        <div className={style.routingBox_wrapper}>
            <div onClick={() => { router.push('/function/makeTitleImg') }}>make title image</div>
            <div onClick={() => { router.push('/dev') }}>color palette</div>
            <div onClick={() => { router.push('/learn') }}>learning language</div>
        </div>
    )
}