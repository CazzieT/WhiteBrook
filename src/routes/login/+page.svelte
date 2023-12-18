<!-- routes/login/+page.svelte -->
<script lang="ts">
	import { enhance } from "$app/forms";
</script>


<form method="post" use:enhance>
    <div>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email"><br>
        <label for="Password">Password:</label>
        <input type="password" id="password" name="password"><br>
        <button>Login</button>
    </div>
</form>



<style>
    div{
        align-items: center;
        text-align: center;
    }
    form {
        padding: 10px;
    }
    label{
        margin: 5px;
    }
    input{
        margin: 5px;

    }
</style>