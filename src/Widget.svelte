<script>
  import { tw } from "twind";
  import { app } from "./store.js";

  export let address = "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI";
</script>

{#await $app.stamps(address) then results}
  <div class={tw("flex flex-col items-center")}>
    {#each results as result}
      <div>{result.asset}</div>
    {/each}
  </div>
{/await}
