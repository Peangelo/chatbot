import store from '../store'

export default async (to, from, next) => {
  document.title = `Forty Team - ${to.name}`

  let routesFree = ['login', 'register']

  if (routesFree.indexOf(to.name) === -1 && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken')
      next({ name: to.name })
 
    } catch (err) {
      next({ name: 'login' })
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasToken']) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
}
