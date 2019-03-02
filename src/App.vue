<template>
  <div id="app">
    
    <Header />

    <router-view/>

    <Footer />

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
  z-index: 20;
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
      border-right: 1px solid #eee;

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
      justify-content: flex-start;
      padding-left: 20px;
      box-sizing: border-box;
      align-items: center;
      flex: 1;
      justify-self: flex-start;

      a{
        margin-right: 50px;
        color: #626060;
        text-decoration: none;
        font-weight: 700;
        font-size: 12px;
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

<script>
import Footer from './components/footer'
import Header from './components/header-menu'
export default {
  components: {
    Footer,
    Header
  }
}
</script>
