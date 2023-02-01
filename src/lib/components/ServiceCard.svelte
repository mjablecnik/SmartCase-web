<script>
  export let thickText;
  export let thinText;
  export let description;
  export let color = "purple";
</script>

<div class="rounded-4xl contents hover:block hover:cursor-pointer" style="box-shadow: 0px 4px 10px {color}">
  <div class="flex grid-cols-2">
    <div class="flex grid-cols-3 justify-items-center py-10">
      <div class="px-6">
        <div class="w-36 h-36 rounded-4xl" style="background-color: {color}">
          <div class="justify-self-center">
            <slot/>
          </div>
        </div>
      </div>

      <div class="grid auto-rows-auto">
        <div class="thick-text-font" style="color: {color}">
          {thickText}
        </div>
        <div class="thin-text-font" style="color: {color}">
          {thinText}
        </div>
        <div class="description-text-font">
          {description}
        </div>
      </div>
    </div>

    <div class="self-end">
      <div class="grid w-12 h-12 m-5 rounded-full border" style="border-color: {color}">
        <div class="w-3 h-3 justify-self-center self-center">
          <svg viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.87 7.48994C2.77 7.48994 2.67001 7.44996 2.60001 7.37996C2.45001 7.22996 2.45001 6.98992 2.60001 6.83992L4.95999 4.47993H0.389984C0.179984 4.47993 0 4.30992 0 4.08992C0 3.86992 0.169984 3.6999 0.389984 3.6999H4.95999L2.67001 1.40999C2.59001 1.32999 2.56 1.23997 2.56 1.13997C2.56 1.03997 2.60001 0.939946 2.67001 0.869946C2.82001 0.719946 3.05999 0.719946 3.20999 0.869946L6.16 3.8199C6.23 3.8899 6.25999 3.9799 6.26999 4.0699C6.26999 4.0899 6.26999 4.11997 6.26999 4.13997C6.26999 4.21997 6.22999 4.28993 6.17999 4.34993C6.17999 4.34993 6.17 4.35995 6.16 4.36995L3.14999 7.37996C3.06999 7.45996 2.98 7.48994 2.88 7.48994H2.87Z" fill="{color}"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .rounded-4xl {
    border-radius: 2.0rem;
  }
  .thick-text-font {
    font-family: 'Poppins';
    @apply font-bold text-3xl md:text-3xl;
  }
  .thin-text-font {
    font-family: 'Poppins';
    @apply font-light text-3xl md:text-3xl;
  }
  .description-text-font {
    font-family: 'Poppins';
    @apply font-light text-base md:text-lg;
  }
</style>

