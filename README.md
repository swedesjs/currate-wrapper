# Установка

```console
npm install currate-wrapper
```

# Использование

```ts
import { Currate } from "currate-wrapper"
const currate = new Currate("token")
```

# currencyList

```ts
currate.api.currencyList()
```

[Пример ответа](./src/types/Response.ts)

# rates

```ts
currate.api.rates({
  pairs: "USDRUB",
  date: "2018-02-12T15:00:00"
})
```

| Опция | Тип                                     | Описание                                                                                                      |
| ----- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| pairs | [currencyList](./src/types/Response.ts) | Валютные пары, разделенные запятой (список пар можно получить методом [currencyList](http://currate.ru/#list) |
| date? | string                                  | Дата и время, по умолчанию берутся последние данные (GMT +03:00).                                             |

[Пример ответа](./src/types/Response.ts:95:13)

> Если нашли ошибку напишите [мне](https://t.me/swedesjs)
