<script>
  import Button from '../components/Button.svelte';
</script>


<img src="/images/strategy.png" class="md:hidden pl-0" />
<div class="grid grid-cols-12 lg:grid-cols-2">
  <div class="col-span-12 md:col-span-5 lg:col-span-1">
    <div class="label-text pb-4"> NAŠE STRATEGIE </div>
    <span class="thick-text-font"> Unikátní Marketingový </span> <br/>
    <span class="thin-text-font"> plán </span> <br/><br/>
    <span class="description-text-font"> 
    Audit aktuální situace, podle které zjistíme Váš stav a vytvoříme plán Vám přímo na míru
    </span>
    <Button clazz="py-6 lg:py-8" padding="pl-3 pr-1.5 py-1">Více informací</Button>
  </div>
  <img src="/images/strategy.png" class="hidden md:block md:col-span-7 lg:col-span-1" />
</div>


<style>
  .label-text {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-lg text-cyan-400;
  }
  .thick-text-font {
    font-family: 'Poppins';
    @apply font-bold text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-cyan-400;
  }
  .thin-text-font {
    font-family: 'Poppins';
    @apply font-thin text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-cyan-400;
  }
  .description-text-font {
    font-family: 'Poppins';
    @apply font-light text-base md:text-base lg:text-base xl:text-xl text-black;
  }
</style>
