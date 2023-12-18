<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	
	export let form: ActionData;
</script>

<div>
	<h2>Sign up</h2>
	<form method="POST" use:enhance>
		<label for="fname">First name:</label>
		<input type="text" id="fname" name="fname" /><br />
		{#if form?.errors?.firstname}
			<p>{form.errors.firstname}</p>
		{/if}
		<label for="lname">Last name:</label>
		<input type="text" id="lname" name="lname" /><br />
		{#if form?.errors?.lastname}
			<p>{form.errors.lastname}</p>
		{/if}
		<label for="email">Email:</label>
		<input type="text" id="email" name="email" /><br />
		{#if form?.errors?.email}
			<p>{form.errors.email}</p>
		{/if}
		<label for="password">Password</label>
		<input type="password" name="password" id="password" /><br />
		{#if form?.errors?.password}
			<p>{form.errors.password}</p>
		{/if}
		<button>Create account</button>
	</form>

	
</div>
<a href="/login">Log in</a>

<style>
	div {
		align-items: center;
		text-align: center;
	}
	form {
		padding: 10px;
	}
	label {
		margin: 5px;
	}
	input {
		margin: 5px;
	}
</style>
