<script>
  import MainSection from '../lib/sections/MainSection.svelte';
  import ExpectationSection from '../lib/sections/ExpectationSection.svelte';
  import ClientsSection from '../lib/sections/Clients.svelte';
</script>

<div class="container mx-auto block w-auto">
  <div class="grid gap-12">
  <div class="grid gap-12 px-8 items-start sm:ml-20 lg:ml-0">
    <MainSection />
    <div class="md:pl-10 lg:pl-0">
      <ExpectationSection />
    </div>
  </div>
  <div class="px-8 md:pl-4 md:pr-16 lg:pr-0 items-start sm:ml-20 lg:ml-0">
      <ClientsSection />
    </div>
    </div>
</div>
