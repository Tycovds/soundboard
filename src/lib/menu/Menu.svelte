<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    
    let isOpen = false;

    function openPopup(mode){
        dispatch('openPopup', {mode: mode});
    }
    
</script>

<div class="menu">
    <div class={isOpen ? 'clipped wrapperOpen' : 'clipped'}>
        <div class={isOpen ? 'wrapper open' : 'wrapper '}>
            <div on:click={(e) => {isOpen = !isOpen}} class="menu-item" >
                <img src="/Menu.svg" alt="menu icon" />
            </div>
            <div class="menu-item" on:click={() => {openPopup('edit')}}>
                <img src="/Edit.svg" alt="menu icon" />
            </div>
            <div class="menu-item" on:click={() => {openPopup('upload')}}>
                <img src="/Upload.svg" alt="menu icon" />
            </div>
            
        </div>
    </div>
    <svg class="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M0,0 H1 V0.87 C1,0.942,0.776,1,0.5,1 V1 C0.224,1,0,0.942,0,0.87 V0"></path>
        </clipPath>
    </svg>
</div>

<style>
.menu {
    position: absolute;
    top: 0;
    left: 2rem;
}
    
.wrapper {
    width: 56px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 27px;
    align-items: center;
    top: 168px;
    transition: top 400ms ease;
}

.open{
    top: 39px;
}


.svg {
  position: absolute;
  width: 0;
  height: 0;

}

.menu-item {
    color: #fff;
    width: 38px;
    height: 38px;
    background: #a6a6a6;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
}

.clipped {
  width: 56px;
  height: 216px;
  -webkit-clip-path: url(#my-clip-path);
  clip-path: url(#my-clip-path);
  position: relative;
  background: #ffffff44;
  top: -129px;
  transition: top 400ms ease;
}

.wrapperOpen{
    top: 0px;
}
</style>