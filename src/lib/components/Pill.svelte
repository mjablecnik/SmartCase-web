<script>
  export let width = "w-fit";
  export let padding = "pl-0";
  export let margin = "py-0";
  export let color = "bg-blue-200/60";
  export let fontType = "text-font1";
</script>

<div class="pill {fontType} {width} {margin} py-1 px-3 {color}">
  <div class="{padding}">
    <slot />
  </div>
</div>


<style>
  .pill {
    box-shadow: 0px 4px 10px #C7DBED;
    border-radius: 17px;
  }
  .text-font1 {
    font-family: 'Poppins';
    @apply font-light text-sm md:text-base text-cyan-400;
  }
  .text-font2 {
    font-family: 'Poppins';
    @apply font-light text-xs lg:text-base text-cyan-400;
  }
  .text-font-bold {
    font-family: 'Poppins';
    @apply font-bold text-xs lg:text-base text-cyan-400;
  }
</style>
