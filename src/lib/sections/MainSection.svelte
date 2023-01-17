<script>
  import MainImage from '../components/MainImage.svelte';
  import MainTitle from '../components/MainTitle.svelte';
  import Button from '../components/Button.svelte';
  import Pill from '../components/Pill.svelte';
  import ServiceLabels from '../components/ServiceLabels.svelte';
</script>


<MainImage clazz="lg:hidden pl-12" />
<div class="grid grid-cols-2">
  <div class="grid gap-8">
    <Pill>Máme komplexní řešení</Pill>
    <MainTitle thickText="Marketingová řešení" thinText="na míru">
      Pomůžeme Vám rozjet Vaše podnikání!
    </MainTitle>
    <ServiceLabels />
    <Button clazz="py-4 hidden lg:block" filled="true" padding="pl-3 pr-1.5">Více informací</Button>
  </div>
  <MainImage clazz="hidden lg:block md:pl-12 xl:pl-0" />
</div>
