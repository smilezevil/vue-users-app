<script setup lang="ts">
import { computed, ref } from 'vue'
import type { User } from '../types/User'
import UserCard from './UserCard.vue'

const users = ref<User[]>([
  {
    id: 1,
    gender: 'female',
    name: { title: 'Mrs', first: 'Emma', last: 'Lampi' },
    location: { street: { number: 2304, name: 'Siilitie' }, city: 'Hausjärvi', state: 'Uusimaa', country: 'Finland', postcode: 98555 },
    email: 'emma.lampi@example.com',
    phone: '02-689-410',
    picture: '/users/user-1.jpg',
    dob: { date: '2001-03-08T01:39:19.084Z', age: 25 },
    hobbies: ['Подорожі', 'Фотографія', 'Читання', 'Кулінарія'],
    details: 'Любить активний відпочинок і навчання новим мовам.',
  },
  {
    id: 2,
    gender: 'male',
    name: { title: 'Mr', first: 'Aksel', last: 'Berg' },
    location: { street: { number: 12, name: 'Storgata' }, city: 'Bergen', state: 'Vestland', country: 'Norway', postcode: 5003 },
    email: 'aksel.berg@example.com',
    phone: '55-123-456',
    picture: '/users/user-2.jpg',
    dob: { date: '2009-05-14T00:00:00.000Z', age: 16 },
    hobbies: ['Футбол', 'Ігри'],
    details: 'Навчається в школі, грає у футбол за юнацьку команду.',
  },
  {
    id: 3,
    gender: 'female',
    name: { title: 'Ms', first: 'Chiara', last: 'Rossi' },
    location: { street: { number: 44, name: 'Via Roma' }, city: 'Milan', state: 'Lombardy', country: 'Italy', postcode: 20100 },
    email: 'chiara.rossi@example.com',
    phone: '02-987-654',
    picture: '/users/user-3.jpg',
    dob: { date: '1980-09-02T00:00:00.000Z', age: 45 },
    hobbies: ['Йога', 'Малювання'],
    details: 'Викладає йогу у вільний час.',
  },
  {
    id: 4,
    gender: 'male',
    name: { title: 'Mr', first: 'Hiroshi', last: 'Tanaka' },
    location: { street: { number: 7, name: 'Sakura St' }, city: 'Osaka', state: 'Osaka', country: 'Japan', postcode: 5300001 },
    email: 'hiroshi.tanaka@example.com',
    phone: '06-1234-5678',
    picture: '/users/user-4.jpg',
    dob: { date: '1963-01-20T00:00:00.000Z', age: 62 },
    hobbies: ['Садівництво', 'Шахи'],
    details: 'На пенсії, доглядає за садом.',
  },
  {
    id: 5,
    gender: 'female',
    name: { title: 'Mrs', first: 'Laura', last: 'Gomez' },
    location: { street: { number: 89, name: 'Calle Mayor' }, city: 'Madrid', state: 'Madrid', country: 'Spain', postcode: 28013 },
    email: 'laura.gomez@example.com',
    phone: '91-234-5678',
    picture: '/users/user-5.jpg',
    dob: { date: '1996-07-11T00:00:00.000Z', age: 29 },
    hobbies: ['Танці', 'Подорожі'],
    details: 'Обʼїздила понад 20 країн.',
  },
  {
    id: 6,
    gender: 'male',
    name: { title: 'Mr', first: 'Daniel', last: 'Kowalski' },
    location: { street: { number: 3, name: 'Krakowska' }, city: 'Warsaw', state: 'Masovian', country: 'Poland', postcode: '00-001' as unknown as number },
    email: 'daniel.kowalski@example.com',
    phone: '22-345-6789',
    picture: '/users/user-6.jpg',
    dob: { date: '1987-11-30T00:00:00.000Z', age: 38 },
    hobbies: ['Велоспорт', 'Кулінарія'],
    details: 'Захоплюється велопоходами вихідного дня.',
  },
  {
    id: 7,
    gender: 'female',
    name: { title: 'Miss', first: 'Ella', last: 'Novak' },
    location: { street: { number: 21, name: 'Hlavná' }, city: 'Bratislava', state: 'Bratislava', country: 'Slovakia', postcode: 81101 },
    email: 'ella.novak@example.com',
    phone: '02-456-789',
    picture: '/users/user-7.jpg',
    dob: { date: '2008-02-25T00:00:00.000Z', age: 17 },
    hobbies: ['Плавання', 'Музика'],
    details: 'Займається плаванням у місцевому клубі.',
  },
  {
    id: 8,
    gender: 'male',
    name: { title: 'Mr', first: 'Samuel', last: 'Okafor' },
    location: { street: { number: 15, name: 'Broad St' }, city: 'Lagos', state: 'Lagos', country: 'Nigeria', postcode: 100001 },
    email: 'samuel.okafor@example.com',
    phone: '1-234-5678',
    picture: '/users/user-8.jpg',
    dob: { date: '1971-06-05T00:00:00.000Z', age: 54 },
    hobbies: ['Читання', 'Гольф'],
    details: 'Керує власним бізнесом понад 20 років.',
  },
  {
    id: 9,
    gender: 'female',
    name: { title: 'Ms', first: 'Mei', last: 'Lin' },
    location: { street: { number: 56, name: 'Nanjing Rd' }, city: 'Shanghai', state: 'Shanghai', country: 'China', postcode: 200001 },
    email: 'mei.lin@example.com',
    phone: '21-345-6789',
    picture: '/users/user-9.jpg',
    dob: { date: '2003-04-18T00:00:00.000Z', age: 22 },
    hobbies: ['Фотографія', 'Каліграфія'],
    details: 'Вивчає традиційне мистецтво каліграфії.',
  },
  {
    id: 10,
    gender: 'male',
    name: { title: 'Mr', first: 'Erik', last: 'Larsson' },
    location: { street: { number: 9, name: 'Kungsgatan' }, city: 'Stockholm', state: 'Stockholm', country: 'Sweden', postcode: 11143 },
    email: 'erik.larsson@example.com',
    phone: '08-234-5678',
    picture: '/users/user-10.jpg',
    dob: { date: '1984-12-08T00:00:00.000Z', age: 41 },
    hobbies: ['Хокей', 'Риболовля'],
    details: 'Грає в хокей у аматорській лізі.',
  },
])

