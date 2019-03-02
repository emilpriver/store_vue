<template>
    <footer>
        <div class="socials">
            <h1>Follow us at socials: </h1>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
        <div class="con">
            <div class="col">
                <img src="https://emilpriver-spaces.ams3.cdn.digitaloceanspaces.com/portfolio/vitlogotyp.png" />
            </div>
            <div class="col">
                <h3>Products</h3>
                <ul>
                    <li><a href="#">Hoodies</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Jeans</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Womens</h3>
                <ul>
                    <li><a href="#">Hoodies</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Jeans</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Mens</h3>
                <ul>
                    <li><a href="#">Hoodies</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Jeans</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Products</h3>
                <ul>
                    <li><a href="#">Hoodies</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Jeans</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
$cabin: 'Cabin', sans-serif;


footer{
    width: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;
    background: #1c1c1c;
    float: left;
    .socials{
        width: 100%;
        float: left;
        padding-top: 40px;
        padding-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #316940;
        margin-bottom: 50px;

        h1 {
            color: #fff;
            margin: 0px;
            font-weight: 500;
            font-size: 30px;
            text-transform: uppercase;
            margin-right: 20px;
        }

        a {
            font-size: 20px;
            margin-right: 20px;
            color: #fff;
            }
    }
    .con{
        max-width: 1600px;
        margin: 0px auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .col{
            flex: 1;

            img{
                max-width: 100%;
                max-height: 50px;
                display: block;
                height: auto;
                width: auto;;
            }

            h3{
                font-size: 17px;
                font-weight: 500;
                text-transform: uppercase;
                font-family: $cabin;
                color: #fff;
                text-align: left;
            }

            ul{
                padding-left: 0px;

                li{
                    width: 100%;
                    margin-bottom: 5px;
                    float: left;
                    font-size: 15px;
                    font-weight: 700;
                    list-style:none;
                    text-align: left;

                    a {
                        font-weight: 700;
                        font-size: 13px;
                        color: #fff;
                        text-decoration: none;
                        font-family: $cabin;
                    }
                }
            }
        }
        
    }
}
</style>

