<script>
  export let thickText;
  export let thinText;
  export let description;
</script>


<p>
<span class="thick-text-font"> {thickText} </span> <br/>
<span class="thin-text-font"> {thinText} </span> <br/><br/>
<span class="description-text-font"> {description} </span>
</p>

<style>
  .thick-text-font {
    font-family: 'Poppins';
    @apply font-bold text-7xl text-cyan-400;
  }
  .thin-text-font {
    font-family: 'Poppins';
    @apply font-thin text-7xl text-cyan-400;
  }
  .description-text-font {
    font-family: 'Poppins';
    @apply font-light text-xl text-black;
  }
</style>
