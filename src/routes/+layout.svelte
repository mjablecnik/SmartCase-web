<script>
  import '../app.css';
  import SmartCaseLogo from './components/SmartCaseLogo.svelte';
  import SmartCaseIcon from './components/SmartCaseIcon.svelte';
  import MenuIcon from './components/MenuIcon.svelte';
  import Button from './components/Button.svelte';
</script>


<div class="p-8">
  <div class="flex justify-between pb-4 place-items-center">
    <SmartCaseLogo />
    <div class="flex grid-cols-3 gap-10 place-items-center">
      <Button> Kontaktujte nás</Button>
      <MenuIcon />
      <SmartCaseIcon />
    </div>
    </div>
  <div class="divide-line"> </div>
</div>



<slot />

<style>
  .divide-line {
    border-bottom-width: 4px;
    border-color: rgb(241 245 249);
  }
</style>
