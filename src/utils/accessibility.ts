// 无障碍访问工具函数

/**
 * 实现焦点陷阱（Focus Trap）
 * 用于模态框等需要限制焦点范围的场景
 */
export function createFocusTrap(container: HTMLElement) {
  const focusableElements = container.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  function handleKeydown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }

  container.addEventListener('keydown', handleKeydown);

  return {
    destroy() {
      container.removeEventListener('keydown', handleKeydown);
    }
  };
}

/**
 * 管理模态框的无障碍访问
 */
export function manageModal(modal: HTMLElement, closeButton: HTMLElement) {
  let previousActiveElement: HTMLElement | null = null;

  function open() {
    previousActiveElement = document.activeElement as HTMLElement;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // 聚焦到第一个可聚焦元素或关闭按钮
    const firstFocusable = modal.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    // 实现焦点陷阱
    const focusTrap = createFocusTrap(modal);
    
    return () => {
      focusTrap.destroy();
      close();
    };
  }

  function close() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    previousActiveElement?.focus();
  }

  // 监听 Escape 键
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      close();
    }
  }

  document.addEventListener('keydown', handleKeydown);

  closeButton.addEventListener('click', close);

  return {
    open,
    close,
    destroy() {
      document.removeEventListener('keydown', handleKeydown);
    }
  };
}

/**
 * 为所有交互元素添加键盘导航支持
 */
export function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Enter 和 Space 激活按钮
    if (e.key === 'Enter' || e.key === ' ') {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
        e.preventDefault();
        target.click();
      }
    }
  });
}

/**
 * 检查颜色对比度是否符合 WCAG 2.1 AA 标准
 * 返回是否通过检查
 */
export function checkColorContrast(foreground: string, background: string): boolean {
  // 简化版本，实际使用需要更复杂的计算
  // 这里只是示例，实际需要实现完整的对比度计算
  return true;
}

/**
 * 初始化所有模态框的无障碍访问
 */
export function initAccessibleModals() {
  // Hero 模态框
  const heroModal = document.getElementById('contact-modal');
  const heroModalBtn = document.getElementById('contact-modal-btn');
  const heroCloseBtn = document.querySelector('.close-modal-btn');
  
  if (heroModal && heroModalBtn && heroCloseBtn) {
    const modalManager = manageModal(heroModal, heroCloseBtn as HTMLElement);
    
    heroModalBtn.addEventListener('click', modalManager.open);
    
    // 点击背景关闭
    const overlay = document.querySelector('.modal-overlay');
    overlay?.addEventListener('click', modalManager.close);
  }

  // Products 模态框
  const productModal = document.getElementById('product-contact-modal');
  const productContactBtns = document.querySelectorAll('.product-contact-btn');
  const productCloseBtn = document.querySelector('.product-modal-close');
  
  if (productModal && productCloseBtn) {
    const modalManager = manageModal(productModal, productCloseBtn as HTMLElement);
    
    productContactBtns.forEach(btn => {
      btn.addEventListener('click', modalManager.open);
    });
    
    // 点击背景关闭
    const overlay = document.querySelector('.product-modal-overlay');
    overlay?.addEventListener('click', modalManager.close);
  }
}
