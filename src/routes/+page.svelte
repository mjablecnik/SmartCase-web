<script>
  import { form, field } from 'svelte-forms';
  import { required, min } from 'svelte-forms/validators';
  import Button from './components/Button.svelte';

  const name = field('name', '', [required()]);
  const password = field('password', '', [required(), min(6)]);
  const myForm = form(name, password);
</script>

<div class="grid place-content-center">
  <h1 class="text-3xl underline pl-20 pb-8 pt-24">Hello world!</h1>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="label" for="username">Username</label>
        <input
          bind:value={$name.value}
          class="input focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
        {#if $myForm.hasError('name.required')}
          <p class="error-message">Username cannot be empty.</p>
        {/if}
      </div>
      <div class="mb-4">
        <label class="label" for="password">Password</label>
        <input
          bind:value={$password.value}
          class="input focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        {#if $myForm.hasError('password.required')}
          <p class="error-message">Please choose a password.</p>
        {:else if $myForm.hasError('password.min')}
          <p class="error-message">Password length must be minimal 6 characters!</p>
        {/if}
      </div>
      <div class="grid gap-4 justify-center">
        <Button on:click={name.reset}>Reset name</Button>
        <Button on:click={password.reset}>Reset password</Button>
        <Button on:click={myForm.reset}>Reset form</Button>
        <Button on:click={myForm.validate}>Validate</Button>
        <!--
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        -->
      </div>
    </form>
  </div>
</div>

<!--
  <h1 class="grid h-screen place-content-center text-8xl">
    Heading
  </h1>
-->
<style>
  .label {
    @apply block text-gray-700 text-sm font-bold mb-2;
  }
  .input {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight;
  }
  .error-message {
    @apply text-red-500 text-xs italic;
  }
</style>
