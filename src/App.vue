<template>
  <div id="app">
    <header id="nav">

      <div class="con">

        <div class="logo">
          <img src="https://emilpriver-spaces.ams3.cdn.digitaloceanspaces.com/logo.png" />
        </div>
        
        <nav>
          <router-link to="/">Home</router-link> 
          <router-link to="/about">About</router-link>
        </nav>

        <div class="search">
          <i class="fas fa-search"></i>
        </div>

        <div class="cart">
          <i class="fas fa-shopping-cart"></i>
        </div>

      </div>

    </header>

    <router-view/>

  </div>
</template>

<style lang="scss">

$cabin: 'Cabin', sans-serif;

body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header#nav {
  width: 100%;
  float: left;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);

  .con {
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;

    .logo {
      height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 0 0 200px;
      justify-self: flex-start;

      img{
        max-width: 300px;
        max-height: 50px;
        display: block;
        height: auto;
        width: auto;
      }

    }

    nav {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      justify-self: flex-start;

      a{
        margin-right: 20px;
        color: #626060;
        text-decoration: none;
        font-weight: 700;
        font-size: 16px;
        transition: all 0.3s;
        text-transform: uppercase;
        font-family: $cabin;

        &:hover{
          color: #000;
        }
      }

    }

    .cart {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 100px;
      justify-self: flex-end;
    }

    .search {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 100px;
      justify-self: flex-end;
    }

  }

}


</style>
