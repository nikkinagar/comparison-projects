<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> {{ heading }}</h1>
            <div class="is-two-thirds column is-paddingless">
              <h2 class="subtitle is-4">{{ subheading}}</h2>
            </div>
        </div>
        <a class="button is-medium is-primary" id="learn"> Learn more"</a>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns pd is-desktop">
            <div class="column is-1 has-text-centered">
              <i class= "fa fa-cog is-primary"></i>
            </div>
            <div class="column is-one-third-desktop">
              <p class="title"><strong>We provider superior logistics so that your business can succeed in a crazy world.</strong></p>
            </div>
            <div class="column">
              <p>The cow jumped over the moon.</p>
            </div>
          </div>
        </div>

        <div class="columns pd">
          <div class="column ">
            <div class="card">
              <div class="card-content">
                <p class="title">I think it's an absolutely excellent tool for a business to learn to fly.</p>
                <p class="subtitle"> -Nikki Nagar</p>
                </div>
              </div>
          </div>
            <div class="column ">
            <div class="card">
              <div class="card-content">
                <p class="title">I think it's an absolutely excellent tool for a business to learn to fly.</p>
                <p class="subtitle"> -Nikki Nagar</p>
                </div>
              </div>
          </div>
            <div class="column ">
            <div class="card">
              <div class="card-content">
                <p class="title">I think it's an absolutely excellent tool for a business to learn to fly.</p>
                <p class="subtitle"> -Nikki Nagar</p>
                </div>
              </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      heading: 'Soaring to new heights',
      subheading: "Learning to fly made easy"
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.hero 
  background: url('../assets/beach.png')
  background-size: cover
  .title
    +mobile
      font-weight: bold
      font-size: 1rem
    +tablet
      font-size: 1.5rem
    +desktop
      font-size: 1.75rem

h2  
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop 
    margin-bottom: 2rem

.pd
  +tablet 
    padding: 2em 0
</style>
