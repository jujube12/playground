"use client";
import style from "../../lol.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
    const router = useRouter();
    let [gameName, setGameName] = useState("");
    let [gameTag, setGameTag] = useState("");
    let [checkSummoner, setCheckSummoner] = useState(false);
    let [isExist, setIsExist] = useState(false);

    useEffect(() => {
        if (checkSummoner) {
            fetch("/api/lol/findSummoner", { method: "POST", body: JSON.stringify({ gameName: gameName, gameTag: gameTag }) })
                .then((r) => r.json())
                .then((resData) => {
                    resData ? router.push(`/function/lol/summonerA/${gameName}${[gameTag, setGameTag]}`) : setIsExist(false);
                    setCheckSummoner(false);
                });
        }
    }, [checkSummoner]);

    return (
        <div className={style.lol_search_wrapper}>
            <input defaultValue="" placeholder="gameName" onChange={(e) => setGameName(e.target.value)}></input>
            <input defaultValue="" placeholder="#tag" onChange={(e) => setGameTag(e.target.value)}></input>
            <button
                onClick={() => {
                    setCheckSummoner(true);
                }}>
                search
            </button>
        </div>
    );
}
