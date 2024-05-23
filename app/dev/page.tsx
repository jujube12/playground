import style from './dev.module.css'

export default function Dev() {
    return (
        <div className={style.dev_container}>
            <div>color palette</div>
            <div className={style.color_palette_wrapper}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}