<script lang="ts">
	import { enhance } from "$app/forms";

	import type { PageData } from "./$types";

	export let data: PageData;
    
</script>



<h1>Profile</h1>
<p>Username: {data.username}</p>
<p>User id: {data.userId}</p>
<form method="post" action="?/logout" use:enhance>
	<input type="submit" value="Sign out" />
</form>

<div class="main">
	<ul >
		<li class="stacked__links">
			<a href="/dogs"> Dogs you have borrowed</a>
			<ul class="sub__menu">
				<li></li>
			</ul>
		</li>
	</ul>
	<ul> 
		<li class="stacked__links">
		<a href="/dogs">Waiting requests</a>
		<ul class="sub__menu">
			{#each data.requests as dog}
			<li>
				<a href="/doggo/{dog.id}">{ dog.name }</a>
			</li>
		{/each}

		</ul>
		</li>

	</ul>
</div>

<style>
	form {
		padding: 20px;
	}
	.main{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		place-items: center;
	}
	a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 3px;
    margin: 10px;
    margin-left: 6rem;
    background-color: hsl(100, 61%, 81%);
    border: 3px solid hsl(183, 58%, 68%);
    color: black;
    text-decoration: none;
}
.stacked__links {
    position: relative;
}

.stacked__links>ul {
    position: absolute;
    left: 0;
    top: 105%;
    display: none;
    z-index: 10;
}

.stacked__links:hover>ul {
    display: flex;
    flex-direction: column;
	list-style: none;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

</style>