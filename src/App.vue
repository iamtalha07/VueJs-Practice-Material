<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <announcement></announcement>
      <app-article></app-article>
      <hr>
      <app-contact>
        <!-- Default slot -->
        <p>Some content</p> 
        <p slot="top">Contact us and one of our representative will get back to you as soon as possible.</p>
        <p slot="bottom">Please do not share any sensitive information.</p>
      </app-contact>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>