import { TokenPayload } from '@/interfaces/token'
import { parse, ParsedQs } from 'qs'
import { EntityMap, LooseMap } from '@/interfaces/constants'

/**
 * 解析 JWT Token
 *
 * @export
 * @param {string} token access token
 * @returns {(TokenPayload | undefined)} payload
 */
export function decodeJWTToken(token: string): TokenPayload | undefined {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )

    return JSON.parse(jsonPayload)
  } catch (error) {}
}

/**
 * 获取 search 参数
 *
 * @export
 * @returns {{[key: string]: string}} 参数
 */
export function getSearchParams<T extends ParsedQs = SearchParams>(): T {
  const { search, hash } = location
  const searchParamsFromLocation = parse(search, {
    ignoreQueryPrefix: true,
  })

  const hashSearch = hash.split('?').pop() as string

  const searchParamsFromHash = parse(hashSearch, {
    ignoreQueryPrefix: true,
  })

  const searchParams = {
    ...searchParamsFromLocation,
    ...searchParamsFromHash,
  } as T

  return searchParams
}

/**
 * remove undefined values from nested object
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function removeUndefined<T extends LooseMap>(obj: T): T {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      removeUndefined(value)
    } else if (typeof value === 'undefined') {
      delete obj[key]
    }
  })

  return obj
}

/**
 * insert css to head
 * @param content css
 */
export function insertCSS(content: string) {
  const style = document.createElement('style')
  style.innerHTML = content
  document.head.appendChild(style)

  return () => {
    document.head.removeChild(style)
  }
}

export function formatURL(url?: string) {
  if (url) {
    if (!/^http:\/\//.test(url)) {
      return `http://${url}`
    }
  }

  return url
}
