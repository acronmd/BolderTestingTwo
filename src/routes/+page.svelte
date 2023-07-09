<script lang="ts">
    export let data;
    let { images } = data;
    import { Carousel, CarouselTransition } from 'flowbite-svelte'
    import Fullscreen from "svelte-fullscreen";
    import { onMount } from 'svelte';

    let length = 14000

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
  <div class="carousel-container">
    <CarouselTransition
      {images}
      classDiv="overflow-visible relative h-100"
      loop
      transitionType="fly"
      transitionParams="{{ delay: 250, duration: 1000 }}"
      showCaptions={false}
      showThumbs={false}
      showIndicators={false}
      slideControls={false}
      duration={length}
    />
  </div>
</main>

<style>
  .carousel-container {
    scrollbar-width: none;
    height: 100%;
    
  }

  .carousel-container::-webkit-scrollbar {
    display: none;
  }
</style>