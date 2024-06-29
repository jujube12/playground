type UrlParam = { params: { id: string }; searchParams: {} };
type AccountByGameName = {
    puuid: string;
    gameName: string;
    tagLine: string;
};
type SummonerByPuuid = {
    id: string;
    accountId: string;
    puuid: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
};
