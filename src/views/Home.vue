<template>
  <section id="home">
    <Hero />
    
    <div id="products">
      <div class="con">

        <div class="row">

          <h2>For the men</h2>
          
          <Slick 
            ref="slick"
            :options="slickOptions"
            @reInit="reInit"
          >
            <div v-for="(product,index) in products" v-bind:key="index" class="col">
              <div class="thumb">
                <a :href="'/product/' + product.slug">
                  <img :src="product.thumbnail" />
                </a>
              </div>
              <div class="info">
                <h3>{{product.title}}</h3>
              </div>
            </div>
          </slick>

          <div class="carousell_buttons">
            <button v-on:click="prev"><i class="fas fa-arrow-left"></i> </button>
            <button v-on:click="next"><i class="fas fa-arrow-right"></i></button>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>

//modules
import axios from 'axios'
import Slick from 'vue-slick'
// @ is an alias to /src
import Hero from '../components/hero'
//import css
import '../../node_modules/slick-carousel/slick/slick.css';

export default {
  name: 'home',
  data: () => {
    return{
      products: [],
      slickOptions: {
        slidesToShow: 5,
        infinite: true,
        arrows:false,
      },
    }
  },
  components: {
    Hero,
    Slick
  },
  mounted () {

    axios.get('http://localhost:5000/api/products')
    .then(response => (this.products = response.data.products))
    .then(response => {
      this.reInit()
    })
    .then(() => {console.log(this.products)})

  },
  methods: {

    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick.reSlick();
        });
    }

  },
   beforeUpdate() {
        if (this.$refs.slick) {
            this.$refs.slick.destroy();
        }
    },
    updated() {
        this.$nextTick(function () {
            if (this.$refs.slick) {
                this.$refs.slick.create(this.slickOptions);
            }
        });
    },

};
</script>


<style lang="scss">
$cabin: 'Cabin', sans-serif;

#products {
  width: 100%;
  float: left;
  padding-top: 50px;
  padding-bottom: 50px;

  .con {
    max-width: 1600px;
    margin: 0px auto;
    .row {
      width: 100%;
      margin-left: -10px;
      margin-right: -10px;

      h2{
        flex: 0 0 100%;
        text-align: left;
        padding-left: 10px;
        text-transform: uppercase;
        color: #000;
      }
      .col{
        box-sizing: border-box;
        padding: 10px;

        .thumb {
          max-width: 100%;
          img{
            max-width: 100%;
            margin: 0px auto;
            display: block;
          }
        }
        .info {
          text-align: left;
          font-family: $cabin;
        }
      }

      .carousell_buttons {
        width: 100%;
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;

        button{
          float: left;
          font-size: 25px;
          color: #8a8282;
          background: transparent;
          outline: none;
          border: none;
          cursor: pointer;


          &:last-of-type{
            float: right;
          }
        }
      }
    }
  }
}
</style>
