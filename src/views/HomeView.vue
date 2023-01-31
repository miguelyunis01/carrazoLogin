<template>
    <section>
      <div class="box-title">
        <h1>Ponte al volante y genera ganancias</h1>
        <p>Conduce en la plataforma que tiene la mayor cantidad de usuarios activos.</p>
        <a href="#">Conoce mas como utilizar nuestros servicios</a>
      </div>
      <div class="container-img">
        <img src="../assets/Carrazo.jpeg" alt="carro">
      </div>
    </section>
  </template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>

  section {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  .box-title {
    position: relative;
    background-color: white;
    width: 50%;
    height: 230px;
    top: 102px;
    right: -51px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
 
  .box-title h1{
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
  .box-title p {
    text-align: justify;
    padding-top: 20px;
    padding-bottom: 30px;
  }
  .box-title a {
    text-decoration: none;
    color: rgb(155, 155, 155);
    border-bottom: 1px solid rgb(155, 155, 155) ;
    padding-top: 10px;
  }
  .container-img{
    display: flex;
    width: 100%;
    justify-items: center;
  }
  img {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  @media (max-width: 450px){
    .box-title {
      width: 100%;
      position:sticky;
    }
  }

</style>

