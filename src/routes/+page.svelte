<script>
  import MainImage from '../lib/components/MainImage.svelte';
  import MainTitle from '../lib/components/MainTitle.svelte';
  import Button from '../lib/components/Button.svelte';
  import Pill from '../lib/components/Pill.svelte';
  import ServiceLabels from '../lib/components/ServiceLabels.svelte';
</script>

<div class="container mx-auto block w-auto">
  <div class="grid grid-cols-2 p-8 items-center">
    <div class="grid gap-8">
      <Pill>Máme komplexní řešení</Pill>
      <MainTitle thickText="Marketingová řešení" thinText="na míru" description="Pomůžeme Vám rozjet Vaše podnikání!" />
      <ServiceLabels />
    </div>
    <MainImage />
  </div>
</div>

<style>
  .label {
    @apply block text-gray-700 text-sm font-bold mb-2;
  }
</style>
