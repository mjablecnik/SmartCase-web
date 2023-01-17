<script>
  import Button from './Button.svelte';
  export let thickText;
  export let thinText;
  export let description;
</script>


<p>
<span class="thick-text-font"> {thickText} </span> <br/>
<span class="thin-text-font"> {thinText} </span> <br/><br/>
<span class="description-text-font hidden lg:block"> {description} </span>

<span class="lg:hidden flex flex-row gap-4 justify-items-end items-center">
  <span class="description-text-font"> {description} </span>
  <span class="w-60">
  <Button clazz="py-4" filled="true" padding="pl-3 pr-1.5 py-1">Více informací</Button>
  </span>
</span>

</p>

<style>
  .thick-text-font {
    font-family: 'Poppins';
    @apply font-bold text-5xl lg:text-5xl md:text-7xl xl:text-7xl text-cyan-400;
  }
  .thin-text-font {
    font-family: 'Poppins';
    @apply font-thin text-5xl lg:text-5xl md:text-7xl xl:text-7xl text-cyan-400;
  }
  .description-text-font {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-base md:text-xl xl:text-xl text-black;
  }
</style>
