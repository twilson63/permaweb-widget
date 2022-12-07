<script>
  import { format } from "date-fns";
  import { app } from "./store.js";
  import { take } from "ramda";
  import ArrowOut from "./arrow-out.svelte";

  export let address = "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI";
  export let limit = "10";

  function tw(s) {
    return s;
  }
</script>

{#await $app.stamps(address) then stamps}
  <ul class={tw("relative divide-y divide-gray-200 border-b border-gray-200")}>
    {#each take(Number(limit), stamps) as stamp}
      <li
        class={tw(
          "relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
        )}
      >
        <div class={tw("flex items-center justify-between space-x-4")}>
          <div class={tw("min-w-0 space-y-3")}>
            <div class={tw("flex-initial flex flex-col")}>
              <h2 class="text-xl font-bold">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://arweave.net/{stamp.id}"
                  class="flex"
                >
                  <span>{stamp.title}</span>
                  <span class="ml-4"><ArrowOut /></span>
                </a>
              </h2>
              <p class={tw("text-[12px]")}>
                {stamp.description}
              </p>
              <p class={tw("text-[12px]")}>
                <span class="font-bold mr-2">Stamped:</span>
                {format(new Date(stamp.timestamp), "M/dd/yyyy h:m aaa")}
              </p>
            </div>
          </div>
          <!--
          <div class={tw("hidden flex-none lg:flex flex-col")}>
            <p class={tw("text-[12px] font-bold")}>Asset:</p>
            <p class={tw("text-[12px] flex space-x-4")}>
              <span>{stamp.id}</span>
              <a
                rel="noreferrer"
                href="https://warp_hyper.arweave.dev/#/read/{stamp.id}"
                target="_blank"
                class={tw("ml-2")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class={tw("w-4 h-4")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </p>
          </div>
        -->
          <div class="flex-none hidden md:flex space-y-4">
            <div class={tw("md:flex flex-col")}>
              <p class={tw("text-[12px] font-bold")}>Stamps:</p>
              <p class={tw("text-[12px] text-center")}>
                {stamp.count}
              </p>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
{/await}
