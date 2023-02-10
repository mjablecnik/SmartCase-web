<script>
  export let titleText;
  export let labelText;
  export let padding;
</script>



<div class="grid gap-2 text-center {padding}">
  <div class="text pb-4"> {labelText} </div>
  <span class="thick-text-font-md md:px-6"> {titleText} </span> <br/>
  <span class="description-text-font-md lg:w-full justify-self-center"> <slot/> </span>
</div>

<style>
  .text {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-lg text-cyan-400;
  }
  .thick-text-font-md {
    font-family: 'Poppins';
    @apply font-bold text-3xl md:text-5xl text-cyan-400;
  }
  .description-text-font-md {
    font-family: 'Poppins';
    @apply font-light text-base md:text-xl text-black;
  }
</style>

