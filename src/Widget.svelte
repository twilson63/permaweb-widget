<script>
  import { tw } from "twind";
  import { app } from "./store.js";

  export let address = "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI";
</script>

{#await $app.stamps(address) then stamps}
  <ul class={tw("relative divide-y divide-gray-200 border-b border-gray-200")}>
    {#each stamps as stamp}
      <li
        class={tw(
          "relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
        )}
      >
        <div class={tw("flex items-center justify-between space-x-4")}>
          <div class={tw("min-w-0 space-y-3")}>
            <div class={tw("flex-1 flex flex-col")}>
              <h2 class={tw("text-xl font-bold")}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://arweave.net/{stamp.id}">{stamp.title}</a
                >
              </h2>
              <p class={tw("text-[12px]")}>
                {stamp.description}
              </p>
            </div>
          </div>
          <div class={tw("flex-none flex flex-col")}>
            <p class={tw("text-[12px] text-bold")}>Date:</p>
            <p class={tw("text-[12px]")}>
              {new Date(stamp.timestamp).toISOString()}
            </p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
{/await}
