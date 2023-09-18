<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import {
    subscribeUser,
    unsubscribeUser,
  } from "../../helpers/subscriptionHelpers";
  import { subStatus } from "../../stores/store";

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
</script>

<div class="navbar rounded-b-xl" style="background-color:#DDE59F">
  <div class="navbar-start">
    <!-- <a
        href="/home"
        class="btn btn-ghost text-white rounded-3xl"
        style="background-color:#E40077">Subscribe</a
      > -->
    {#if !($subStatus == "true")}
      <button
        class="btn btn-primary btn-sm text-white text-xs rounded xs p-0 py-1 px-2"
        on:click={() => (openSubscriptionModal = true)}
      >
        <!-- px-4 py-2 text-sm rounded-sm bg-blue-500 text-white -->
        <a href="/home">Subscribe</a>
      </button>
    {/if}
  </div>
  <div class="navbar-center grid grid-flow-row">
    <a href="/home_en" class="btn btn-ghost normal-case text-xl space-x-2"></a>
      <span style="color:#99B83B">UFONE</span><span style="color:#E40077"
        >ISLAMIC</span
      >
    </a>
    <!-- <div class="text-center">{phoneNumber}</div> -->
  </div>

  <div class="navbar-end">
    <!-- <label  class="btn btn-ghost btn-circle avatar"> -->
    <div class="w-10">
      <img
        typeof="img"
        alt="profile_img"
        class="rounded-full"
        src="https://i.ibb.co/YjbLvR0/logo-img.jpg"
      />
    </div>
  </div>
</div>
