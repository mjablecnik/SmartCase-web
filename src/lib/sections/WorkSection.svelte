<script>
  import SectionTitle from '../components/SectionTitle.svelte';
  import WorkCard from '../components/WorkCard.svelte';

// fill-[#347852]/50 fill-[#226FB7]/50 fill-[#FBB800]/50 fill-[#00A976]/50 fill-[#E5005A]/50
// border-[#347852]/50 border-[#226FB7]/50 border-[#FBB800]/50 border-[#00A976]/50 border-[#E5005A]/50
// bg-[#347852]/20 bg-[#226FB7]/20 bg-[#FBB800]/20 bg-[#00A976]/20 bg-[#E5005A]/20
// text-[#347852] text-[#226FB7] text-[#FBB800] text-[#00A976] text-[#E5005A]
</script>

<div class="grid">
  <div class="py-20">
    <SectionTitle labelText="NAŠE PRÁCE" titleText="Jak vypadá naše práce v praxi?">
      Použití a reálné výsledky v praxi jsou bezpochybně ta nejdůležitější část. <br class="hidden lg:block"/>
      Podívejte se sami, jak naše práce v praxi vypadá.
    </SectionTitle>
  </div>
  <div class="grid grid-cols-4 gap-6">
    <WorkCard color="#226FB7" shadowColor="rgba(164, 188, 218, 0.46)" label="strategie"/>
    <WorkCard color="#FBB800" shadowColor="rgba(251, 184, 0, 0.3)"    label="příspěvky"/>
    <WorkCard color="#00A976" shadowColor="rgba(0, 169, 118, 0.23)"   label="strategie"/>
    <WorkCard color="#E5005A" shadowColor="rgba(229, 0, 90, 0.21)"    label="příspěvky"/>
    <WorkCard color="#226FB7" shadowColor="rgba(164, 188, 218, 0.46)" label="logo"/>
    <WorkCard color="#FBB800" shadowColor="rgba(251, 184, 0, 0.3)"    label="logo"/>
    <WorkCard color="#00A976" shadowColor="rgba(0, 169, 118, 0.23)"   label="strategie"/>
    <WorkCard color="#E5005A" shadowColor="rgba(229, 0, 90, 0.21)"    label="příspěvky"/>
  </div>
</div>

