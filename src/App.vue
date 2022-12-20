<template>
  <div class="window"><!--  class="grid" -->
    <aside class="aside "><!-- col-2 -->
      <div class="aside__box">
        <div class="aside__box__menu">
          <img src="@/assets/images/menu.svg" alt="" class="aside__box__menu-img" @click="menuOpened=!menuOpened">
        </div>
        <div class="aside__box__items">
          <div class="aside__box__item" v-for="(item, index) in menu" :class="{ 'menuClose':!menuOpened, 'choiceItem': itemOpen==index}" @click="changePage(index)" >
            <img :src="`src/assets/images/${item.img}.svg`" alt="" class="aside__box__item-img" :class="{'choiceItem__img': itemOpen==index}">
            <span class="aside__box__item-text" v-show="menuOpened" :class="{'choiceItem__text': itemOpen==index}">{{ item.title }}</span>
            <!-- <RouterLink :to="item.link" class="aside__box__item-text" v-show="menuOpened">{{ item.title }}</RouterLink> -->
          </div>
        </div>
      </div>
    </aside>
    <div class="window__main"><!--  col-10 -->
    <header class="header">
        <div class="container">
        <div class="header__nav">
          <div class="header__nav__logo">
            <img src="@/assets/images/logo.svg" alt="" class="header__nav__logo-img">
          </div>
          <div class="header__nav__right">
            <ul class="header__nav__right-list">
              <li class="header__nav__right-item">
                <img src="@/assets/images/search.svg" alt="">
              </li>
              <li class="header__nav__right-item">
                <img src="@/assets/images/line.svg" alt="">
              </li>
              <li class="header__nav__right-item">
                <img src="@/assets/images/box.svg" alt="">
              </li>
              <li class="header__nav__right-item">
                <img src="@/assets/images/notification.svg" alt="">
              </li>
              <li class="header__nav__right-item">
                <img src="@/assets/images/cart.svg" alt="">
              </li>
              <li class="header__nav__right-item">
                <div class="header__nav__right-item-profile">
                  <span>userlogin</span>
                  <img src="@/assets/images/avatar.svg" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </header>
      <RouterView/>
    </div>
    
    
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const menuOpened = ref(true)
const itemOpen = ref(null)
const openedMenuStyle = ref({
  background: '#007CFF',
  'border-radius': '10px'
})
const menu = ref([
  {
    title: 'Профиль',
    img: 'profile',
    link: 'profile',
  },
  {
    title: 'Учетная запись',
    img: 'settings',
    link: 'settings',
  },
  {
    title: 'Личные счета',
    img: 'wallet',
    link: 'wallet',
  },
  {
    title: 'Аккаунты',
    img: 'accounts',
    link: 'accounts',
  },
  {
    title: 'Сервисы',
    img: 'services',
    link: 'services',
  },
  {
    title: 'Уведомления',
    img: 'notifications',
    link: 'notifications',
  },
  {
    title: 'Лента новостей',
    img: 'news_tape',
    link: 'news_tape',
  },
  {
    title: 'Приглашения',
    img: 'invitations',
    link: 'invitations',
  },
  {
    title: 'Группы',
    img: 'groups',
    link: 'groups',
  },
])
function changePage(index){
  itemOpen.value=index
  router.push({path:`/${menu.value[index]['link']}`})
}

</script>

<style lang="scss" scoped>

</style>