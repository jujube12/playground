"use client";
import { useRouter } from "next/navigation";
import style from "../../lol.module.css";
export default function Search() {
    let router = useRouter();
    let userName = "";
    let userTag = "";
    return (
        <div className={style.lol_search_wrapper}>
            <input defaultValue="" placeholder="userName" onChange={(e) => (userName = e.target.value)}></input>
            <input defaultValue="" placeholder="#tag" onChange={(e) => (userTag = "#" + e.target.value)}></input>
            <button
                onClick={() => {
                    router.push(`/function/lol/summonerA/${userName}${userTag}`);
                }}>
                search
            </button>
        </div>
    );
}
