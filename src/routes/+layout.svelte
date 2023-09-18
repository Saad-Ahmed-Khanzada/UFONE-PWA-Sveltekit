<script>
  import "../app.css";
  import TopNavBar from "../components/topNavBar/page.svelte";

  // import Navbar from "../components/Navbar/page.svelte";
  import { isAuthorised } from "../stores/store";
</script>

<!-- 
{#if $isAuthorised == true} -->
<!-- <TopNavBar /> -->
<!-- <Navbar /> -->
<!-- {/if} -->

<slot />
