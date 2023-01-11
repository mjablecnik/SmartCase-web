<button
  on:click
  class="outline-rounded-style py-2 pl-5 pr-3 text-font arrow"
  type="button"
>
  <slot />

  <div class="">
    <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.87 7.48994C2.77 7.48994 2.67001 7.44996 2.60001 7.37996C2.45001 7.22996 2.45001 6.98992 2.60001 6.83992L4.95999 4.47993H0.389984C0.179984 4.47993 0 4.30992 0 4.08992C0 3.86992 0.169984 3.6999 0.389984 3.6999H4.95999L2.67001 1.40999C2.59001 1.32999 2.56 1.23997 2.56 1.13997C2.56 1.03997 2.60001 0.939946 2.67001 0.869946C2.82001 0.719946 3.05999 0.719946 3.20999 0.869946L6.16 3.8199C6.23 3.8899 6.25999 3.9799 6.26999 4.0699C6.26999 4.0899 6.26999 4.11997 6.26999 4.13997C6.26999 4.21997 6.22999 4.28993 6.17999 4.34993C6.17999 4.34993 6.17 4.35995 6.16 4.36995L3.14999 7.37996C3.06999 7.45996 2.98 7.48994 2.88 7.48994H2.87Z" fill="#226FB7"/>
    </svg>
  </div>

</button>

<style>
  .outline-rounded-style {
    @apply outline outline-cyan-400 text-cyan-400 rounded outline-1;
  }
  .text-font {
    font-family: 'Poppins';
    @apply font-light;
  }
  .arrow {
    @apply inline-flex gap-3 items-center place-content-center;
  }
</style>
