<script lang="ts">
  import type { PageData } from "../../routes/$types";
  import { isUrdu } from "../../stores/store";

  export let contentProp: PageData;

  let color = "#f1f5cd";

  switch (contentProp.contentNameEnglish) {
    case "Ayat":
      color = "rgba(243, 128, 32, 1)";
      break;
    case "Hadith":
      color = "rgba(158, 186, 132, 1)";
      break;
    case "Dua":
      color = "rgba(243, 128, 32, 1)";
      break;
    default:
      color = "#ffb5c2";
  }
</script>

<!-- <div class="card w-full">
  <div class="card-body">
    <h2 class="card-title">Hadith of the Day</h2>

    <h3>{props.topic}</h3>
    <p>{props.hadith}</p>
  </div>
</div> -->

<div class="px-5 flex justify-center flex-row">
  <div class="card w-screen shadow-xl" style="background-color:{color};">
    <div class="card-body">
      {#if $isUrdu}
        <h2 class="text-4xl text-right font-bold font-urdu">
          <p dir="rtl">آج کی {contentProp.contentNameUrdu}</p>
        </h2>
      {:else}
        <h2 class="text-3xl font-bold text-left">
          <p>{contentProp.contentNameEnglish} Of The Day:</p>
        </h2>
      {/if}

      <!-- <h3>{contentProp.topic}</h3> -->
      <p class="text-white text-right">
        {#if $isUrdu}
          <p class="font-urdu text-2xl" dir="rtl">
            {contentProp.Urdu}
          </p>
        {:else}
          <p class=" text-left" dir="ltr">
            {contentProp.English}
          </p>{/if}
      </p>
    </div>
  </div>
</div>
