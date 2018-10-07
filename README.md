## Финтех школа Javascript

Репозиторий с домашними заданиями по курсу Javascript

### Установка
```
    npm install
```

### Запуск тестов
```
    npm run test
```

### Настройка CI для проверки тестов

* Зарегистрироваться через учетную запись Github на https://travis-ci.org/
* Включить в настройках галочку для соответсвующего репозитория-форка
* Включить галочку на проверку pull-requests


### Обновление форка

```
    git remote add upstream https://github.com/Geschoss/fintech-front.git
    git fetch upstream
    git checkout master
    git merge upstream/master
```

### Обновление ветки

```
    git checkout /Ваша ветка/
    git rebase master
```
Правим конфликры и дальше 
```
    git rebase --continue
```