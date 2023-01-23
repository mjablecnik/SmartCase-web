<script>
  import MainSection from '../lib/sections/MainSection.svelte';
  import ExpectationSection from '../lib/sections/ExpectationSection.svelte';
  import ClientsSection from '../lib/sections/Clients.svelte';
</script>

<div class="container mx-auto block w-auto">
  <div class="grid gap-12">
    <div class="grid gap-12 px-8 px-16 items-start sm:ml-20 lg:ml-0 ">
      <MainSection />
    </div>
    <div class="md:px-10 lg:px-0 justify-self-center">
      <ExpectationSection />
    </div>
    <div class="px-8 md:pl-4 md:pr-16 lg:pr-0 items-start sm:ml-20 lg:ml-0 lg:mt-16">
      <ClientsSection />
    </div>
  </div>
</div>
