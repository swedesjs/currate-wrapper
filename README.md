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

<details markdown='1'><summary>Пример ответа</summary>

```ts
export type currencyList =
  | "BCHEUR"
  | "BCHGBP"
  | "BCHJPY"
  | "BCHRUB"
  | "BCHUSD"
  | "BCHXRP"
  | "BTCBCH"
  | "BTCEUR"
  | "BTCGBP"
  | "BTCJPY"
  | "BTCRUB"
  | "BTCUSD"
  | "BTCXRP"
  | "BTGUSD"
  | "BYNRUB"
  | "CADRUB"
  | "CHFRUB"
  | "CNYEUR"
  | "CNYRUB"
  | "CNYUSD"
  | "ETHEUR"
  | "ETHGBP"
  | "ETHJPY"
  | "ETHRUB"
  | "ETHUSD"
  | "EURAED"
  | "EURAMD"
  | "EURBGN"
  | "EURBYN"
  | "EURGBP"
  | "EURJPY"
  | "EURKZT"
  | "EURRUB"
  | "EURTRY"
  | "EURUSD"
  | "GBPAUD"
  | "GBPBYN"
  | "GBPJPY"
  | "GBPRUB"
  | "GELRUB"
  | "GELUSD"
  | "IDRUSD"
  | "JPYAMD"
  | "JPYAZN"
  | "JPYRUB"
  | "LKREUR"
  | "LKRRUB"
  | "LKRUSD"
  | "MDLEUR"
  | "MDLRUB"
  | "MDLUSD"
  | "MMKEUR"
  | "MMKRUB"
  | "MMKUSD"
  | "RSDEUR"
  | "RSDRUB"
  | "RSDUSD"
  | "RUBAED"
  | "RUBAMD"
  | "RUBAUD"
  | "RUBBGN"
  | "RUBKZT"
  | "RUBMYR"
  | "RUBNZD"
  | "RUBSGD"
  | "RUBTRY"
  | "RUBUAH"
  | "THBCNY"
  | "THBEUR"
  | "THBRUB"
  | "USDAED"
  | "USDAMD"
  | "USDAUD"
  | "USDBGN"
  | "USDBYN"
  | "USDCAD"
  | "USDGBP"
  | "USDILS"
  | "USDJPY"
  | "USDKGS"
  | "USDKZT"
  | "USDMYR"
  | "USDRUB"
  | "USDTHB"
  | "USDUAH"
  | "USDVND"
  | "XRPEUR"
  | "XRPGBP"
  | "XRPJPY"
  | "XRPRUB"
  | "XRPUSD"
  | "ZECUSD"
```

</details>

# rates

```ts
currate.api.rates({
  pairs: "USDRUB",
  date: "2018-02-12T15:00:00"
})
```

| Опция | Тип          | Описание                                                                                                      |
| ----- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| pairs | currencyList | Валютные пары, разделенные запятой (список пар можно получить методом [currencyList](http://currate.ru/#list) |
| date? | string       | Дата и время, по умолчанию берутся последние данные (GMT +03:00).                                             |

<details markdown='1'><summary>Пример ответа</summary>

```ts
export type RatesResponse = {
  [props in currencyList]: string
}
```

</details>

> Если нашли ошибку напишите [мне](https://t.me/swedesjs)
