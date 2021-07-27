import { currencyList } from "./Response"

export interface Rates {
  /**
   * Валютные пары, разделенные запятой (список пар можно получить методом {@link http://currate.ru/#list currencyList})
   */
  pairs: currencyList
  /**
   * Дата и время [опционально], по умолчанию берутся последние данные (GMT +03:00).
   * Пример: &date=2018-02-12T15:00:00
   */
  date?: string
}
