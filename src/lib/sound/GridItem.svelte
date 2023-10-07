<script> 
    export let sound;
    
    function playSound(sound){
        let audio = new Audio("src/lib/files/" + sound + ".mp3");
        audio.play();
    }
</script>

<button on:click={playSound(sound)} class="item">
    <p>{sound}</p>
</button>

<style>
.item {
    display: block;
    border-radius: 12px;
    padding: 2rem;
    aspect-ratio: 1/1;
    border: none;
    background-color: #26191A;
 
}
.item p {
    font-family: 'outfit', sans-serif;
    font-weight: 500;
    color: #fff;
    font-size: 1rem;
}

</style>