<script>
  import Pill from '../components/Pill.svelte';

  export let label = "strategie";

  export let borderColor = `border-[#347852]`;
  export let pillBgColor = `bg-[#347852]/20`;
</script>

<div class="box grid {borderColor}">
  <div class="grid grid-cols-2 self-end p-4">
    <Pill padding="pt-1" fontType="text-font-bold" color="{pillBgColor}"> {label} </Pill>
  </div>
</div>

<style>
  .box {
    border-width: 1px;
    width: 15rem;
    height: 15rem;
    border-radius: 2.0rem;
  }
</style>
