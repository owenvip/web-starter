import { parse, ParsedQs } from 'qs'
import { TokenPayload } from '@/interfaces/token'

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
 * @returns {any} 参数
 */
export function getSearchParams<T extends ParsedQs = any>(): T {
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
