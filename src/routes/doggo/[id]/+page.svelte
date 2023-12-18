<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';
	
	export let data: PageData;
    export let form: ActionData;
</script>


<div class="post">
    <img src={data.dog.imgUrl} alt="">
    <div>
        <h2>{data.dog.name}</h2>
        <p> {data.dog.description}</p>
        <form method="post" use:enhance>
        <button>Request dog</button>
        {#if form?.message}
        <p>{form.message}</p>
    {/if}
    {#if form?.success}
        <p>{form.success}</p>
    {/if}
        </form>
    </div>
</div>



<style>

h2{

width: 50px;
height: 50px;
padding: 10px;
margin-left: 4rem;
}
img{
    width: 40%;
    height: 40%;
    border-radius: 20%;
}

.post p{
    width: 95%;
    padding-left: 5rem;
}
.post{
    width: 90%;
    display: flex;
    border-radius: 5px;
    padding: 10px;
    border: 3px solid hsl(153, 64%, 91%);
    margin-bottom: 20%;
    margin-top: 10rem;
    margin-inline: auto;
}

button{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border-radius: 3px;
    margin: 10px;
    margin-left: 6rem;
    background-color: hsl(100, 61%, 81%);
    border: 3px solid hsl(183, 58%, 68%);
    color: black;
    text-decoration: none;
}

</style>