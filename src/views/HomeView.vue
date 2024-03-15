<template>
  <div class="container">
    <div class="box">
      <p>Welcome to</p>
      <p>Mershad Restaurant</p>
    </div>
    <div id="vl" class="box"></div>
    <div class="box">
      <p id="logo">MR</p>
    </div>
  </div>
  
</template>

<style>
  .box {
    display: inline-block;
    text-align: center;
    padding-left: 5%;
    padding-right: 10%;
    margin-bottom: -10%;
    margin-top: 10%;
  }

  p{
    font-size: 50px;
  }

  #logo {
    font-size: 100px;
  }

  #vl {
  border-left: 6px solid green;
  height: 500px;
  }

  .container {
        width: 100%;
        text-align: center; /* Centers the elements horizontally */
    }
</style>
