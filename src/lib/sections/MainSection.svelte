<script>
  import MainImage from '../components/MainImage.svelte';
  import MainTitle from '../components/MainTitle.svelte';
  import Button from '../components/Button.svelte';
  import Pill from '../components/Pill.svelte';
  import ServiceLabels from '../components/ServiceLabels.svelte';
</script>

<div class="container mx-auto block w-auto">
  <MainImage clazz="lg:hidden pl-12" />
  <div class="grid grid-cols-2 p-8 items-start">
    <div class="grid gap-8">
      <Pill>Máme komplexní řešení</Pill>
      <MainTitle thickText="Marketingová řešení" thinText="na míru" description="Pomůžeme Vám rozjet Vaše podnikání!" />
      <ServiceLabels />
      <Button clazz="py-4" filled="true" padding="pl-6 pr-1.5 py-1.5">Více informací</Button>
    </div>
    <MainImage clazz="hidden lg:block md:pl-12 xl:pl-0" />
  </div>
</div>
