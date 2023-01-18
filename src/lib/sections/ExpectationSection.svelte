<script>
  import MainTitle from '../components/MainTitle.svelte';
  import Button from '../components/Button.svelte';
  import Graph from '../components/Graph.svelte';
</script>

<div class="p-8">
  <div class="box flex">
    <div class="box p-12 px-8 grid gap-4">
      <div class="text"> OČEKÁVÁNÍ </div>
      <MainTitle textSize="md" thickText="Důležité je" thinText="začít">
        Změna by měla být pouze lepší.<br/>A to my Vám zajistíme!
      </MainTitle> 
      <div class="grid grid-cols-2 gap-3">
        <Button clazz="py-4 hidden lg:block" padding="pl-3 pr-1.5">Spolupráce</Button>
        <Button clazz="py-4 hidden lg:block" filled="true" padding="pl-3 pr-1.5">Naše výsledky</Button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 m-12 items-center">
      <Graph color="red" titleText="- 1.000%" pillText="Před spoluprací" titleColor="text-red-500" pillColor="bg-red-500/20" />
      <Graph color="green" titleText="+ 10.000%" pillText="Po spolupráci" titleColor="text-green-500" pillColor="bg-green-500/20" />
    </div>
  </div>
</div>


<style>
  .box {
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 8px 28px rgba(34, 111, 183, 0.5);
    border-radius: 3rem; 
  }

  .text {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-lg text-cyan-400;
  }
</style>
