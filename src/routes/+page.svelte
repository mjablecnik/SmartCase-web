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
  <div class="grid gap-12 pb-20">
    <div class="grid gap-12 pl-8 px-16 items-start sm:ml-20 lg:ml-0">
      <MainSection />
    </div>
    <div class="pr-8 md:px-10 xl:pr-0 justify-self-center lg:justify-self-start">
      <ExpectationSection />
    </div>
    <div class="px-8 md:pl-4 md:pr-16 xl:pr-16 items-start sm:ml-20 lg:ml-0 lg:mt-16">
      <ClientsSection />
    </div>
    <div class="grid gap-12 pl-12 pr-20 md:w-10/12 md:px-0 items-start sm:ml-12 lg:ml-20 justify-self-center lg:justify-self-start">
      <StrategySection />
    </div>
    <div class="px-4 md:px-10 xl:px-10 md:w-10/12 lg:w-auto relative xl:left-0 justify-self-center lg:justify-self-start">
      <ServiceSection />
    </div>
    <div class="px-4 lg:px-12 md:w-10/12 lg:w-auto relative xl:left-0 justify-self-center lg:justify-self-start lg:pl-24 xl:pl-16">
      <WorkSection />
    </div>
    <div class="px-8 lg:px-0 md:w-10/12 lg:w-auto relative xl:left-0 justify-self-center 2xl:justify-self-start">
      <ReferenceSection />
    </div>
    <div class="px-8 pt-16 lg:pt-32 md:px-24 lg:px-20 xl:px-0 md:w-10/12 lg:w-auto relative xl:left-0 lg:justify-self-start">
      <ContactSection />
    </div>
    <div class="px-8 md:px-24 lg:px-20 xl:px-0 md:w-10/12 lg:w-auto relative xl:left-0 hidden xl:block lg:justify-self-start">
      <Footer />
    </div>
  </div>
</div>
