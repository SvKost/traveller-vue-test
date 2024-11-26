<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white text-center">
        <slot></slot>
      </div>
    </section>
    <section class="flex-1">
      <img class="w-full h-full object-cover" src="../assets/img/static-map.png" alt="" />
    </section>
  </main>
</template>
