<script>
    import Grid from '../lib/sound/Grid.svelte';
    import Menu from '../lib/menu/Menu.svelte';
    import Popup from '../lib/popup/Popup.svelte';

    import soundRef from '../lib/index.js';
    import {listAll} from 'firebase/storage';

    let sounds = listAll(soundRef);
    let popupState = 'closed';
    let audioRef;
    
    function handlePopup(event){
        switch (event.detail.mode) {
            case 'edit':
                popupState = 'edit';
                break;
            case 'upload':
                popupState = 'upload';
                break;
            case 'close':
                popupState = 'closed';
                break;
            default:
                popupState = 'closed';
                break;
        }
    }

    function handleItemData(data){
        handlePopup(data.detail);
        audioRef = data.detail.detail.audioReference;
    }
</script>

<main>
    <Menu on:openPopup={handlePopup} />
    <h1>Future Ready Design</h1>
    <h2>Soundboard</h2>
    {#await sounds}
        <p>Loading</p>
    {:then sounds}
        <Grid on:itemData={handleItemData} {popupState} {sounds}/>
    {/await}
    <Popup {audioRef} {popupState} on:closePopup={handlePopup}/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;900&display=swap');
   
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: clamp(20px, 10vmin, 50px);
        font-weight: 900;
        
    }
    h2 {
       
        font-weight: 500;
        margin-bottom: 4rem;
    }
    h1, h2 {
        color: #ffffff;
        font-family: 'Outfit', sans-serif;
    }
  </style>