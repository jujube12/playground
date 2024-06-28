"use client";
import style from "../../lol.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
    useEffect(() => {
        fetch("/api/lol/findSummoner", { method: "POST", body: JSON.stringify({ name: "name", email: "email" }) })
            .then((r) => r.json())
            .then((re) => console.log(re));
    }, []);
    const router = useRouter();
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
