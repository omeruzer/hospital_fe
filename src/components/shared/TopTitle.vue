<template>
  <div>
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="row">
          <div class="col-12 col-xl-8 mb-4 mb-xl-0">
            <h3 class="font-weight-bold">{{title}}</h3>
            <h6 class="font-weight-normal mb-0">{{subtitle}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title','subtitle']
};
</script>

<style lang="scss" scoped></style>
