<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import {
    subscribeUser,
    unsubscribeUser,
  } from "../../helpers/subscriptionHelpers";
  import { subStatus } from "../../stores/store";
  import { currentCityDailyPrayerTime } from "../../stores/prayerTime";
  import { isHanafi, msisdn, isUrdu, isMale } from "../../stores/store";

  const toggleCalcMethod = (e: any) => {
    invalidateAll();
  };

  let openSubscriptionModal = false;
  let openUnsubscribeModal = false;

  const sendSubscriptionReq = async () => {
    console.log("sending subscription request");
    await subscribeUser();
    invalidateAll();
    goto("/home");
  };

  const sendUnsubReq = async () => {
    console.log("sending unsub request");
    await unsubscribeUser();
    invalidateAll();
    goto("/home");
  };

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
</script>

<div class="navbar rounded-b-xl" style="background: rgba(243, 128, 32, 1)">
  <div class="navbar-start">
    <button class="  btn-sm rounded text-white" on:click={() => goto("/home")}>
      <a href="/home">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <i class="fas fa-home" style="font-size: 2em;" />
      </a>
    </button>

    <!-- {#if !($subStatus == "true")}
      <button
        class="dark:text-red-700 btn btn-primary btn-sm text-white text-xs rounded xs p-0 py-1 px-2"
        on:click={() => (openSubscriptionModal = true)}
      >
       
        <a href="/home">Subscribe</a>
      </button>
    {/if} -->
  </div>
  <div class="navbar-center text-center">
    <a href="/home" class="btn btn-ghost normal-case text-2xl">
      <span style="color:#ffffff">UFONE&nbsp;</span><span
        style="color:#99B83B; -webkit-text-stroke: 0.5px #66FF00;">ISLAMIC</span
      >
    </a>
  </div>

  <div class="navbar-end">
    <!-- <label  class="btn btn-ghost btn-circle avatar"> -->
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          {#if $isMale}
            <img
              typeof="img"
              alt="profile_img"
              class="rounded-full"
              src="img/profile/Male_avatar.png"
            />
          {:else}
            <img
              typeof="img"
              alt="profile_img"
              class="rounded-full"
              src="img/profile/female_avatar.png"
            />
          {/if}
        </div>
      </button>
      <button
        tabindex="0"
        class="mt-3 z-[1] p-2 dropdown-content bg-base-100 rounded-box w-52"
      >
        <ul>
          <li class="">
            {#if $msisdn != null}
              <span>{$msisdn}</span>
            {/if}
          </li>
          <li>
            <button
              ><label class="label">
                {#if $isUrdu}
                  <span
                    class="label-text font-urdu text-xl font-light"
                    dir="rtl">عورت</span
                  >
                {:else}
                  <span class="label-text">Female</span>
                {/if}
                <input
                  name="toggle_calcmethod"
                  type="checkbox"
                  class="toggle toggle-secondary"
                  bind:checked={$isMale}
                />
                {#if $isUrdu}
                  <span class="label-text font-urdu text-xl" dir="rtl">مرد</span
                  >
                {:else}
                  <span class="label-text">Male </span>
                {/if}
              </label></button
            >
          </li>
          <li>
            <button
              ><label class="label">
                <span class="label-text">English</span>
                <input
                  name="toggle_calcmethod"
                  type="checkbox"
                  class="toggle toggle-secondary"
                  bind:checked={$isUrdu}
                />
                <span
                  class="label-text leading-loose font-urdu text-xl"
                  dir="rtl">اردو</span
                >
              </label></button
            >
          </li>

          <!-- <li>
            <button on:click={toggleDarkMode}>
              <label class="label">
                <span class="label-text">Dark Mode</span>
                <input
                  name="toggle_darkmode"
                  type="checkbox"
                  class="toggle toggle-secondary"
                  bind:checked={$isDark}
                />
                <span class="label-text leading-loose">Light Mode</span>
              </label>
            </button>
          </li> -->

          <li>
            <button
              ><label class="label">
                <span class="label-text">Fiqh Ja'afria</span>
                <input
                  on:click={toggleCalcMethod}
                  name="toggle_calcmethod"
                  type="checkbox"
                  class="toggle toggle-secondary"
                  bind:checked={$isHanafi}
                />
                <span class="label-text">Fiqh Hanafi</span>
              </label></button
            >
          </li>
          <div class="text-right">
            <button
              class="btn btn-outline btn-error text-left"
              on:click={() => {
                window.location.reload();
              }}
            >
              Confirm
            </button>

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
            {#if $subStatus == "true"}
              <li>
                <button
                  class="btn btn-ghost text-primary"
                  on:click={() => (openUnsubscribeModal = true)}
                >
                  {#if $isUrdu}
                    <h1 class="font-urdu text-xl">ان سبسکرائب</h1>
                  {:else}
                    <span>Unsubscribe</span>
                  {/if}</button
                >
              </li>
            {/if}
          </div>
        </ul>
      </button>
    </div>
  </div>
</div>

<div class="modal" class:modal-open={openUnsubscribeModal}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">
      {#if $isUrdu}
        <span class="leading-loose text-xl p-2 font-urdu" dir="rtl"
          >کیا آپ واقعی ان سبسکرائب کرنا چاہتے ہیں؟</span
        >
      {:else}
        <span>Do you really want to unsubscribe?</span>
      {/if}
    </h3>
    <div class="modal-action">
      <button
        class="btn btn-outline btn-primary"
        on:click={() => {
          sendUnsubReq();
          openUnsubscribeModal = false;
        }}>Yes</button
      >

      <button
        class="btn btn-secondary text-white"
        on:click={() => (openUnsubscribeModal = false)}
      >
        No
      </button>
    </div>
  </div>
</div>

<div class="modal" class:modal-open={openSubscriptionModal}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">
      {#if $isUrdu}
        <span class="leading-loose text-xl p-2 font-urdu" dir="rtl"
          >آپ کو زونگ اسلامک سروس کا سبسکرائب کیا جا رہا ہے جس کے ساتھ آپ کو
          نماز الرٹ، روزانہ آیات اور احادیث موصول ہوں گی۔
        </span>

        <span>Rs. 3 + tax</span><span
          class="leading-loose text-2xl p-2 font-urdu"
          dir="rtl">اس سروس پر چارج کیا جائے گا</span
        >
      {:else}
        <p>
          You are being subscribed to Zong Islamic service with Prayer alerts,
          Ayat and Hadith of the Day. This service will be charged at Rs. 3 +
          tax
        </p>
      {/if}
    </h3>
    <div class="modal-action">
      <button
        class="btn btn-outline btn-primary"
        on:click={() => {
          sendSubscriptionReq();
          openSubscriptionModal = false;
        }}>Yes</button
      >

      <button
        class="btn btn-secondary text-white"
        on:click={() => (openSubscriptionModal = false)}
      >
        No
      </button>
    </div>
  </div>
</div>
