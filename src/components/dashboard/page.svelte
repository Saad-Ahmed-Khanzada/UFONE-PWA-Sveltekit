<script lang="ts">
  import { HIJRI_MONTHS_LIST } from "../../assets/data/constants";
  import { currentCityDailyPrayerTime } from "../../stores/prayerTime";
  // import { currentCity } from "../../stores/store";
  import { isUrdu } from "../../stores/store";
  import { getNextSalah } from "../../helpers/prayerDataFetchers";
  import { adjustedHijriDate } from "../../stores/hijriDate";

  let currentDateTime = new Date();

  let hours: any;
  let minutes: any;
  let seconds: any;

  let nextPrayer: any = {};
  let showNextTime: any = false;

  // console.log("currentCityDailyPrayerTime", $currentCityDailyPrayerTime);
  // console.log(
  //   "currentCityDailyPrayerTime.hijri_date.hd",
  //   typeof $currentCityDailyPrayerTime.hijri_date.hd
  // );
  // let offsetValue = localStorage.getItem("setValue");

  // let storedValue: Number;
  // if (Number(offsetValue) === 0) {
  // storedValue = $currentCityDailyPrayerTime.hijri_date.hd;
  // } else {
  // console.log("======offsetValue", offsetValue);
  // storedValue = $currentCityDailyPrayerTime.hijri_date.hd + Number(offsetValue);
  // }

  // console.log("offsetValue:", offsetValue);
  // console.log("storedValue:", storedValue);
  // console.log("-----------------storedValue", offsetValue);
  // let dateToShow =
  //   Number($currentCityDailyPrayerTime.hijri_date.hd) + Number(offsetValue);

  // function saveValue() {
  //   localStorage.setItem("DTS", dateToShow.toString());
  // }
  // value = Number($currentCityDailyPrayerTime.hijri_date.hd) + storedValue;
  // $currentCityDailyPrayerTime.hijri_date.hd = value;

  // console.log(
  //   "-----------------$currentCityDailyPrayerTime.hijri_date.hd",
  //   typeof $currentCityDailyPrayerTime.hijri_date.hd
  // );
  // console.log("-----------------storedValue33333", typeof offsetValue);
  // value = $currentCityDailyPrayerTime.hijri_date.hd + Number(storedValue);

  // console.log("----------------", localStorage.getItem);
  function toHoursAndMinutes(totalSeconds: any) {
    totalSeconds = parseFloat(totalSeconds);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    // console.log("totalSeconds:", totalSeconds);
    // console.log("totalMinutes:", totalMinutes);
    // console.log("hours:", hours);
    // console.log("minutes:", minutes);
    // console.log("seconds:", seconds);
    return { h: hours, m: minutes, s: seconds };
  }

  export const timeTracker = setInterval(() => {
    currentDateTime = new Date();
    nextPrayer = getNextSalah(currentDateTime);
    9;
    // console.log("----------nextPrayer", nextPrayer);

    if (nextPrayer != undefined) {
      // console.log("nextPrayer.timeDiff:", nextPrayer.timeDiff);

      let timeToNext = toHoursAndMinutes((nextPrayer.timeDiff / 1000) * -1);
      showNextTime = true;

      hours = timeToNext.h;
      minutes = timeToNext.m;
      seconds = timeToNext.s;
    } else {
      showNextTime = false;
    }
  }, 1000);
</script>

<div class="flex justify-center px-5 pt-4 pb-50">
  <div
    class="bg-[url(img/dashboard/dashboard-bg.png)] stats w-screen bg-no-repeat bg-cover dark:text-red-600"
  >
    <!-- style="background:rgba(243, 128, 32, 1) ;" -->
    {#if $isUrdu}
      <div class="stat" />
      <div class="stat pl-10 text-right dark:text-red-600">
        {#if showNextTime}
          <div>
            <h3>
              <span class="text-xl font-semibold text-white dark:text-red-500">
                <h1 class="font-urdu text-2xl">اگلی نماز</h1>

                {nextPrayer.prayer}
                <br />
                {hours}h {minutes}m
                {seconds}s
              </span>
            </h3>
            <br />
          </div>
        {/if}

        <div class="stat-title text-white">
          {$currentCityDailyPrayerTime.date_str}
        </div>
        <div class="stat-title text-white">
          <span>
            <!-- 5 here -->
            <!-- <button
              class=" btn-sm btn-circle text-xl font-bold"
              style="background-color:#99B83B;"
              on:click={decrement}>-</button
            > -->
            <span>{$adjustedHijriDate}</span>
          </span>
          {HIJRI_MONTHS_LIST[$currentCityDailyPrayerTime.hijri_date.hm - 1]}
          {$currentCityDailyPrayerTime.hijri_date.hy}
        </div>
      </div>
    {:else}
      <div class="stat pl-10 text-left">
        {#if showNextTime}
          <div>
            <h3>
              <span class="text-xl font-semibold text-white font-roboto">
                Next Namaz : <br />{nextPrayer.prayer}
                <br />
                {hours}h {minutes}m {seconds}s
              </span>
            </h3>
            <br />
          </div>
        {/if}
        <div class="stat-title text-white">
          {$currentCityDailyPrayerTime.date_str}
        </div>
        <div class="stat-title text-white font-roboto">
          <span>
            <span>{$adjustedHijriDate}</span>
            {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
            {$currentCityDailyPrayerTime.hijri_date.hy}
          </span>
        </div>
      </div>
    {/if}
  </div>
</div>
