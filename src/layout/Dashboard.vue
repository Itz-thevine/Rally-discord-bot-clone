<template>
    <div class="w-screen text-slate-400">
        <div class="min-h-screen w-1/5 bg-slate-800 drop-shadow-xl hidden fixed  lg:flex">
            <div class="min-h-full w-16 bg-slate-700 drop-shadow-xl flex flex-col items-center pt-5" >
                <div class="bg-slate-800 w-14 h-14 rounded-full flex ">
                    <font-awesome-icon icon="fa-regular fa-circle-user" class="w-14 h-14"/>
                </div>
                <div class="px-1 my-3 flex justify-center w-full">
                    <hr class="w-full h-1 bg-slate-800 border-none ">
                </div>
                <div  role="button" class="mb-3 bg-slate-800 h-11 w-11 hover:!text-red-400    rounded-full flex justify-center items-center">
                    <font-awesome-icon icon="fa-solid fa-rotate" class="w-7 h-7"/>
                </div>
                <div role="button" class="mb-3 bg-slate-800 hover:!text-red-400  h-11 w-11 rounded-full flex justify-center items-center">
                    <font-awesome-icon icon="fa-solid fa-plus" class="w-7 h-7  "/>
                </div>
            </div>
            <div class="p-5 flex items-center flex-col">
                <div class="flex items-center">
                    <div class="h-14 w-14 bg-slate-900 rounded-full">
                        <img src="https://rallybot.app/img/rallyLogo.459018c0.svg" alt="" class="h-14 w-14">
                    </div>
                    <p class="text-slate-500 ml-3 text-xl font-black">Rallybot</p>
                </div>
                <div class="mt-16 flex justify-start items-start w-full">
                    <p class="ml-4 text-slate-500 text-lg font-semibold">MAIN</p>

                </div>
            </div>
        </div>
        <div class="ml-0 lg:ml-20p">
            <div class="w-full bg-slate-800 h-20 px-5 lg:px-10 flex items-center justify-between">
                <div class="flex items-center md:mr-0">
                    <div class="flex lg:hidden mr-3">
                        <font-awesome-icon icon="fa-solid fa-bars" class=" w-6 h-6" />
                    </div>
                    <div class="bg-slate-900 w-8 h-8 md:w-11 md:h-11 rounded-full flex justify-center items-center">
                        <img src="https://rallybot.app/img/RLY.1014eb23.svg" alt="coin" class="h-10 w-10">
                    </div>
                    <div class="flex ml-2">
                        <div >
                            <p class="font-bold text-xs md:text-base">$RLY</p>
                            <p class="font-bold md:text-xl">$0.178</p>
                        </div>
                        <div class="flex items-center ml-1 text-red-400">
                            <font-awesome-icon icon="fa-solid fa-caret-down" class=" w-3 h-3 md:w-6 md:h-6" />
                            <p class="text-xs md:text-base">-3.20%</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="mr-3">
                        <font-awesome-icon icon="fa-solid fa-sun" class="w-4 h-4 md:w-5 md:h-5"/>
                    </div>
                    <div class="mr-3">
                        <font-awesome-icon icon="fa-regular fa-bell" class="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div class="">
                        <p class="md:text-xl font-bold">Login</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>