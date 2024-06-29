import BackBtn from "../../component/backBtn";
import style from "../../lol.module.css";

export default async function SummonerAnalysis(props: UrlParam) {
    let [gameName, gameTag] = props.params.id.split("-");
    gameName = gameName.replace(/%20/g, " ");
    let riotAccounturl = "riot/account/v1/accounts/by-riot-id";
    let riotSummonerUrl = "lol/summoner/v4/summoners/by-puuid";

    let gamePuuid = await fetch(`${process.env.NEXT_RIOT_API_URL_ASIA}/${riotAccounturl}/${gameName}/${gameTag}?${process.env.NEXT_RIOT_API_KEY}`)
        .then((r) => r.json())
        .then((resData: AccountByGameName) => {
            return resData.puuid;
        });
    let summonerInfo: SummonerByPuuid = await fetch(`${process.env.NEXT_RIOT_API_URL_KR}/${riotSummonerUrl}/${gamePuuid}?${process.env.NEXT_RIOT_API_KEY}`)
        .then((r) => r.json())
        .then((resData: SummonerByPuuid) => {
            return resData;
        });

    return (
        <div className={style.lol_summoner_container}>
            <BackBtn></BackBtn>
            <div className={style.lol_summoner_profile_wapper}>
                <div>
                    <div>icon</div>
                    <div>{summonerInfo?.profileIconId}</div>
                </div>
                <div>
                    {gameName} <span>{gameTag}</span>
                </div>
                <div>{summonerInfo?.summonerLevel}</div>
            </div>
            <div>hihi</div>
        </div>
    );
}
