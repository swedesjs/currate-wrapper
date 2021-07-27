import { Rates } from "./Params"
import { currencyList, RatesResponse } from "./Response"

export interface APIMethod {
  /**
   * Получения списка доступных валют
   */
  currencyList(): Promise<currencyList>
  /**
   * Получить курсы для валют.
   * {@link http://currate.ru/currency/list Полный список валют [92 пары]}. Так же можно посмотреть в {@link http://currate.ru/account личном кабинете}
   */
  rates(params: Rates): Promise<RatesResponse>
}
