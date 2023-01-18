<script>
  import Pill from '../components/Pill.svelte';
  export let pillText = "";
  export let titleText = "green";
  export let pillColor = "bg-red-500/20";
  export let titleColor = "text-red-500";
</script>


<div class="grid auto-rows-auto content-start">
  <div class="number {titleColor}">{titleText}</div>
  <div class="box"></div>
  <Pill width="w-44" padding="pl-2" margin="mt-6" color="{pillColor}">{pillText}</Pill>
</div>

<style>
  .box {
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(34, 111, 183, 0.4);
    border-radius: 1.0rem; 
    @apply w-72 h-36;
  }
  .number {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }
</style>
