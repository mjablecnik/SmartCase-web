<script>
  import Pill from '../components/Pill.svelte';

  export let label = "strategie";
  export let color = "";
  export let clazz = "";
  export let shadowColor = "";
</script>

<div class="{clazz}">
  <div class="box grid border-[{color}]/50">
    <div class="grid grid-cols-2 self-end p-4">
      <Pill padding="pt-1" fontType="text-font-bold" color="bg-[{color}]/20" shadowColor="{shadowColor}" textColor="{color !== "" ? `text-[${color}]` : ""}"> {label} </Pill>

      <div class="justify-self-end self-end">
        <div class="grid w-8 h-8 rounded-full border border-[{color}]/50">
          <div class="w-2 h-2 justify-self-center self-center">
            <svg viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.87 7.48994C2.77 7.48994 2.67001 7.44996 2.60001 7.37996C2.45001 7.22996 2.45001 6.98992 2.60001 6.83992L4.95999 4.47993H0.389984C0.179984 4.47993 0 4.30992 0 4.08992C0 3.86992 0.169984 3.6999 0.389984 3.6999H4.95999L2.67001 1.40999C2.59001 1.32999 2.56 1.23997 2.56 1.13997C2.56 1.03997 2.60001 0.939946 2.67001 0.869946C2.82001 0.719946 3.05999 0.719946 3.20999 0.869946L6.16 3.8199C6.23 3.8899 6.25999 3.9799 6.26999 4.0699C6.26999 4.0899 6.26999 4.11997 6.26999 4.13997C6.26999 4.21997 6.22999 4.28993 6.17999 4.34993C6.17999 4.34993 6.17 4.35995 6.16 4.36995L3.14999 7.37996C3.06999 7.45996 2.98 7.48994 2.88 7.48994H2.87Z" class="fill-[{color}]/50" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .box {
    border-width: 1px;
    border-radius: 2.0rem;
    @apply w-64 h-64 md:w-64 md:h-64 lg:w-48 lg:h-48 xl:w-64 xl:h-64;
  }
</style>
