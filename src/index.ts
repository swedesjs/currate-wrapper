import fetch from "node-fetch"
import { APIMethod } from "./types"
import { stringify } from "querystring"
const method = [
  ["currencyList", "currency_list"],
  ["rates", "rates"]
]
export class Currate {
  readonly api = new Proxy({} as APIMethod, {
    get: (_, props: string) => async params => {
      params = {
        key: this.token,
        get: method.find(x => x[0] === props)[1],
        ...params
      }
      const response = await fetch("https://currate.ru/api/?" + stringify(params))
      const result = await response.json()

      if (result.status !== 200) throw Error(result.message)
      return result.data
    }
  })
  /**
   * @param token Ваш API Key
   */
  constructor(private token: string) {}
}
