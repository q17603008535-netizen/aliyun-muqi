// 国际化客户端工具函数
import { translations, defaultLocale, supportedLocales, countryToLocale } from './translations';

/**
 * 从 URL 获取当前语言
 */
export function getLocaleFromURL(): string | null {
  if (typeof window === 'undefined') return null;
  
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const potentialLocale = pathParts[0];
  
  if (supportedLocales.includes(potentialLocale)) {
    return potentialLocale;
  }
  
  return null;
}

/**
 * 获取用户保存的语言偏好
 */
export function getStoredLocale(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('preferred-locale');
}

/**
 * 保存用户语言偏好
 */
export function storeLocale(locale: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-locale', locale);
}

/**
 * 从 IP 检测用户国家
 */
async function detectUserCountry(): Promise<string | null> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('IP detection failed');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.warn('IP detection failed:', error);
    return null;
  }
}

/**
 * 根据国家代码确定语言
 */
function getLocaleFromCountry(countryCode: string): string {
  return countryToLocale[countryCode] || 'en';
}

/**
 * 确定应该使用的语言（优先级：URL > 用户选择 > IP 检测 > 默认）
 */
export async function determineLocale(): Promise<string> {
  // 1. 优先使用 URL 中的语言
  const urlLocale = getLocaleFromURL();
  if (urlLocale) {
    console.log('Using URL locale:', urlLocale);
    return urlLocale;
  }
  
  // 2. 使用用户保存的选择
  const stored = getStoredLocale();
  if (stored && supportedLocales.includes(stored)) {
    console.log('Using stored locale:', stored);
    return stored;
  }
  
  // 3. 使用 IP 检测
  const countryCode = await detectUserCountry();
  if (countryCode) {
    const locale = getLocaleFromCountry(countryCode);
    console.log('IP detected country:', countryCode, '-> locale:', locale);
    return locale;
  }
  
  // 4. 默认语言
  console.log('Using default locale:', defaultLocale);
  return defaultLocale;
}

/**
 * 获取翻译文本
 */
export function t(key: string, locale: string = defaultLocale): string {
  const localeTranslations = translations[locale] || translations[defaultLocale];
  const value = localeTranslations[key];
  
  if (typeof value === 'string') {
    return value;
  }
  
  return key; // 如果找不到翻译，返回 key 本身
}

/**
 * 初始化自动语言切换
 */
export function initAutoLocaleSwitch() {
  if (typeof window === 'undefined') return;
  
  // 检查当前是否已经有语言前缀
  const currentLocale = getLocaleFromURL();
  
  // 如果已经在 URL 中有语言前缀，不需要自动切换
  if (currentLocale) {
    console.log('Locale already set in URL:', currentLocale);
    return;
  }
  
  // 执行自动语言检测
  determineLocale().then(locale => {
    if (locale !== defaultLocale) {
      console.log('Redirecting to auto-detected locale:', locale);
      const newPath = `/${locale}${window.location.pathname}`;
      window.history.replaceState({}, '', newPath);
    }
  });
}

/**
 * 更新页面文本
 */
export function updatePageText(locale: string) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const text = t(key, locale);
      
      // 检查是 input 还是普通元素
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        const placeholder = element.getAttribute('data-i18n-placeholder');
        if (placeholder) {
          (element as HTMLInputElement).placeholder = t(placeholder, locale);
        }
      } else {
        element.textContent = text;
      }
    }
  });
}
