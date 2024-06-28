import Search from "./component/search/page";
import style from "./lol.module.css";

export default function LOL() {
    return (
        <div className={style.lol_container}>
            <div className={style.lol_search_title}>
                <div>Summoner</div>
                <div>Analysis</div>
            </div>
            <Search></Search>
        </div>
    );
}
