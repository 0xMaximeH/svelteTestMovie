<script>
  export let name;
</script>

<header>
<h1> Letterboxperso de {name} </h1>
  <ul>
    <li> <a href="#"> Home</a> </li>
    <li> <a href="#"> Genre</a> </li>
    <li> <a href="#"> Aléatoire</a> </li>
  </ul>
</header>

<style>

ul {
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding-right: 2em;
}

a {
  text-decoration: none;
  color: inherit;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Segoe UI";
  
  
  padding: 0.5em;
  font-weight: 700;
  border-bottom: 0.063rem solid rgba(0,0,0,0.2);
  color: black;
}

h1 {
  font-size: 23px;
  padding-left: 2rem;
}

</style>