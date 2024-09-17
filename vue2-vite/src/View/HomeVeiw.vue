<template>
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/product">Go to Product</RouterLink>
      <RouterLink to="/ProductListing">Go to Prodcut listing</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </template>