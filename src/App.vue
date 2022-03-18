<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" @click.prevent="activeView='app-home'">Project Name</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="activeView='app-home'">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="activeView='app-about'">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="activeView='app-contact'">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="jumbotron">
        <keep-alive>
          <component :is="activeView"></component>
        </keep-alive>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeView: 'app-home'
    }
  }
}
</script>