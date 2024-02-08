<div class="info">
    <h1>About us</h1>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ab ipsam et dicta eligendi culpa suscipit repudiandae pariatur, necessitatibus blanditiis dolorum. Voluptatem quibusdam nulla exercitationem eveniet sint repellat et quasi?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae nulla rem dicta. Placeat exercitationem totam facere eveniet laboriosam excepturi recusandae ratione libero, alias quis laudantium et numquam? Laudantium, deserunt?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt quod, itaque nulla aut harum eius voluptas consectetur sunt exercitationem distinctio sed cumque explicabo quisquam dolore, blanditiis molestiae illum tenetur.</p>
    </div>

<div class="main">

    <div class="post">
        <div class="post-header">
            <img class="pfp" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="">
            <img class="rate" src="https://cdn.freebiesupply.com/logos/large/2x/thumbs-up-facebook-logo-png-transparent.png" alt="thumbs_up">
            <h2>Title</h2>
        </div>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illo molestias sequi fugit ipsam assumenda a recusandae velit consequuntur aliquid! Blanditiis ipsam repellendus, distinctio enim expedita necessitatibus neque provident voluptas?</p>
    </div>
<div class="post">
    <div class="post-header">
        <img class="pfp" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="">
        <img class="rate" src="https://cdn.freebiesupply.com/logos/large/2x/thumbs-up-facebook-logo-png-transparent.png" alt="thumbs_up">
        <h2>Title</h2>
    </div>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illo molestias sequi fugit ipsam assumenda a recusandae velit consequuntur aliquid! Blanditiis ipsam repellendus, distinctio enim expedita necessitatibus neque provident voluptas?</p>
</div>
<div class="post">
    <div class="post-header">
        <img class="pfp" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="">
        <img class="rate" src="https://cdn.freebiesupply.com/logos/large/2x/thumbs-up-facebook-logo-png-transparent.png" alt="thumbs_up">
        <h2>Title</h2>
    </div>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illo molestias sequi fugit ipsam assumenda a recusandae velit consequuntur aliquid! Blanditiis ipsam repellendus, distinctio enim expedita necessitatibus neque provident voluptas?</p>
</div>

</div>

<style>

.pfp{
    width: 150px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
}
.rate {
    width: 30px;
    height: 30px;
    border-radius: none;
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

.post-header {
display: flex;
place-items: center;
gap: 15px;
}

.main{
    margin-inline: 15px;
    display: grid;
    gap: 1rem;
}
.info{
    display: grid;
    text-align: center;
    padding: 20px;
    margin: 50px;
}

@media (min-width: 640px) {
	.main {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 920px) {
	.main {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>