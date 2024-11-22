import { get } from "svelte/store";
import {
  currentSurah,
  type TQuranStatus,
  currentAyat,
  currentLangs,
  fullSurah,
} from "../../stores/quran";

export const load = async ({ fetch }: { fetch: any }) => {
  async function fetchData() {
    const { surah, ayat } = get(currentAyat);
    const surahObj = get(currentSurah);
    // console.log("--------------currentAyat", currentAyat);
    // console.log("--------------surahNo", surah);
    // console.log("--------------surahObj", surahObj);
    // const surahNo = get(currentAyat);
    // const startAyat = get(currentAyat);
    const langs = get(currentLangs).join(",");
    const limit = surahObj.ayats - 1;

    // appLanguage.set("UR");
    const url = `https://ap-1.ixon.cc/api/v3/quran?surah=${surah}&ayat=${ayat}&limit=${limit}&lang=${langs}`;
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    const ayats = data.data;

    //  console.log(ayats);

    // Group ayats by ayat number
    const outArray:any = [];
    for (let i = ayat; i <= limit; i++) {
      if (ayats[i]['lang'] == 'UR')
      {
        // if (ayats[i]['qtext'].match("\\r\\n"))
        // {

        //   console.log(ayats[i]['qtext'])
        // }
        ayats[i]['qtext'] = ayats[i]['qtext'].replace("\\r\\n", "-")
        // ayats[i]['qtext'] = ayats[i]['qtext'].split("\\r\\n")[1]
      }
      const groupedAyat = ayats.filter((j: any) => j.ayat == i);
   
      outArray.push(groupedAyat)
   

    }


    fullSurah.set(outArray);


    return outArray;
      
  
  }
  return {
    ayats: fetchData(),
  };
};
