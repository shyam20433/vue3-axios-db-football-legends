<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.about {
  background: var(--glass-bg, rgba(20, 26, 46, 0.65));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 20px;
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
  box-shadow: var(--shadow-premium, 0 10px 40px -10px rgba(0, 0, 0, 0.7));
}

.about h1 {
  font-family: var(--font-primary), sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}
