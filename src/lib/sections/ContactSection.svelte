<script>
  import Button from '../components/Button.svelte';
  import MainTitle from '../components/MainTitle.svelte';
</script>


<div class="box shadow bg-cyan-400">
  <div class="hidden lg:block">
    <div class="flex grid-cols-2 pl-16 lg:pr-16 xl:pr-28 pt-6 pb-0">
      <div class="grow">
        <div class="text-white text-2xl py-12">KONTAKT</div>
        <MainTitle thickText="Kontaktujte" thinText="nás" textColor="text-white">
          <div class="text-white pt-6">
            Máte dotaz? Pojďme se sejít a společně vše proberme!
          </div>
        </MainTitle>
      </div>
      <div class="self-end justify-self-end">
        <Button padding="pl-8 pr-6 lg:py-4">Sjednat schůzku</Button>
      </div>
    </div>
  </div>
</div>


<style>
  .box {
    @apply w-full h-[13rem] md:w-[38rem] md:h-[16rem] lg:w-[54rem] lg:h-[26rem] xl:w-[76rem] xl:h-[30rem] 2xl:w-[83rem] ;
    @apply rounded-[1.5rem] md:rounded-[2.5rem] lg:rounded-[4rem];
  }

  @media (max-width: 1023px) { 
    .shadow {
      box-shadow: 0px 4px 10px rgba(34, 111, 183, 0.5);
    }
  }
</style>
