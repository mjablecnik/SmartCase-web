<script>
  import ServiceLabel from '../components/ServiceLabel.svelte';
  import TargetIcon from '../svg/TargetIcon.svelte';
  import GraphicIcon from '../svg/GraphicIcon.svelte';
  import PhotoIcon from '../svg/PhotoIcon.svelte';
  import GlobeIcon from '../svg/GlobeIcon.svelte';
</script>

<div class="grid grid-cols-2 grid-rows-2 gap-7 w-fit">
  <ServiceLabel>
    <div slot="icon" class="px-0.5">
      <TargetIcon/>
    </div>
    <svelte:fragment slot="text">
      Marketingové<br />Strategie
    </svelte:fragment>
  </ServiceLabel>

  <ServiceLabel>
    <div slot="icon" class="px-1 py-0.5">
      <GraphicIcon />
    </div>
    <svelte:fragment slot="text">
      Firemní grafika<br />Branding
    </svelte:fragment>
  </ServiceLabel>

  <ServiceLabel>
    <PhotoIcon slot="icon" />
    <svelte:fragment slot="text">
      Profesionální<br />Foto-Video služby
    </svelte:fragment>
  </ServiceLabel>

  <ServiceLabel>
    <div slot="icon" class="px-0.25 py-0.5">
      <GlobeIcon />
    </div>
    <svelte:fragment slot="text">
      Tvorba webů<br />Prodejní systémy
    </svelte:fragment>
  </ServiceLabel>
</div>
