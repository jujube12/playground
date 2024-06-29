"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import style from "../lol.module.css";
import { useRouter } from "next/navigation";
export default function BackBtn() {
    let router = useRouter();
    return (
        <div
            className={style.backBtn}
            onClick={() => {
                router.back();
            }}>
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
        </div>
    );
}
