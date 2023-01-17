<div class="flex grid-cols-2 gap-4 items-center place-items-start">
  <div class="box px-3 py-3">
    <slot name="icon" />
  </div>

  <p class="text-font">
    <slot name="text" />
  </p>
</div>

<style>
  .box {
    box-shadow: 0px 4px 10px #C7DBED;
    border-radius: 10px;
    @apply w-12 h-12;
  }
  .text-font {
    font-family: 'Poppins';
    @apply font-light text-sm md:text-base text-black;
  }
</style>
