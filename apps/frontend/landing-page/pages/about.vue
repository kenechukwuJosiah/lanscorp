<template>
  <section class="px-6 py-16 max-w-6xl mx-auto">
    <div class="mb-12">
      <h1 class="text-4xl lg:text-6xl xl:text-6xl font-bold lg:tracking-tight">
        Learn. Grow. Unlock Premium Knowledge.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Welcome to <strong>Lanscorp</strong> — your all-in-one
        subscription-based learning hub. <wbr /> Whether you're an enthusiast or
        a professional, our platform delivers premium content, tutorials, and
        resources tailored to your growth.
      </p>
    </div>

    <div class="space-y-8 text-slate-700">
      <h2 class="text-2xl font-semibold">About This Project</h2>
      <p>
        This platform is part of my ongoing
        <strong>AWS Cloud Project Series</strong>, designed to demonstrate
        real-world applications of modern cloud-native development.
      </p>

      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Microservices Orchestration:</strong> Powered by AWS ECS
          (Elastic Container Service)
        </li>
        <li>
          <strong>Containerization:</strong> Each service runs in isolated
          Docker containers
        </li>
        <li>
          <strong>Image Storage:</strong> Built images are pushed to AWS ECR
          (Elastic Container Registry)
        </li>
        <li>
          <strong>Infrastructure as Code:</strong> Provisioned and managed with
          AWS CloudFormation
        </li>
        <li>
          <strong>Backend APIs:</strong> Developed with NestJS, structured for
          scalability and modularity
        </li>
        <li>
          <strong>Frontend Apps:</strong> Built using Nuxt.js for a fast, modern
          user experience
        </li>
        <li>
          <strong>Monorepo Architecture:</strong> Managed with Turborepo for
          unified development across services
        </li>
      </ul>

      <p>
        From seamless authentication and content delivery to role-based access
        control and subscription billing, every part of Lanscorp reflects
        cloud-first design thinking.
      </p>
    </div>
  </section>
</template>

<script>
definePageMeta({
  layout: "landing",
});
</script>
