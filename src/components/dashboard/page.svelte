<script lang="ts">
  import { HIJRI_MONTHS_LIST } from "../../assets/data/constants";
  import { currentCityDailyPrayerTime } from "../../stores/prayerTime";
  // import { currentCity } from "../../stores/store";
  import { isUrdu } from "../../stores/store";
  import { getNextSalah } from "../../helpers/prayerDataFetchers";

  let currentDateTime = new Date();

  let hours: any;
  let minutes: any;
  let seconds: any;

  let nextPrayer: any = {};
  let showNextTime: any = false;
  let value = parseInt(localStorage.getItem("hijri_date_hd") || "0");

  function increment() {
    value++;
    saveValue();
  }

  function decrement() {
    value--;
    saveValue();
  }

  function saveValue() {
    // Save the updated value to localStorage
    localStorage.setItem("hijri_date_hd", value.toString());
  }

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
    class=" stats w-screen bg-no-repeat bg-cover dark:text-red-600"
    style="background: rgba(243, 128, 32, 1)"
  >
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
                {hours}h {minutes}
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
            <button
              class=" btn-sm btn-circle text-xl font-bold"
              style="background-color:#99B83B;"
              on:click={decrement}>-</button
            >
            <span>{$currentCityDailyPrayerTime.hijri_date.hd + value}</span>
            <button
              class=" btn-sm btn-circle text-xl font-bold"
              style="background-color:#99B83B;"
              on:click={increment}>+</button
            >
          </span>
          {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
          {$currentCityDailyPrayerTime.hijri_date.hy})
        </div>
      </div>
    {:else}
      <div class="stat pl-10 text-left">
        {#if showNextTime}
          <div>
            <h3>
              <span class="text-xl font-semibold text-white">
                Next Namaz : <br />{nextPrayer.prayer} in
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
        <div class="stat-title text-white">
          <span>
            ({$currentCityDailyPrayerTime.hijri_date.hd}
          </span>
          {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
          {$currentCityDailyPrayerTime.hijri_date.hy})
        </div>
      </div>
    {/if}
  </div>
</div>
