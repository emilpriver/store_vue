<template>
    <header id="nav">

      <div class="con">

        <div class="logo">
          <a href="/">
            <img src="https://emilpriver-spaces.ams3.cdn.digitaloceanspaces.com/logo.png" />
          </a>
        </div>
        
        <nav>
          <router-link to="/">Home</router-link> 
          <router-link to="/for-men">Men</router-link> 
          <router-link to="/for-women">Women</router-link>
          <router-link to="/for-kids">Kids</router-link>
          <router-link to="/new-stuffs">New Stuffs</router-link>
          <router-link to="/latest-drops">Latest Drops</router-link>
        </nav>

        <div class="search">
          <i class="fas fa-search"></i>
        </div>

        <div class="cart">
          <i class="fas fa-shopping-cart"></i>
        </div>

      </div>

    </header>
</template>
