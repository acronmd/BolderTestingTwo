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
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  .carousel-container::-webkit-scrollbar {
    width: 10px;
  }

  .carousel-container::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .carousel-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  .carousel-container::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>