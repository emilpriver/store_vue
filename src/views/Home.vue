<template>
  <section id="home">
    <Hero />
    
    <!-- products carousell -->
    
    <singleCarousellProduct :products="products" />
    
    <!-- end products carousell -->

    <div id="new-stuffs-blocks">
      
      <div class="row">
        
        <a v-for="(block,index) in blocks" v-bind:key="index" :href="'/' + block.slug">
          <div class="block" :style="'background-image:url('+ block.thumbnail +')'">
            <div class="wrapper">
              <h1>{{block.title}}</h1>
            </div>
          </div>
        </a>

      </div>

    </div>

    <!-- products carousell -->
    
    <singleCarousellProduct :products="products" />
    
    <!-- end products carousell -->

    
  </section>

</template>


<style lang="scss" scoped>
$cabin: 'Cabin', sans-serif;
//products block
#new-stuffs-blocks {
  width: 100%;
  float: left;
  padding: 10px;
  box-sizing: border-box;
  background: #f3eded;

  .row{
    width: 100%;
    display: flex;
    flex-flow: wrap row;

    a {
      flex: 1 0 50%;
      text-decoration: none;
      padding-right: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;

      &:nth-child(2n + 2){
        padding-right: 0px;
      }
      &:last-of-type{
        padding-right: 0px;
      }

      .block{
        min-height: 500px;
        width: 100%;
        background-position: center center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        position: relative;

        &::before{
          content: " ";
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.904));
          position: absolute;
        }

        .wrapper{
          z-index: 1;
          h1{
            color: #fff;
            font-family: $cabin;
            font-weight: 700;
            text-decoration: none;
            font-size: 30px;
            text-transform: uppercase;
          }
        }
      }
    }
  }
}

</style>

<script>

//modules
import axios from 'axios'
// @ is an alias to /src
import Footer from '../components/footer'
import Hero from '../components/hero'
import singleCarousellProduct from '../components/single_carousell_products'

export default {
  name: 'home',
  data: () => {
    return{
      products: null,
      blocks: null,
    }
  },
  components: {
    Hero,
    singleCarousellProduct,
    Footer
  },
  mounted () {
    //products
    axios.get('http://localhost:5000/api/products')
    .then(response => (this.products = response.data.products))

    //blocks
    axios.get('http://localhost:5000/api/blocks/front_page')
    .then(response => (this.blocks = response.data.blocks))
    .catch(err => console.log(err))

  }
};
</script>