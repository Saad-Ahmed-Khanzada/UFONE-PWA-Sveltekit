<script>
    let isLoading = true;
    import { isAuthorised } from "../../stores/store";
    import TopNavBar from "../../components/topNavBar/page.svelte";

    async function loadHomePage() {
        // loading time
        await new Promise((resolve) => setTimeout(resolve, 100));
        isLoading = false;
    }

    loadHomePage(); // Start loading your homepage content
</script>

{#if isLoading}
    <div class="fixed inset-0 flex items-center justify-center">
        <div class="loading loading-spinner loading-xs">
            <!-- <h1
                class="loading loading-spinner loading-xs text-blue-900 text-4xl"
            >
                loading
            </h1> -->
            <img
                src="img/loading/splashscreen2.png"
                class=""
                alt="maghrib_icon"
            />
            <!-- src="img/loading/splashscreen.png"
          class="w-12 h-8"
          alt="maghrib_icon"
        /> -->
        </div>
    </div>

    {#if $isAuthorised == true}
        <!-- <Navbar /> -->
    {/if}
{:else}
    <TopNavBar />
    <!-- Loaded content -->

    <slot />
{/if}
