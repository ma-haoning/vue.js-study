<template>
  <div class="produce">
    <img
      src="http://img.alicdn.com/bao/uploaded/i1/711882582/O1CN01LeVZDA1UwbDfMntKX_!!0-item_pic.jpg"
      alt
    />
    <span class="sp1">￥399.99</span>
    <span class="sp2">dickies连帽卫衣全棉休闲</span>
    <span class="sp3">dickies官方旗舰店</span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.produce {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  margin-right: 5px;
  margin-bottom: 5px;
}
.produce img {
  width: 270px;
}
span {
  display: inline-block;
  padding: 0 10px;
}
.sp1 {
  color: red;
  font-size: 20px;
}
.sp2 {
  font-size: 16px;
}
.sp3 {
  color: #ccc;
  text-decoration: underline;
  cursor: pointer;
}
</style>