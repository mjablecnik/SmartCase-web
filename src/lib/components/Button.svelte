<script>
  export let padding = "";
  export let filled = false;
  export let clazz = "";
</script>


<div class="flex justify-start {clazz}">
<button
  on:click
  class="pl-2 pr-1.5 py-2 pl-3 lg:py-1.5 lg:pl-5 lg:pr-3 arrow {filled ? "fill-rounded-style" : "outline-rounded-style"} "
  type="button"
>
<div class="py-1 lg:py-2 {padding}">
  <slot />
</div>

<div class="lg:w-2 lg:h-2 w-1 h-1 {padding !== "" ? "mr-2" : ""}">
  <svg viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.87 7.48994C2.77 7.48994 2.67001 7.44996 2.60001 7.37996C2.45001 7.22996 2.45001 6.98992 2.60001 6.83992L4.95999 4.47993H0.389984C0.179984 4.47993 0 4.30992 0 4.08992C0 3.86992 0.169984 3.6999 0.389984 3.6999H4.95999L2.67001 1.40999C2.59001 1.32999 2.56 1.23997 2.56 1.13997C2.56 1.03997 2.60001 0.939946 2.67001 0.869946C2.82001 0.719946 3.05999 0.719946 3.20999 0.869946L6.16 3.8199C6.23 3.8899 6.25999 3.9799 6.26999 4.0699C6.26999 4.0899 6.26999 4.11997 6.26999 4.13997C6.26999 4.21997 6.22999 4.28993 6.17999 4.34993C6.17999 4.34993 6.17 4.35995 6.16 4.36995L3.14999 7.37996C3.06999 7.45996 2.98 7.48994 2.88 7.48994H2.87Z" fill="{filled ? "white" : "#226FB7"}"/>
  </svg>
</div>

</button>
</div>

<style>
  .outline-rounded-style {
    @apply outline outline-cyan-400 md:rounded-lg rounded-sm outline-1 text-font text-cyan-400 bg-white;
  }
  .fill-rounded-style {
    @apply bg-cyan-400 md:rounded-md rounded-sm text-font text-white;
  }
  .text-font {
    font-family: 'Poppins';
    @apply font-light text-sm lg:text-base;
  }
  .arrow {
    @apply inline-flex gap-1 lg:gap-3 items-center place-content-center;
  }
</style>
