<script lang="ts">
    export let data;
    let { images } = data;
    import { Carousel, CarouselTransition } from 'flowbite-svelte'
    import Fullscreen from "svelte-fullscreen";
    import { onMount } from 'svelte';

    let length = 11000

    onMount(() => {
    function handleClick() {
      document.documentElement.requestFullscreen();
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

</script>

<main>
  <div class="full-height" >
    <CarouselTransition {images} classDiv="overflow-hidden relative h-100" loop transitionType="fly" transitionParams="{{delay: 250, duration: 1000}}" showCaptions={false} showThumbs={false} showIndicators={false} slideControls={false} duration={length}/>
  </div>
</main>

<style>

html, body {
  height: 100%;
}

.full-height {
  height: 100%;
}
</style>