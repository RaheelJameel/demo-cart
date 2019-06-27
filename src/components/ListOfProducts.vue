<template>
  <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
      <div class="product-name">{{product.name}}</div>
      <img style="width: 250px; height: 250px" :src="product.image" />
      <div class="product-price">
        <span>
          Rs: {{product.price}}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list-of-products",
  props: ['products']
};
</script>

<style scoped>
.listOfProducts {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.product {
  width: 300px;
  background-color: #fff;
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}

.product-name {
  font-size: 1.2em;
  font-weight: normal;
}

.product-name:hover {
  cursor: pointer;
  text-decoration: underline;
}

.product-price {
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
</style>
