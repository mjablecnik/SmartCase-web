<div class="pill text-font w-fit py-1 px-3">
  <slot />
</div>


<style>
  .pill {
    background: rgba(199, 219, 237, 0.57);
    box-shadow: 0px 4px 10px #C7DBED;
    border-radius: 17px;
  }
  .text-font {
    font-family: 'Poppins';
    @apply font-light text-base text-cyan-400;
  }
</style>
