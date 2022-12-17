function regist() {
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let password1 = document.getElementById('password1').value;
  if(localStorage.getItem(name)==null){
    if (name.length >= 2) {
      if (password.length >= 6){
        if (password==password1){
          let new_user = {
            user_name: name,
            user_password: password
        }
        localStorage.setItem(new_user.user_name, JSON.stringify(new_user));
        localStorage.setItem("active_user", new_user.user_name)
        document.getElementById('active_name').textContent = localStorage['active_user']
        console.log("Новый пользователь добавлен")
        document.getElementById('login').textContent = 'Новый пользователь добавлен'
      } else {
        document.getElementById('login').textContent = 'Пароли не совпадают'
      }
    } else {
      document.getElementById('login').textContent = 'Пароль не может быть меньше 6 символов'
    }
  }else {
    document.getElementById('login').textContent = 'Логин не может быть меньше 2 символов'
  }
  }else {
    console.log("Такой пользователь уже есть")
    document.getElementById('login').textContent = 'Такой пользователь уже есть'
  }
}
function rem() {
  localStorage.removeItem('active_user')
  window.location.href = '../index.html';
}
function InLogin (){
  let name1 = document.getElementById('name1').value;
  let password2 = document.getElementById('password2').value;
  if (localStorage.getItem(name1) != null) {
    let user_log = localStorage.getItem(name1)
    let user = JSON.parse(user_log)
    document.getElementById('login').textContent = 'Такой пользователь есть'
    console.log('Такой пользователь есть')
    console.log(user.user_password)
    if (password2==user.user_password){
        localStorage.setItem('active_user', name1)
        document.getElementById('login').textContent = 'Вы вошли'
        window.location.href = 'main/mobile.html';
    } else {
      document.getElementById('login').textContent = 'Неверный пароль'
    }
  }  else {
      document.getElementById('login').textContent = 'Такой пользователь не существует'
    }
}
