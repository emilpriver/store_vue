<template>
    <div class="products-carousell">
      <div class="con">

        <div class="row">

          <h2>Most popular shoes</h2>
          
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
            <button v-on:click="prev"><img src="https://img.icons8.com/ios/50/000000/back.png"> </button>
            <button v-on:click="next"><img src="https://img.icons8.com/ios/50/000000/forward.png"></button>
          </div>

        </div>

      </div>
    </div>
</template>


<style lang="scss">
$cabin: 'Cabin', sans-serif;

//slider carousell
.products-carousell {
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
        color: #3c3a3a;
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

          img {
            max-height: 30px;
            height: auto;
            width: auto;
            display: block;
          }


          &:last-of-type{
            float: right;
          }
        }
      }
    }
  }
}
</style>

<script>
//import css
import '../../node_modules/slick-carousel/slick/slick.css';
//modules
import Slick from 'vue-slick'

export default {
    name: 'single_carousell_product',
    props: ['products'],
    data: () => {
        return {
            slickOptions: {
                slidesToShow: 5,
                infinite: true,
                arrows:false,
                cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
                autoplay: true
            },
        }
    },
    components: {
    Slick
    },
    methods: {
    //first slider
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
    },

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
}
</script>