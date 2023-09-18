<script lang="ts">
  import Fa from "svelte-fa";
  import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
  // import { QURAN_SURAH_LIST, type TSurah } from "../../assets/data/quran";
  // import type { TQuranStatus } from "../../stores/quran";
  import { currentAyat, currentSurah } from "../../stores/quran";
  import { invalidate, invalidateAll } from "$app/navigation";
  import BackButton from "../../components/BackButton/page.svelte";
  import { isAuthorised } from "../../stores/store";
  import TopNavBar from "../../components/topNavBar/page.svelte";

  // async function handleSurahClick(surah: TSurah) {
  //   // console.log("Surah selected:", surah);
  //   currentAyat.set({ surah: surah.no, ayat: 1 });
  //   currentSurah.set(surah);
  //   invalidate("/quran");
  //   invalidateAll();
  // }

  $: currentAyat;

  function goBack() {
    history.back();
  }
</script>

<!-- {#if $isAuthorised == true} -->
<TopNavBar />
<!-- <Navbar /> -->

<slot />
<!-- {/if} -->
<!-- <div class="pl-10 pt-5">
    <BackButton />
  </div>
  <div class="navbar rounded-box">
    <div class="flex-1 px-2 lg:flex-none"> -->
<!-- <a href="" on:click={goBack}>
      <img src="arrow.png" alt="Back" class="image-style w-10 h-10 p-1 mr-2" />
    </a> -->
<!-- <div class="normal-case text-xl text-secondary font-bold">Al Quran</div>
    </div>
    <div class="flex justify-end flex-1 px-2">
      <div class="flex items-stretch"> -->
<!-- <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn btn-outline btn-secondary text-secondary rounded-btn"
          >
            <span><Fa icon={faArrowDownShortWide} /></span>
            <span>
              {QURAN_SURAH_LIST[$currentAyat.surah - 1].name}
            </span></label
          >
          <ul
            tabindex="0"
            class="w-60 h-60 overflow-y-scroll p-2 dropdown-content shadow bg-base-100 rounded-box mt-4"
          > -->
<!-- {#each QURAN_SURAH_LIST as surah}
              <div class="w-full py-2 text-sm font-medium flex items-center">
                <li class="bg-base-100 text-justify">
                  <a on:click={() => handleSurahClick(surah)} href={null}
                    >{surah.no} - {surah.name}</a
                  >
                </li>
              </div>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <slot />
{/if} -->
