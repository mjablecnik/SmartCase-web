<script>
  import Stars from './Stars.svelte';

  export let stars = "";
</script>


<div class="box">
  <div class="pl-3 pt-6">
    <Stars number="{stars}" />
  </div>
  <p class="pl-4 pb-4 pr-6 pt-2 w-[320px] md:w-[500px] lg:w-[407px]">
    <slot />
  </p>
</div>


<style>
  .box {
    border-width: 1px;
    border-radius: 17px;
    box-shadow: 0px 4px 10px #C7DBED;
    @apply w-[320px] md:w-[600px] lg:w-[407px] lg:h-64 ;
  }
</style>

