<script>
  import MainTitle from '../components/MainTitle.svelte';
  import Button from '../components/Button.svelte';
  import Graph from '../components/Graph.svelte';
</script>

<!-- Desktop screen -->
<div class="p-8 hidden xl:block">
  <div class="box box-radius flex">
    <div class="box box-radius p-12 px-8 grid gap-4">
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
      <Graph color="green" titleText="+ 10.000%" pillText="Po spolupráci" titleColor="text-green-500" pillColor="bg-green-500/20" isActive />
    </div>
  </div>
</div>

<!-- Large Tablet screen -->
<div class="py-4 hidden lg:block xl:hidden">
  <div class="box box-radius flex big-box">
    <div class="box box-radius p-12 px-10 grid gap-2 w-large">
      <div class="text"> OČEKÁVÁNÍ </div>
     <MainTitle textSize="md" thickText="Důležité je" thinText="začít">
        Změna by měla být pouze lepší.<br/>A to my Vám zajistíme!
      </MainTitle> 
      <div class="grid grid-cols-2 gap-1 pt-4">
        <Button clazz="py-0 hidden lg:block" padding="pl-3 pr-1.5">Spolupráce</Button>
        <Button clazz="py-0 hidden lg:block" padding="pl-3 pr-1.5" filled="true">Naše výsledky</Button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 my-12 mx-8 items-center">
      <Graph color="red" titleText="- 1.000%" pillText="Před spoluprací" titleColor="text-red-500" pillColor="bg-red-500/20" />
      <Graph color="green" titleText="+ 10.000%" pillText="Po spolupráci" titleColor="text-green-500" pillColor="bg-green-500/20" isActive />
    </div>
  </div>
</div>

<!-- Small Tablet screen -->
<div class="py-8 hidden md:block lg:hidden">
  <div class="box box-radius flex large-box h-40">
    <div class="box box-radius grid gap-4 w-52">
      <div class="grid grid-cols-2 gap-3 px-5 py-1 items-end">
        <Button clazz="py-4 h-14" padding="px-5"></Button>
        <Button clazz="py-4 h-14" padding="px-5" filled="true"></Button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 items-end p-4 pb-6">
      <Graph color="red" titleText="" pillText="" titleColor="text-red-500" pillColor="bg-red-500/20" />
      <Graph color="green" titleText="" pillText="" titleColor="text-green-500" pillColor="bg-green-500/20" />
    </div>
  </div>
</div>

<!-- Mobile screen -->
<div class="py-8 block md:hidden">
  <div class="box box-radius flex w-80 h-28">
    <div class="box box-radius grid gap-4 w-36">
      <div class="grid grid-cols-2 gap-2 px-3 py-1 items-end">
        <Button clazz="py-3 h-9" padding="px-2"></Button>
        <Button clazz="py-3 h-9" padding="px-2" filled="true"></Button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 items-end pl-3 pr-3 p-2 pb-4">
      <Graph color="red" titleText="" pillText="" titleColor="text-red-500" pillColor="bg-red-500/20" />
      <Graph color="green" titleText="" pillText="" titleColor="text-green-500" pillColor="bg-green-500/20" />
    </div>
  </div>
</div>


<style>
  .w-large {
    width: 29rem;
  }
  .big-box {
    width: 66rem;
  }
  .large-box {
    width: 30rem;
  }
    .box {
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      box-shadow: 0px 6px 20px rgba(34, 111, 183, 0.5);
    }
  @media (max-width: 1024px) { 
    .box-radius {
      border-radius: 1.5rem; 
    }
  }
  @media (min-width: 1025px) { 
    .box-radius {
      border-radius: 3rem; 
    }
  }
  .text {
    font-family: 'Poppins';
    @apply font-light text-base lg:text-lg text-cyan-400;
  }
</style>
