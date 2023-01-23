<script>
  import Pill from '../components/Pill.svelte';
  export let pillText = "";
  export let titleText = "";
  export let pillColor = "bg-red-500/20";
  export let titleColor = "text-red-500";
  export let isActive = false;
</script>


<div class="grid auto-rows-auto content-start gap-1">
  <div class="number {titleColor}">{titleText}</div>
  <div class="box">
    {#if isActive}
      <div class="hidden lg:block border-b-2 box-border h-3/5 m-4 border-cyan-400/20">
        <img src="/images/graph.png" class="relative top-5" />
      </div>
      <div class="graph-desc flex">
        <div class="w-2 h-2" style="rotate: 270deg;">
          <svg viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.87 7.48994C2.77 7.48994 2.67001 7.44996 2.60001 7.37996C2.45001 7.22996 2.45001 6.98992 2.60001 6.83992L4.95999 4.47993H0.389984C0.179984 4.47993 0 4.30992 0 4.08992C0 3.86992 0.169984 3.6999 0.389984 3.6999H4.95999L2.67001 1.40999C2.59001 1.32999 2.56 1.23997 2.56 1.13997C2.56 1.03997 2.60001 0.939946 2.67001 0.869946C2.82001 0.719946 3.05999 0.719946 3.20999 0.869946L6.16 3.8199C6.23 3.8899 6.25999 3.9799 6.26999 4.0699C6.26999 4.0899 6.26999 4.11997 6.26999 4.13997C6.26999 4.21997 6.22999 4.28993 6.17999 4.34993C6.17999 4.34993 6.17 4.35995 6.16 4.36995L3.14999 7.37996C3.06999 7.45996 2.98 7.48994 2.88 7.48994H2.87Z" fill="#41A479"/>
          </svg>
        </div>
        <div class="relative left-1.5 bottom-1">
          510,7 %
        </div>
      </div>
    {:else}
      <div class="hidden lg:block border-b-2 box-border h-3/5 m-4 border-cyan-400"></div>
    {/if}
</div>
  <Pill width="w-14 h-1 sm:w-14 sm:h-2 md:w-20 md:h-3 lg:w-44 lg:h-7" fontType="text-font2" padding="pl-2" margin="mt-2 lg:mt-6" color="{pillColor}">{pillText}</Pill>
</div>

<style>
  .graph-desc {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      @apply text-green-500 pl-3 pb-4;
  }
  @media (max-width: 1023px) { 
    .box {
      background: #FFFFFF;
      box-shadow: 0px 2px 7px rgba(34, 111, 183, 0.4);
      @apply w-20 h-9 sm:w-20 sm:h-10 md:w-28 md:h-14 rounded-lg;
    }
  }
  @media (min-width: 1024px) { 
    .box {
      background: #FFFFFF;
      box-shadow: 0px 4px 15px rgba(34, 111, 183, 0.4);
      @apply lg:w-64 lg:h-32 lg:rounded-2xl xl:w-72 xl:h-36 xl:rounded-2xl;
    }
  }
  @media (max-width: 1024px) { 
    .number {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 42px;
    }
  }
  @media (min-width: 1025px) { 
    .number {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 72px;
    }
  }
</style>
