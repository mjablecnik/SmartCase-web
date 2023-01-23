<script>
  export let clazz = ""
</script>

<img src="/images/main-image.png" class="{clazz} size" />

<style>
  @media (max-width: 660px) { 
    .size {
      width: 24rem; 
    }
  }
  @media (min-width: 661px) { 
    .size {
      width: 34rem; 
    }
  }
</style>

<!--
<div class="relative w-auto h-auto">

<img src="/images/main-image.png"/>

<p class="text-font absolute position">
KONTAKT
<br><br>
info@smartcase.cz<br /> 
+ 420 727 913 350
</p>

</div>


<style>
  .position {
    position: absolute;
    top: 17vh;
    left: 41vw;
  }
  .text-font {
    font-family: 'Poppins';
    @apply font-light text-lg text-cyan-400 leading-6;
  }
</style>
-->
