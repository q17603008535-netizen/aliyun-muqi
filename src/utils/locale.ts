// IP 检测和自动语言切换
interface CountryToLocale {
  [key: string]: string;
}

// 国家代码到语言代码的映射
const countryToLocale: CountryToLocale = {
  // 中文地区
  CN: 'zh-CN',      // 中国大陆
  TW: 'zh-TW',      // 台湾
  HK: 'zh-TW',      // 香港
  SG: 'zh-CN',      // 新加坡（简体中文）
  
  // 英文地区
  US: 'en',         // 美国
  GB: 'en',         // 英国
  CA: 'en',         // 加拿大
  AU: 'en',         // 澳大利亚
  NZ: 'en',         // 新西兰
  
  // 其他地区默认英文
  DEFAULT: 'en'
};

/**
 * 根据国家代码确定应该使用的语言
 */
function getLocaleFromCountry(countryCode: string): string {
  return countryToLocale[countryCode] || countryToLocale.DEFAULT;
}

/**
 * 从 IP 检测服务获取用户位置
 * 使用免费的 ipapi.co 服务
 */
async function detectUserCountry(): Promise<string | null> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('IP detection failed');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.warn('IP detection failed, using default locale:', error);
    return null;
  }
}

/**
 * 获取用户保存的语言偏好
 */
function getStoredLocale(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('preferred-locale');
}

/**
 * 保存用户语言偏好
 */
function storeLocale(locale: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-locale', locale);
}

/**
 * 确定应该使用的语言（优先级：用户选择 > IP 检测 > 默认）
 */
export async function determineLocale(): Promise<string> {
  // 1. 优先使用用户保存的选择
  const stored = getStoredLocale();
  if (stored && ['zh-TW', 'zh-CN', 'en'].includes(stored)) {
    console.log('Using stored locale:', stored);
    return stored;
  }
  
  // 2. 使用 IP 检测
  const countryCode = await detectUserCountry();
  if (countryCode) {
    const locale = getLocaleFromCountry(countryCode);
    console.log('IP detected country:', countryCode, '-> locale:', locale);
    return locale;
  }
  
  // 3. 默认使用繁体中文
  console.log('Using default locale: zh-TW');
  return 'zh-TW';
}

/**
 * 初始化自动语言切换
 * 只在客户端执行
 */
export function initAutoLocaleSwitch() {
  if (typeof window === 'undefined') return;
  
  // 检查当前是否已经有语言前缀
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const currentLocale = pathParts[0] || 'zh-TW';
  
  // 如果已经在 URL 中有语言前缀，不需要自动切换
  if (['zh-TW', 'zh-CN', 'en'].includes(currentLocale)) {
    console.log('Locale already set in URL:', currentLocale);
    return;
  }
  
  // 执行自动语言检测
  determineLocale().then(locale => {
    if (locale !== 'zh-TW') { // 默认语言不重定向
      console.log('Redirecting to auto-detected locale:', locale);
      const newPath = `/${locale}${window.location.pathname}`;
      window.history.replaceState({}, '', newPath);
    }
  });
}
