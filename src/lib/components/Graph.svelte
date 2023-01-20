<script>
  import Pill from '../components/Pill.svelte';
  export let pillText = "";
  export let titleText = "green";
  export let pillColor = "bg-red-500/20";
  export let titleColor = "text-red-500";
</script>


<div class="grid auto-rows-auto content-start gap-1">
  <div class="number {titleColor}">{titleText}</div>
  <div class="box"></div>
  <Pill width="w-14 h-1 sm:w-14 sm:h-2 md:w-20 md:h-3 lg:w-44 lg:h-7" fontType="text-font2" padding="pl-2" margin="mt-2 lg:mt-6" color="{pillColor}">{pillText}</Pill>
</div>

<style>
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
