<script>
  import Button from './Button.svelte';
  export let thickText;
  export let thinText;
  export let description;
  export let textSize = "lg";
</script>


<p>
<span class="thick-text-font-{textSize}"> {thickText} </span> <br/>
<span class="thin-text-font-{textSize}"> {thinText} </span> <br/><br/>
<span class="description-text-font-{textSize} hidden lg:block"> <slot/> </span>

<span class="lg:hidden flex flex-row gap-4 justify-items-end items-center">
  <span class="description-text-font-{textSize}"> <slot/> </span>
  <span class="w-60">
  <Button clazz="py-4" filled="true" padding="pl-3 pr-1.5 py-1">Více informací</Button>
  </span>
</span>

</p>

<style>
  .thick-text-font-lg {
    font-family: 'Poppins';
    @apply font-bold text-5xl lg:text-5xl md:text-7xl xl:text-7xl text-cyan-400;
  }
  .thin-text-font-lg {
    font-family: 'Poppins';
    @apply font-thin text-5xl lg:text-5xl md:text-7xl xl:text-7xl text-cyan-400;
  }
  .description-text-font-lg {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-base md:text-xl xl:text-xl text-black;
  }

  .thick-text-font-md {
    font-family: 'Poppins';
    @apply font-bold text-3xl lg:text-3xl md:text-5xl xl:text-5xl text-cyan-400;
  }
  .thin-text-font-md {
    font-family: 'Poppins';
    @apply font-thin text-3xl lg:text-3xl md:text-5xl xl:text-5xl text-cyan-400;
  }
  .description-text-font-md {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-base md:text-xl xl:text-xl text-black;
  }
</style>
