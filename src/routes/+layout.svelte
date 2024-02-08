<script lang="ts">
    import "../styles.css";
    import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<header>
    <div class="header">
        <a href="/" class:active={$page.route.id === "/"}> Home </a>
        <a href="/dogs" class:active={$page.route.id === "/dogs"}>Dogs</a>
        <a href="/aboutUs" class:active={$page.route.id === "/aboutUs"}>About Us</a>
        <a href="/reviews" class:active={$page.route.id === "/reviews"}>Review</a>
        <div class = "login">
        {#if data.user}
            <a href="/profile" class:active={$page.route.id==="profile"}>Profile</a>
            
        {:else}
            <a href="/login" class:active={$page.route.id==="Login"}>Login</a>
            <a href="/signup" class:active={$page.route.id==="signup"}>Sign up</a>
        {/if}
        </div>
    </div>
</header>
<slot />
<footer class="Bottom">
    <p>WhiteBrooke</p>
    <p>|</p>
    <a href="mailto:Whitebrooke@hotmail.com">WhiteBrooke@hotmail.com</a>
    <p>|</p>
    <a href="tel:+55555555">+55555555</a>
    <p>|</p>
    <p>Eriksberg skede 2, 524 93 Herrljunga</p>
</footer>



<style>
    .login{
        margin-left: auto;
        display: flex;
        gap: 8px;
    }

    .header{
        display: flex;
        gap: 8px;
        margin: 20px;
    }
    .header a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    background-color: hsl(100, 61%, 81%);
    border: 3px solid hsl(183, 58%, 68%);
    color: black;
    text-decoration: none;
}

header .active {
    border: 3px solid hsl(153, 64%, 91%) ;
}

footer {
    height: 10rem;
    background-color: hsl(183, 58%, 68%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.Bottom {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: medium;
    font-style: italic;
    text-align: center;
    text-decoration: none;
    color: black;
}
footer a{
    color: black;
    text-decoration: none;
}
</style>