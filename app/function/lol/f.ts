export async function nowSeasonTimeStamp() {
    const d = require("/public/patchInfo.json");
    const seasonStartPatch = d.split[d.split.length - 1];
    const seasonStartPatchDate = d.patchDate[seasonStartPatch];
    const date = new Date(seasonStartPatchDate);
    const now = Date.now() / 1000;
    const seasonStartTime = date.getTime() / 1000;
    return [Math.floor(seasonStartTime), Math.floor(now)];
}
