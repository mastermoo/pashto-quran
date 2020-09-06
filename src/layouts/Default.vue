<template>
  <main>
    <slot />
    <footer>
      <span>
        Tarjuma by Abdulwali Khan |
        Provided by
        <a href="https://tolafghan.com">Tolafghan.com</a>
      </span>
    </footer>
  </main>
</template>

<style>
footer {
  font-size: 0.75rem;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg);
  border-top: 1px solid var(--border-color);
  margin-top: -1px;
  padding: 20px;
  z-index: 10;
  text-align: center;
}
</style>