<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div class="info">
    <h1>
        Hello and Welcome to our dogs!
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad molestiae tempore exercitationem, quos nihil. Doloremque architecto harum dolor perferendis voluptatibus inventore vitae in adipisci atque similique. Voluptate, laborum minima!</p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero amet dolorum eligendi deserunt adipisci, autem quam minus molestiae vel, necessitatibus debitis porro ut facere voluptate ipsa nesciunt. Eligendi, fugiat nihil.</p>
</div>

<ul class="dogs">
    {#each data.dogs as dog}
        <li class="post">
            <img src={dog.imgUrl} alt="">
            <h2>{ dog.name }</h2>
            <p> {dog.description}</p>
            <a href="/doggo/{dog.id}">More info</a>
        </li>
    {/each}
</ul>

<style>
    a{
        text-decoration: none;
        background-color: hsl(100, 61%, 81%);
        border: 3px solid hsl(183, 58%, 68%);
        color: black;
        width: 25%;
        height: 100%;
    }
    a:hover{
        border: 3px solid blue;
    }
img{
    width: 40%;
    aspect-ratio: 1;
    border-radius: 20%;
    object-fit: cover;
}

.post{
    text-align: center;
    display: grid;
    border-radius: 5px;
    padding: 10px;
    border: 3px solid hsl(153, 64%, 91%);
    margin-bottom: 20%;
    margin-inline: auto;
    place-items: center;
}
.dogs{
    margin-inline: 15px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
}
.info{
    display: grid;
    text-align: center;
    padding: 20px;
    margin: 50px;
}


</style>