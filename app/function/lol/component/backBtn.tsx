"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
export default function BackBtn() {
    let router = useRouter();
    return (
        <div
            onClick={() => {
                router.back();
            }}>
            <FontAwesomeIcon style={{ width: "2rem", height: "1.5rem" }} icon={faAngleLeft}></FontAwesomeIcon>
        </div>
    );
}
