<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '../types/User'

const user = ref<User>({
  id: 1,
  gender: 'female',
  name: {
    title: 'Mrs',
    first: 'Emma',
    last: 'Lampi',
  },
  location: {
    street: {
      number: 2304,
      name: 'Siilitie',
    },
    city: 'Hausjärvi',
    state: 'Uusimaa',
    country: 'Finland',
    postcode: 98555,
  },
  email: 'emma.lampi@example.com',
  phone: '02-689-410',
  picture: 'https://randomuser.me/api/portraits/women/87.jpg',
  dob: {
    date: '2001-03-08T01:39:19.084Z',
    age: 25,
  },
})
</script>

<template>
  <div class="user-card">
    <img
      class="user-card__photo"
      :src="user.picture"
      :alt="`${user.name.first} ${user.name.last}`"
    />

    <div class="user-card__info">
      <h2 class="user-card__name">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h2>

      <p class="user-card__row">
        <span class="user-card__label">Стать:</span>
        {{ user.gender === 'female' ? 'Жінка' : 'Чоловік' }}
      </p>
      <p class="user-card__row">
        <span class="user-card__label">Вік:</span> {{ user.dob.age }} років
      </p>
      <p class="user-card__row">
        <span class="user-card__label">Локація:</span>
        {{ user.location.city }}, {{ user.location.country }}
      </p>
      <p class="user-card__row">
        <span class="user-card__label">Email:</span> {{ user.email }}
      </p>
      <p class="user-card__row">
        <span class="user-card__label">Телефон:</span> {{ user.phone }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  display: flex;
  gap: 20px;
  max-width: 480px;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.user-card__photo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.user-card__info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.user-card__name {
  margin: 0 0 4px;
  font-size: 20px;
  color: #1a1a1a;
}

.user-card__row {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.user-card__label {
  font-weight: 600;
  color: #666;
}
</style>
