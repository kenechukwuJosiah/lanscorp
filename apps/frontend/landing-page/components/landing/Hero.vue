<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-4xl lg:text-6xl xl:text-6xl font-bold lg:tracking-tight">
        Learn. Grow. Unlock Premium Knowledge.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Welcome to Lanscorp — your all-in-one subscription-based learning hub.
        <wbr /> Whether you're an enthusiast or a professional, our platform
        delivers premium content, tutorials, and resources tailored to your
        growth.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink
        >
      </div>
    </div>
  </main>
</template>
