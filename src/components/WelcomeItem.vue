<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  padding: 15px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
}

.item:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(99, 102, 241, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-primary, #6366f1);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.item:hover i {
  color: var(--color-accent, #f59e0b);
  background: rgba(245, 158, 11, 0.15);
  border-color: var(--color-accent, #f59e0b);
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--text-primary, #f8fafc);
  font-family: var(--font-primary), sans-serif;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 1.5rem 1.5rem 1.5rem calc(var(--section-gap) / 2);
    border-radius: 0;
    border: none;
    background: transparent;
  }
  
  .item:hover {
    background: rgba(255, 255, 255, 0.02);
    box-shadow: none;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(13, 17, 29, 0.8);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
