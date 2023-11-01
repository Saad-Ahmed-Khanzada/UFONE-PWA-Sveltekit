<script lang="ts">
  import { ayatList, hadithList, duaList } from "../../stores/store";

  // import type { Actions } from "@sveltejs/kit";
  import Slider from "../../components/Slider/page.svelte";
  import PetrolWidget from "../../components/petrolwidget/page.svelte";
  import PrayerWidget from "../../components/prayerwidget/page.svelte";
  // import AyatOfDayCard from "../../components/ayatOfDayCard/page.svelte";
  import ContentOfTheDayCard from "../../components/contentOfTheDayCard/page.svelte";
  import Dashboard from "../../components/dashboard/page.svelte";
  import { get } from "svelte/store"; // Import the Get object from Svelte store module
  import Loading from "../../components/loading/page.svelte";

  let contentDayToGet = new Date().getDate() - 1;

  let ayatProp: any = {
    contentNameEnglish: "Ayat",
    contentNameUrdu: "آیت",
    English: $ayatList[contentDayToGet].English,
    Urdu: $ayatList[contentDayToGet].Urdu,
  };

  let hadithProp: any = {
    contentNameEnglish: "Hadith",
    contentNameUrdu: "حدیث",
    English: $hadithList[contentDayToGet].English,
    Urdu: $hadithList[contentDayToGet].Urdu,
  };
  let DuaProp: any = {
    contentNameEnglish: "Dua",
    contentNameUrdu: "دعا",
    English: $duaList[contentDayToGet].English,
    Urdu: $duaList[contentDayToGet].Urdu,
  };
</script>

<Loading>
  <div>
    <div class="bg-white text-center">
      <h1
        class="text-4xl pl-5 pt-2 font-bold text-secondary leading-loose font-urdu"
      >
        !السلام عليكم
      </h1>
      <Dashboard />
      <br />
      <PrayerWidget />
      <br />
      <!-- <PetrolWidget /> -->
      <br />
      <Slider />
      <br />

      <a href="ayat">
        <ContentOfTheDayCard contentProp={ayatProp} />
      </a>

      <br />
      <ContentOfTheDayCard contentProp={hadithProp} />
      <br />

      <ContentOfTheDayCard contentProp={DuaProp} />
    </div>
  </div>
</Loading>
