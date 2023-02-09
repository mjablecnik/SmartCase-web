<script>
  import Description from './footer/Description.svelte';
  import Links from './footer/Links.svelte';
  import Icons from './footer/Icons.svelte';
  import Button from '../components/Button.svelte';
</script>

<div class="flex gap-32">
  <Description />
  <Links name="KONTAKT" />
  <Links name="PODMÍNKY" />
  <Links name="POMOC" />
  <Links name="ÚČET" />
</div>

<div class="grid grid-cols-2 py-4">
  <Icons />
  <div class="justify-self-end py-6">
    <Button padding="px-8">Přihlášení</Button>
  </div>
</div>

<div class="grid grid-cols-2 py-4">
  <p>Copyright Smart Case s.r.o.</p>
  <div class="grid grid-cols-2 gap-2 justify-self-end">
    <p class="text-cyan-400 text-2xl font-bold">CZ</p>
    <svg width="16" height="9" class="self-center" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0.5L8 7.5L15 0.5" stroke="#226FB7"/>
    </svg>
  </div>
</div>