type GenderFilter = 'all' | 'female' | 'male'
type AgeFilter = 'all' | 'adult'
type SortKey = 'name-asc' | 'name-desc' | 'age-asc' | 'age-desc' | null

const genderFilter = ref<GenderFilter>('all')
const ageFilter = ref<AgeFilter>('all')
const sortKey = ref<SortKey>(null)

function fullName(user: User): string {
  return `${user.name.first} ${user.name.last}`
}

const visibleUsers = computed(() => {
  let list = users.value.filter((user) => {
    const genderOk = genderFilter.value === 'all' || user.gender === genderFilter.value
    const ageOk = ageFilter.value === 'all' || user.dob.age >= 18
    return genderOk && ageOk
  })

  if (sortKey.value === 'name-asc') {
    list = [...list].sort((a, b) => fullName(a).localeCompare(fullName(b)))
  } else if (sortKey.value === 'name-desc') {
    list = [...list].sort((a, b) => fullName(b).localeCompare(fullName(a)))
  } else if (sortKey.value === 'age-asc') {
    list = [...list].sort((a, b) => a.dob.age - b.dob.age)
  } else if (sortKey.value === 'age-desc') {
    list = [...list].sort((a, b) => b.dob.age - a.dob.age)
  }

  return list
})

function resetAll(): void {
  genderFilter.value = 'all'
  ageFilter.value = 'all'
  sortKey.value = null
}
</script>

<template>
  <div class="users">
    <div class="toolbar">
      <div class="toolbar__group">
        <button :class="{ active: genderFilter === 'all' }" @click="genderFilter = 'all'">Всі</button>
        <button :class="{ active: genderFilter === 'male' }" @click="genderFilter = 'male'">Чоловіки</button>
        <button :class="{ active: genderFilter === 'female' }" @click="genderFilter = 'female'">Жінки</button>
      </div>

      <div class="toolbar__group">
        <button :class="{ active: ageFilter === 'all' }" @click="ageFilter = 'all'">Всі</button>
        <button :class="{ active: ageFilter === 'adult' }" @click="ageFilter = 'adult'">18+</button>
      </div>

      <div class="toolbar__group">
        <button :class="{ active: sortKey === 'name-asc' }" @click="sortKey = 'name-asc'">Ім'я ↑</button>
        <button :class="{ active: sortKey === 'name-desc' }" @click="sortKey = 'name-desc'">Ім'я ↓</button>
        <button :class="{ active: sortKey === 'age-asc' }" @click="sortKey = 'age-asc'">Вік ↑</button>
        <button :class="{ active: sortKey === 'age-desc' }" @click="sortKey = 'age-desc'">Вік ↓</button>
      </div>

      <button class="toolbar__reset" @click="resetAll">Очистити все</button>
    </div>

    <p v-if="visibleUsers.length === 0" class="users__empty">Список юзерів пустий</p>

    <div v-else class="users__list">
      <UserCard v-for="user in visibleUsers" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<style scoped>
.users {
  width: 100%;
  max-width: 560px;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.toolbar__group {
  display: flex;
  gap: 6px;
}

.toolbar button {
  padding: 6px 14px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f5f5f5;
  cursor: pointer;
}

.toolbar button.active {
  background-color: #333;
  color: #fff;
  border-color: #333;
}

.toolbar__reset {
  margin-left: auto;
  padding: 6px 14px;
  font-size: 13px;
  border: 1px solid #e57373;
  border-radius: 6px;
  background-color: #fff;
  color: #e57373;
  cursor: pointer;
}

.users__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.users__empty {
  color: #666;
  font-style: italic;
}
</style>
