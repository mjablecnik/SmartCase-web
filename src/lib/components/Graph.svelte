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
  <Pill width="w-20 h-3 lg:w-44 lg:h-7" fontType="text-font2" padding="pl-2" margin="mt-2 lg:mt-6" color="{pillColor}">{pillText}</Pill>
</div>

<style>
  .box {
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(34, 111, 183, 0.4);
    @apply w-28 h-14 rounded-lg lg:w-64 lg:h-32 lg:rounded-2xl xl:w-72 xl:h-36 xl:rounded-2xl;
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
