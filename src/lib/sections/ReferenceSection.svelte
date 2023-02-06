<script>
  import SectionTitle from '../components/SectionTitle.svelte';
  import Reference from '../components/Reference.svelte';
</script>

<div class="grid">
  <div class="pt-32 pb-20">
    <SectionTitle labelText="REFERENCE" titleText="Jak hodnotí naše služby naši klienti?" padding="pl-6 pr-14 md:px-0">
      Naše služby využívá mnoho klientů z mnoha odvětví <br class="hidden lg:block"/>  
      Přesvěčte se sami, jak hodnotí naše služby a spolupráci s námi.
    </SectionTitle>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 gap-36 md:justify-items-center px-12 md:px-7 lg:px-0">
    <Reference stars="4" />
    <Reference stars="5" />
    <Reference stars="4" />
  </div>

</div>
