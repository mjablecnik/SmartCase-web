<script>
  import Button from './Button.svelte';
  export let thickText;
  export let thinText;
  export let description;
  export let textSize = "lg";
  export let textColor = "text-cyan-400";
</script>


<p>
<span class="thick-text-font-{textSize} {textColor}"> {thickText} </span> <br/>
<span class="thin-text-font-{textSize} {textColor}"> {thinText} </span> <br/><br/>
<span class="description-text-font-{textSize} hidden lg:block"> <slot/> </span>

<span class="lg:hidden flex flex-row gap-4 justify-items-end items-center">
  <span class="description-text-font-{textSize} {textColor}"> <slot/> </span>
  <span class="w-60">
  <Button clazz="py-4" filled="true" padding="pl-3 pr-1.5 py-1">Více informací</Button>
  </span>
</span>

</p>

<style>
  .thick-text-font-lg {
    font-family: 'Poppins';
    @apply font-bold text-5xl lg:text-5xl md:text-7xl xl:text-7xl;
  }
  .thin-text-font-lg {
    font-family: 'Poppins';
    @apply font-thin text-5xl lg:text-5xl md:text-7xl xl:text-7xl;
  }
  .description-text-font-lg {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-base md:text-xl xl:text-xl text-black;
  }

  .thick-text-font-md {
    font-family: 'Poppins';
    @apply font-bold text-3xl lg:text-3xl md:text-5xl xl:text-5xl;
  }
  .thin-text-font-md {
    font-family: 'Poppins';
    @apply font-thin text-3xl lg:text-3xl md:text-5xl xl:text-5xl;
  }
  .description-text-font-md {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-base md:text-xl xl:text-xl text-black;
  }
</style>
