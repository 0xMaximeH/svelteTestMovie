<script>
  import Header from './Header.svelte';
  import { onMount } from 'svelte';

  import { user } from "./store.js";

  let cards = [
    {genre:"HORROR", font:"kepler-std-semicondensed-dis, serif", shadowColor:"#9c2436",color:"#fbedda", imageUrl:"https://m.media-amazon.com/images/M/MV5BMTU3MDUxMDI0MV5BMl5BanBnXkFtZTgwMzk3OTg3MDI@._V1_.jpg"},
    {genre:"THRILLER", font:"Joane Stencil Regular // Sensaway", shadowColor:"#163d76",color:"#fffdfd", imageUrl:"https://m.media-amazon.com/images/I/71HLWqxllbL._AC_SY606_.jpg"},
    {genre:"ADVENTURE", font:"Helvetica", color:"#365669",shadowColor:"#6f8275", imageUrl:"https://m.media-amazon.com/images/M/MV5BNjQ0ODlhMWUtNmUwMS00YjExLWI4MjQtNjVmMmE2Y2E0MGRmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg"},
    {genre:"ACTION", font:"", color:"",shadowColor:"#163d76", imageUrl:"https://m.media-amazon.com/images/M/MV5BZTQ4YTk5NmUtOGEzNi00ZjY1LTg5ZjItNDUyOTk0YWJiZDFiXkEyXkFqcGdeQXVyNjA5ODQxMDI@._V1_FMjpg_UX1240_.jpg"},
    {genre:"ROMANCE", font:"", color:"white ",shadowColor:"#163d76", imageUrl:"https://m.media-amazon.com/images/M/MV5BMTQ0MTAwMDI1OF5BMl5BanBnXkFtZTgwNjUwMTA2MTE@._V1_.jpg"}
  ]

  let loading = true;
  let allmovies = []; 

  onMount(async () => {
        const response = await fetch('http://localhost:3000/movies/');
        allmovies = await response.json();
        console.log(allmovies);
        loading = false;
    })

  
</script>
<link rel="stylesheet" href="https://use.typekit.net/rbf8fzv.css">

<Header name="Joe"/>

<main>
    <h2>
      Films de la semaine
    </h2>
  
    <div class="weekly">
  
      {#each cards as card }
        <div class="card"
          style:color={card.color} 
          style:background-image={"url("+card.imageUrl+")"}
          style:font-family={card.font}
          style:--color={card.shadowColor}
          >
        
            <h4>{card.genre}</h4>
        </div>
      {/each}
  
    </div>

    <h2>
      Liste complète 
    </h2>
    {#if loading}
      <p> Loading...</p>
    {:else}
        <div class="allmovies">
          {#each allmovies as movie }
              <div class="smallcard"
                id={movie.id}
                style:background-image={"url("+movie.image+")"}
                >
                <a href="{movie.link}" target="_blank" rel="noreferrer">
                  <span style:display="none">a</span>
                </a>
              </div>
          {/each}
      </div> 
    {/if}

    <h2>
      Form 
    </h2>
    <form class="content">
      <label>Nom</label>
      <input type="text" bind:value={$user.name} />
      <label>E-mail</label>
      <input type="email" bind:value={$user.email} />
    </form>

</main>

<style>
  .card:hover {
    box-shadow: 0px 3px 6px var(--color),
                0px 15px 25px var(--color),
                 0 0 0 2px var(--color);
  }

  /*
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.04),
                0px 15px 25px rgba(0, 0, 0, 0.3),
                 0 0 0 2px var(--color);
  */
  
</style>