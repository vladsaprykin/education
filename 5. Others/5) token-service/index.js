/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
    constructor() {
        this.token = null
        this.subscribes = []
    }

    subscribe(callback) {
        return this.subscribes.push(callback)
    }

    setToken(token) {
        this.token = token;
        this.subscribes.forEach(item => item(token))

        return this
    }

    removeToken() {
        this.token = null;
        this.subscribes.forEach(item => item(null))

        return this
    }

    getToken() {
        return this.token
    }
}

window.TokenService = TokenService;

export default TokenService;
