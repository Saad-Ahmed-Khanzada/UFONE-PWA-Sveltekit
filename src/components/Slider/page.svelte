<script lang="ts">
  import { isUrdu } from "../../stores/store";
</script>

{#if $isUrdu}
  <div class="justify-start border-t-2 rounded-xl mr-5">
    <h1 class="text-2xl pl-5 pt-2 text-right font-bold">
      <p class="leading-loose text-3xl font-urdu" dir="rtl">
        آپ کیا کرنا چاہیں گے؟
      </p>
    </h1>
  </div>
{:else}
  <div class="flex justify-start border-t-2 rounded-xl">
    <!-- <h1 class="text-xl pl-5 pt-2 font-bold">
      <span> What would you like to do?</span>
    </h1> -->
    <h1 class="text-2xl pl-5 pt-2 text-right font-bold">
      <p class="leading-loose text-xl" dir="ltr">What would you like to do?</p>
    </h1>
  </div>
{/if}

<div
  class="carousel carousel-center w-full p-1 bg-white rounded-box shadow-lg space-x-4 justify-center"
>
  <div class="grid grid-cols-1 carousel-item content-center justify-center">
    <a href="/quran">
      <!-- <div class="flex justify-center text-black t-5">
        {#if $isUrdu}<p class="leading-loose text-2xl p-2 font-urdu" dir="rtl">
            قرآن
          </p>
        {:else}
          <span> Quran </span>
        {/if}
      </div> -->
      <div>
        <img
          alt="/quran"
          src="img/slider_cards/quran2.png"
          class="rounded-box inline-block align-bottom hover:shadow-gray-400 hover:shadow-2xl w-40 h-56"
        />
      </div>
    </a>
  </div>

  <div class="grid grid-cols-1 carousel-item content-center">
    <a href="/tasbeeh">
      <!-- <div class="flex justify-center text-black">
        {#if $isUrdu}<p class="leading-loose text-2xl p-2 font-urdu" dir="rtl">
            تسبیح
          </p>{:else}
          <span> Tasbeeh</span>
        {/if}
      </div> -->
      <div>
        <img
          alt="/tasbeeh"
          src="img/slider_cards/tasbeeh2.png"
          class="rounded-box inline-block align-bottom hover:shadow-gray-400 hover:shadow-2xl w-40 h-56"
        />
      </div>
    </a>
  </div>
</div>
