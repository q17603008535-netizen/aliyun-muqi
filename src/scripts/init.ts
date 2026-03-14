// 客户端初始化脚本
import { initAutoLocaleSwitch } from '../i18n';
import { initAccessibleModals, initKeyboardNavigation } from '../utils/accessibility';

// 临时禁用自动语言切换（避免乱码）
// initAutoLocaleSwitch();

// 初始化键盘导航
initKeyboardNavigation();

// 初始化模态框无障碍访问
document.addEventListener('DOMContentLoaded', () => {
  initAccessibleModals();
});
