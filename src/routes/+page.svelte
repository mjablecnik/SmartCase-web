<script>
  import MainSection from '../lib/sections/MainSection.svelte';
  import Footer from '../lib/sections/Footer.svelte';
  import ExpectationSection from '../lib/sections/ExpectationSection.svelte';
  import ClientsSection from '../lib/sections/Clients.svelte';
  import StrategySection from '../lib/sections/StrategySection.svelte';
  import ServiceSection from '../lib/sections/ServiceSection.svelte';
  import WorkSection from '../lib/sections/WorkSection.svelte';
  import ReferenceSection from '../lib/sections/ReferenceSection.svelte';
  import ContactSection from '../lib/sections/ContactSection.svelte';
</script>

<div class="container mx-auto block w-auto">
  <div class="grid gap-12 pb-20 items-center">
    <div class="grid gap-12 px-16 items-start sm:ml-20 lg:ml-0">
      <MainSection />
    </div>
    <div class="pr-8 md:px-10 xl:pr-0 justify-self-center lg:justify-self-start">
      <ExpectationSection />
    </div>
    <div class="px-8 lg:pt-16 md:pl-0 md:pr-16 lg:w-auto justify-self-center">
      <ClientsSection />
    </div>
    <div class="grid gap-12 pl-12 pr-20 md:w-10/12 md:px-0 items-start sm:ml-12 lg:ml-20 justify-self-center lg:justify-self-start">
      <StrategySection />
    </div>
    <div class="px-4 md:px-10 xl:px-10 md:w-10/12 lg:w-auto relative xl:left-0 justify-self-center lg:justify-self-start">
      <ServiceSection />
    </div>
    <div class="px-8 lg:w-auto justify-self-center">
      <WorkSection />
    </div>
    <div class="px-8 lg:w-auto justify-self-center">
      <ReferenceSection />
    </div>
    <div class="px-8 pt-32 lg:w-auto justify-self-center">
      <ContactSection />
    </div>
    <div class="px-8 lg:w-auto hidden xl:block justify-self-center">
      <Footer />
    </div>
  </div>
</div>
