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
  hobbies: ['Подорожі', 'Фотографія', 'Читання', 'Кулінарія'],
  details: 'Любить активний відпочинок і навчання новим мовам.',
})

const showDetails = ref(false)

function ageGroupClass(age: number) {
  return {
    minor: age < 18,
    young: age >= 18 && age <= 30,
    adult: age >= 31 && age <= 50,
    senior: age > 50,
  }
}
</script>

<template>
  <div class="user-card" :class="ageGroupClass(user.dob.age)">
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

      <p v-if="user.dob.age > 18" class="user-card__row">
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

      <div class="user-card__hobbies">
        <span class="user-card__label">Хобі:</span>
        <ul class="user-card__hobby-list">
          <li v-for="hobby in user.hobbies" :key="hobby">{{ hobby }}</li>
        </ul>
      </div>

      <button class="user-card__toggle" @click="showDetails = !showDetails">
        {{ showDetails ? 'Приховати деталі' : 'Показати деталі' }}
      </button>
      <p v-show="showDetails" class="user-card__details">{{ user.details }}</p>
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
  border-left: 6px solid transparent;
}

.user-card.minor {
  border-left-color: #42b8f5;
}

.user-card.young {
  border-left-color: #4caf50;
}

.user-card.adult {
  border-left-color: #ff9800;
}

.user-card.senior {
  border-left-color: #9c27b0;
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

.user-card__hobby-list {
  margin: 4px 0 0;
  padding-left: 18px;
  font-size: 14px;
  color: #333;
}

.user-card__toggle {
  align-self: flex-start;
  margin-top: 8px;
  padding: 6px 12px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f5f5f5;
  cursor: pointer;
}

.user-card__details {
  margin: 4px 0 0;
  font-size: 13px;
  color: #555;
  font-style: italic;
}
</style>
