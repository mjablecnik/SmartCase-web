<script>
  import MainImage from '../components/MainImage.svelte';
  import MainTitle from '../components/MainTitle.svelte';
  import Button from '../components/Button.svelte';
  import Pill from '../components/Pill.svelte';
  import ServiceLabels from '../components/ServiceLabels.svelte';
</script>

<div class="container mx-auto block w-auto">
  <div class="grid grid-cols-2 p-8 items-start">
    <div class="grid gap-8">
      <Pill>Máme komplexní řešení</Pill>
      <MainTitle thickText="Marketingová řešení" thinText="na míru" description="Pomůžeme Vám rozjet Vaše podnikání!" />
      <ServiceLabels />
    </div>
    <MainImage />
  </div>
</div>
