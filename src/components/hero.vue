<template>
    <div id="hero" style="background-image:url(https://emilpriver-spaces.ams3.cdn.digitaloceanspaces.com/vue_store/hero_bg.jpeg)">
        <div class="container">
            <div class="wrapper">
                <h1>I'ts never to late</h1>
                <span>Inspired by our first reflective running shoe, recreated for the city streets, designed for the night </span>
                <div class="links">
                    <a href="#">Buy now</a>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
$cabin: 'Cabin', sans-serif;

#hero{
    width: 100%;
    float: left;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center center;
    background-size: cover;

    .container{
        max-width: 1600px;
        width: 100%;

        .wrapper{
            float: left;

            h1 {
                font-size: 50px;
                color: #fff;
                text-align: left;
                text-transform: uppercase;
            }

            span {
                font-size: 20px;
                color: #fff;
                width: 100%;
                float: left;
                margin-bottom: 50px;
                text-align: left;
                font-weight: 700;
                max-width: 500px;
            }
            .links{
                width: 100%;

                a{
                    float: left;
                    min-width: 150px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    border: 2px solid #fff;
                    font-family: $cabin;
                    font-weight: 600;
                    border-radius: 5px;
                    margin-right: 20px;
                    text-decoration: none;
                    font-size: 16px;
                    text-transform: uppercase;
                    
                    &:last-of-type {
                        margin-right: 0px;
                    }
                }
            }

        }
    }
}
</style>
