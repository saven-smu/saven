<template>
  <div class="navbar bg-primary">
    <div class="flex-1">
      <router-link to="/"><img src="https://cdn.discordapp.com/attachments/853567678479597578/1028884890185379910/saven_logo.png"
        width="120" height="60" /></router-link>

    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><a>
            <router-link to="/leaderboard">Leaderboard</router-link>
          </a></li>
        <li tabindex="0">
          <!-- the hover part idk why its not staying when i hover over it :sob: -->
          <!-- also the hover box goes under the artwork idk how to fix that will relook -->
          <a>
            Hover Me
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Du du du du</a></li>
            <li><a>Dududu du</a></li>
          </ul>
        </li>
        <li><a>About Us</a></li>
        <li>
          <router-link to="/login">
            <a class="btn btn-secondary">Sign Up</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
