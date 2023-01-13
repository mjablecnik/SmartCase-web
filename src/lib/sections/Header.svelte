<script>
  import SmartCaseLogo from '../svg/SmartCaseLogo.svelte';
  import SmartCaseIcon from '../svg/SmartCaseIcon.svelte';
  import MenuIcon from '../svg/MenuIcon.svelte';
  import Button from '../components/Button.svelte';
</script>

<div class="container mx-auto">
  <div class="flex justify-between pb-4 place-items-center p-8">
    <SmartCaseLogo />
    <div class="flex grid-cols-3 gap-4 lg:gap-10 place-items-center">
      <Button> Kontaktujte nás</Button>
      <MenuIcon />
      <SmartCaseIcon />
    </div>
  </div>
  <div class="divide-line lg:mx-8 mb-8"> </div>
</div>

<style>
  .divide-line {
    border-bottom-width: 4px;
    border-color: rgb(241 245 249);
  }
</style>
