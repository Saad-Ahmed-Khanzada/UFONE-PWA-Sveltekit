<script lang="ts">
  import { invalidate, invalidateAll } from "$app/navigation";
  import { currentCity, citiesList, isUrdu } from "../../stores/store";

  import {
    prayerNotifications,
    currentCityDailyPrayerTime,
  } from "../../stores/prayerTime";
  import { fetchCityPrayerTime } from "../../helpers/prayerDataFetchers";

  const changeSelectedCity: any = (selectCity: any) => {
    currentCity.set({
      name: selectCity.name,
      location: selectCity.location,
    });

    fetchCityPrayerTime(selectCity);
  };
</script>

<h1
  class="text-xl pl-5 pt-1 font-bold"
  style="color:rgba(243, 128, 32, 1)
"
>
  {$currentCity.name}
  <div class="dropdown">
    <button class="btn btn-ghost btn-circle text-primary border-secondary">
      <i class="fa fa-map-marker text-xs text-orange-500" aria-hidden="true" />
    </button>

    <div
      class="mt-3 z-[1] p-2 dropdown-content overflow-y-auto h-56 w-32 bg-white"
    >
      <div>
        <div class="w-full py-2 text-sm font-medium flex items-center">
          <div class="dropdown dropdown-end">
            <ul>
              {#each $citiesList as cityItem}
                <div class="w-full py-2 text-sm font-medium flex items-center">
                  <button on:click={changeSelectedCity(cityItem)}>
                    <a href={null}>{cityItem.name}</a>
                  </button>
                </div>
              {/each}
            </ul>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</h1>
<br />

{#if $isUrdu}
  <div class="flex flex-row-reverse w-full divide-x px-5 text-base">
    <!-- grid grid-cols-5 divide-x px-5 -->

    <!--Fajr timing-->
    <div />
    <div
      class="grid grid-rows-2 h-28 rounded-r-2xl w-full"
      style="background: rgba(243, 128, 32, 1);
    
    "
    >
      <div>
        <p class=" py-3 text-center text-white">
          <span class="font-bold font-urdu text-2xl">فجر</span> <br />
          {$currentCityDailyPrayerTime.fajr}
        </p>
      </div>
      <div class="justify-self-center py-3">
        <img
          src="https://i.ibb.co/xqNpC2n/Prayer bar_fajr.png"
          class="w-10 h-10"
          alt="fajar_icon"
        />
      </div>
    </div>

    <!--Zuhr timing-->
    <div
      class="grid grid-rows-2 h-28 w-full"
      style="background: rgba(255, 153, 67, 1);

    "
    >
      <div>
        <p class=" py-3 text-center text-white">
          <span class="font-bold font-urdu text-2xl">ظہر</span> <br />
          {$currentCityDailyPrayerTime.dhuhr}
        </p>
      </div>
      <div class="justify-self-center py-4">
        <img
          src="https://i.ibb.co/SQyYcVS/Prayer bar_zuhr.png"
          class="w-12 h-10"
          alt="zohar_icon"
        />
      </div>
    </div>
    <!--Asar timing-->
    <div
      class="grid grid-rows-2 h-28 w-full"
      style="background: rgba(236, 142, 65, 1);

    "
    >
      <div>
        <p class="py-3 text-center text-white">
          <span class="font-bold font-urdu text-2xl">عصر</span> <br />
          {$currentCityDailyPrayerTime.asr}
        </p>
      </div>
      <div class="justify-self-center py-4">
        <img
          src="https://i.ibb.co/SQyYcVS/Prayer bar_asr.png"
          class="w-12 h-10"
          alt="asr_icon"
        />
      </div>
    </div>
    <!--Maghrib timing-->
    <div
      class="grid grid-rows-2 h-28 w-full"
      style="background: rgba(229, 110, 12, 1);
      "
    >
      <div>
        <p class=" py-3 text-center text-white">
          <span class="font-bold font-urdu text-2xl">مغرب</span> <br />
          {$currentCityDailyPrayerTime.maghrib}
        </p>
      </div>
      <div class="justify-self-center py-6">
        <img
          src="img/prayer_widget/Prayer bar_maghribb.png"
          class="w-12 h-8"
          alt="maghrib_icon"
        />
      </div>
    </div>

    <!--Isha timing-->
    <div
      class="grid grid-rows-2 rounded-l-2xl h-28 w-full"
      style="background: rgba(211, 96, 0, 1);
      "
    >
      <div>
        <p class=" text-sm py-2 text-center text-white">
          <span class="font-bold font-urdu text-2xl">عشاء</span> <br />
          {$currentCityDailyPrayerTime.isha}
        </p>
      </div>
      <div class="justify-self-center py-2">
        <img
          src="https://i.ibb.co/1nHVMCh/Prayer bar_isha.png"
          class="w-10 h-10"
          alt="isha_icon"
        />
      </div>
    </div>
  </div>
{:else}
  <div class="grid grid-cols-5 divide-x px-5 font-roboto">
    <!--Fajr timing-->
    <div
      class="grid grid-rows-2 rounded-l-2xl h-28"
      style="background: rgba(243, 128, 32, 1);
    "
    >
      <div>
        <p class="text-sm py-3 text-center text-white">
          <span class="font-bold">Fajr</span> <br />
          {$currentCityDailyPrayerTime.fajr}
        </p>
      </div>
      <div class="justify-self-center py-3">
        <img
          src="https://i.ibb.co/xqNpC2n/Prayer bar_fajr.png"
          class="w-10 h-10"
          alt="fajar_icon"
        />
      </div>
    </div>

    <!--Zuhr timing-->
    <div
      class="grid grid-rows-2 h-28"
      style="background: rgba(255, 153, 67, 1);
    "
    >
      <div>
        <p class="text-sm py-3 text-center text-white">
          <span class="font-bold">Duhr</span> <br />
          {$currentCityDailyPrayerTime.dhuhr}
        </p>
      </div>
      <div class="justify-self-center py-4">
        <img
          src="https://i.ibb.co/SQyYcVS/Prayer bar_zuhr.png"
          class="w-12 h-10"
          alt="zohar_icon"
        />
      </div>
    </div>
    <!--Asar timing-->
    <div
      class="grid grid-rows-2 h-28"
      style="background: rgba(236, 142, 65, 1)"
    >
      <div>
        <p class="text-sm py-3 text-center text-white">
          <span class="font-bold">Asar</span> <br />
          {$currentCityDailyPrayerTime.asr}
        </p>
      </div>
      <div class="justify-self-center py-4">
        <img
          src="https://i.ibb.co/SQyYcVS/Prayer bar_asr.png"
          class="w-12 h-10"
          alt="asr_icon"
        />
      </div>
    </div>
    <!--Maghrib timing-->
    <div
      class="grid grid-rows-2 h-28"
      style="background: rgba(229, 110, 12, 1);
      "
    >
      <div>
        <p class="text-sm py-3 text-center text-white">
          <span class="font-bold">Maghrib</span> <br />
          {$currentCityDailyPrayerTime.maghrib}
        </p>
      </div>
      <div class="justify-self-center py-6">
        <img
          src="img/prayer_widget/Prayer bar_maghribb.png"
          class="w-12 h-8"
          alt="maghrib_icon"
        />
      </div>
    </div>

    <!--Isha timing-->
    <div
      class="grid grid-rows-2 h-28 rounded-r-2xl"
      style="background: rgba(211, 96, 0, 1);
      "
    >
      <div>
        <p class="text-sm py-3 text-center text-white">
          <span class="font-bold">Isha</span> <br />
          {$currentCityDailyPrayerTime.isha}
        </p>
      </div>
      <div class="justify-self-center py-2">
        <img
          src="https://i.ibb.co/1nHVMCh/Prayer bar_isha.png"
          class="w-10 h-10"
          alt="isha_icon"
        />
      </div>
    </div>
  </div>
{/if}
