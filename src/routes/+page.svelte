<script>
  import MainSection from '../lib/sections/MainSection.svelte';
  import ExpectationSection from '../lib/sections/ExpectationSection.svelte';
  import ClientsSection from '../lib/sections/Clients.svelte';
  import StrategySection from '../lib/sections/StrategySection.svelte';
  import ServiceSection from '../lib/sections/ServiceSection.svelte';
</script>

<div class="container mx-auto block w-auto">
  <div class="grid gap-12 pb-20">
    <div class="grid gap-12 pl-8 px-16 items-start sm:ml-20 lg:ml-0">
      <MainSection />
    </div>
    <div class="md:px-10 lg:px-0 justify-self-center">
      <ExpectationSection />
    </div>
    <div class="px-8 md:pl-4 md:pr-16 lg:pr-0 items-start sm:ml-20 lg:ml-0 lg:mt-16">
      <ClientsSection />
    </div>
    <div class="grid gap-12 px-16 md:px-8 items-start sm:ml-12 lg:ml-20 justify-self-center">
      <StrategySection />
    </div>
    <div class="px-8 relative left-10 justify-self-center">
      <ServiceSection />
    </div>
  </div>
</div>
