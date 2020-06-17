<template>
  <header>
    <img src="../assets/logo.png" alt="Logomarca">
    <div>
      <router-link :to="to">
        <LogInIcon v-if="feather === 'login'" class="icon" size="20"/>
        <ArrowLeftIcon v-else-if="feather === 'arrowleft'" class="icon" size="20"/>
        <p>{{btext}}</p>
      </router-link>
    </div>
  </header>
</template>

<script>
import { LogInIcon, ArrowLeftIcon } from 'vue-feather-icons'

export default {
  name: "Header",
  components: {
    LogInIcon,
    ArrowLeftIcon
  },
  props: ["btext", "feather", "to"]
};

</script>

<style scoped>
header {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header a {
  display: flex;
  color: var(--title-color);
  font-weight: 700;
}

header p {
  align-self: center;
}

.icon {
  margin-right: 8px;
  color: var(--primary-color);
}
</style>
