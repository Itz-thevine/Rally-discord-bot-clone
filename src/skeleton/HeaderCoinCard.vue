<template>
  <div role="status" class="flex animate-pulse">
    <div class="bg-slate-300 w-8 h-8 md:w-11 md:h-11 rounded-full flex justify-center items-center">
       
     </div>
     
     <div class="flex ml-2">
       <div >
           <p class="bg-slate-300 w-[30px] h-[15px]"></p>
           <p class="font-bold md:text-xl bg-slate-300 w-[60px] h-[15px] mt-3"></p>
       </div>
       <div class="flex items-center ml-1" >
           <font-awesome-icon icon="fa-solid fa-caret-down" class=" text-slate-300 w-3 h-3 md:w-6 md:h-6" />
           <p class="bg-slate-300 w-[40px] h-[15px] ml-1"></p>
       </div>
     </div>
    
  </div>
  </template>
  
  <style >
  .profile-image img {
    width: 100%;
    padding-top: 100%;
    animation: pulse-bg 1s infinite;
  }
  
  .profile-info span {
    width: 100%;
    height: 16px;
    display: block;
    animation: pulse-bg 1s infinite;
  }
  
  .profile-info h3 {
    width: 250px;
    height: 24px;
    animation: pulse-bg 1s infinite;
  }
  
  .profile-info p {
    width: 80%;
    height: 16px;
    animation: pulse-bg 1s infinite;
  }
  
  @keyframes pulse-bg {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #eaeaea;
    }
    100% {
      background-color: #eee;
    }
  }
  </style>
  