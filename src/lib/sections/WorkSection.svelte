<script>
  import SectionTitle from '../components/SectionTitle.svelte';
  import WorkCard from '../components/WorkCard.svelte';
</script>

<div class="grid">
  <div class="py-20">
    <SectionTitle labelText="NAŠE PRÁCE" titleText="Jak vypadá naše práce v praxi?">
      Použití a reálné výsledky v praxi jsou bezpochybně ta nejdůležitější část. <br class="hidden lg:block"/>
      Podívejte se sami, jak naše práce v praxi vypadá.
    </SectionTitle>
  </div>
  <div class="grid grid-cols-4 gap-6">
    <WorkCard/>
    <!--
    <WorkCard color="#226FB7" label="strategie"/>
    <WorkCard color="#FBB800" label="příspěvky"/>
    <WorkCard color="#00A976" label="strategie"/>
    <WorkCard color="#E5005A" label="příspěvky"/>
    <WorkCard color="#226FB7" label="logo"/>
    <WorkCard color="#FBB800" label="logo"/>
    <WorkCard color="#00A976" label="strategie"/>
    <WorkCard color="#E5005A" label="příspěvky"/>
    -->
  </div>
</div>

