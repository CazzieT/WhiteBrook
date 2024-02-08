<div class="info">
    <h1>
        Hello and Welcome to WhiteBrooke!
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad molestiae tempore exercitationem, quos nihil. Doloremque architecto harum dolor perferendis voluptatibus inventore vitae in adipisci atque similique. Voluptate, laborum minima!</p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero amet dolorum eligendi deserunt adipisci, autem quam minus molestiae vel, necessitatibus debitis porro ut facere voluptate ipsa nesciunt. Eligendi, fugiat nihil.</p>
</div>

<div class="post">
    <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="">
    <div>
        <h2>Title</h2>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illo molestias sequi fugit ipsam assumenda a recusandae velit consequuntur aliquid! Blanditiis ipsam repellendus, distinctio enim expedita necessitatibus neque provident voluptas?</p>
    </div>
</div>

<style>
    h2{
        padding: 10px;
        text-align: center;
    }

.info{
    display: grid;
    text-align: center;
    padding: 20px;
    margin: 50px;
}
img{
    width: 40%;
    height: 40%;
    border-radius: 20%;
    margin-inline: auto;
}

.post p {
    padding-inline: 15px;
}

.post{
    box-sizing: border-box;
    width: 90%;
    display: flex;
    border-radius: 5px;
    padding: 10px;
    border: 3px solid hsl(153, 64%, 91%);
    margin-bottom: 20%;
    margin-inline: auto;
    max-width: 869px;
    padding-inline: 24px;
}
@media (max-width: 640px) {
	.post {
		flex-direction: column;
	}
}

</style>
