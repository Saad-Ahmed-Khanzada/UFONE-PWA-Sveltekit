<script lang="ts">
  let count: number = 0;

  function incre(): void {
    count++;
  }

  function reset(): void {
    count = 0;
  }

  function goBack() {
    history.back();
  }

  import { isAuthorised } from "../../stores/store";
  import TopNavBar from "../../components/topNavBar/page.svelte";
</script>

<TopNavBar />

<!-- <Navbar /> -->

<br />

<div class="main">
  <div class="twarp">
    <!-- <a href="" on:click={goBack}>
      <img src="arrow.png" alt="Back" class="image-style w-10 h-10 p-1 mr-2" />
    </a> -->
    <div class="display">
      <span class="tnum text-secondary">{count}</span>
    </div>

    <div class="btnwrap">
      <button
        class="tbtn"
        on:click={incre}
        style="background: rgba(243, 128, 32, 1)">Count</button
      >
      <button class="rbtn" on:click={reset} style="background-color:#99B83B"
        >Reset</button
      >
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: roboto;
    src: url(font/Roboto-Medium.ttf);
  }

  .main {
    text-align: center;
  }

  .tnum {
    display: inline-block;
    border: 5px solid;
    padding: 110px 126px 110px 126px;
    border-radius: 63%;
    font-size: 60px;
  }

  .btnwrap {
    margin-top: 20px;
  }

  .tbtn {
    padding: 15px 50px 15px 50px;
    border-radius: 30px;
    border: none;
    background-color: #0058ff;
    color: #fff;
    font-size: 22px;
    margin: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
  }

  .rbtn {
    padding: 15px 50px 15px 50px;
    border-radius: 30px;
    border: none;
    background-color: #ee1a1a;
    color: #fff;
    font-size: 22px;
    margin: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.19);
  }
</style>
