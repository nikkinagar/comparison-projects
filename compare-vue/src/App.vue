<template>
  <div id="app">
   <nav class="navbar has-shadow">
     <div class="container">
      <div class="navbar-brand">
        <div class="navbar-start">
          <a class="navbar-item">MyCompany</a>        
        </div>

        <div class="navbar-burger burger"  v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </div>
      <div class="navbar-end navbar-menu" 
      v-bind:class="{'is-active': isActive}">
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="faq" class="navbar-item r-item">Features</router-link>
          <router-link to="faq" class="navbar-item r-item">About </router-link>
          <router-link to="faq" class="navbar-item r-item">FAQ </router-link>
          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>Join now!</span>
              </a>
            </p>
          </div>
        </div>
      </div>
   </nav>
  <router-view></router-view>

  <footer class="footer is-primary">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p> And this right here is a spiffy footer where you can put stuff.</p>
        </div>
        <div class="column has-text-right">
          <a class="icon" href="#"><i class="fab fa-facebook"></i></a>
          <a class="icon" href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">

@import '../node_modules/bulma/bulma.sass'
@import 'mq.sass'

.navbar
  background-color: #383838
  a:hover
    color: gray
  
.navbar-start a
  color: #fff
  font-weight: bold

a.r-item
  color: #C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1
.navbar-burger 
  color: #C1C1C1

footer
  
  color: #fff
  background: linear-gradient(to right, $info, $primary) !important

.column
  .icon
    color: $light
    margin-left: 20px
  
</style>
