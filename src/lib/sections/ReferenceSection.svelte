<script>
  import SectionTitle from '../components/SectionTitle.svelte';
  import Reference from '../components/Reference.svelte';
</script>

<div class="grid">
  <div class="pt-32 pb-20">
    <SectionTitle labelText="REFERENCE" titleText="Jak hodnotí naše služby naši klienti?" padding="">
      Naše služby využívá mnoho klientů z mnoha odvětví. <br class="hidden md:block"/>  
      Přesvěčte se sami, jak hodnotí naše služby a spolupráci s námi.
    </SectionTitle>
  </div>
  <div class="grid lg:grid-cols-2 2xl:grid-cols-3 xl:gap-12 justify-center ">
    <Reference stars="4" visibility="" />
    <Reference stars="5" visibility="hidden lg:block" />
    <Reference stars="4" visibility="hidden 2xl:block" />
  </div>

</div>
