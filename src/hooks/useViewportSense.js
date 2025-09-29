// Temporary viewport-sense hook implementations for demo purposes
// These will be replaced with actual viewport-sense package when linked

import { useState, useEffect, useRef } from 'react';

// Mock viewport-sense hooks for demo
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
    breakpoint: 'lg',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    orientation: 'landscape',
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let breakpoint = 'xs';
      let isMobile = false;
      let isTablet = false;
      let isDesktop = false;
      
      if (width >= 1536) {
        breakpoint = '2xl';
        isDesktop = true;
      } else if (width >= 1280) {
        breakpoint = 'xl';
        isDesktop = true;
      } else if (width >= 1024) {
        breakpoint = 'lg';
        isDesktop = true;
      } else if (width >= 768) {
        breakpoint = 'md';
        isTablet = true;
      } else if (width >= 640) {
        breakpoint = 'sm';
        isMobile = true;
      } else {
        breakpoint = 'xs';
        isMobile = true;
      }
      
      setViewport({
        width,
        height,
        breakpoint,
        isMobile,
        isTablet,
        isDesktop,
        orientation: width > height ? 'landscape' : 'portrait',
        pixelRatio: window.devicePixelRatio || 1,
      });
    };

    window.addEventListener('resize', updateViewport);
    updateViewport();
    
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
};

export const useBreakpoint = () => {
  const { breakpoint } = useViewport();
  return breakpoint;
};

export const useDevice = () => {
  const [device, setDevice] = useState({
    browser: 'Chrome',
    browserVersion: '91.0',
    os: 'Windows',
    touchPoints: 0,
    isPWA: false,
    screenDensity: 'normal',
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    let browserVersion = '';
    let os = 'Unknown';
    
    // Simple browser detection
    if (userAgent.includes('Chrome')) {
      browser = 'Chrome';
      browserVersion = userAgent.match(/Chrome\/(\d+)/)?.[1] || '';
    } else if (userAgent.includes('Firefox')) {
      browser = 'Firefox';
      browserVersion = userAgent.match(/Firefox\/(\d+)/)?.[1] || '';
    } else if (userAgent.includes('Safari')) {
      browser = 'Safari';
      browserVersion = userAgent.match(/Version\/(\d+)/)?.[1] || '';
    }
    
    // Simple OS detection
    if (userAgent.includes('Windows')) os = 'Windows';
    else if (userAgent.includes('Mac')) os = 'macOS';
    else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iOS')) os = 'iOS';
    
    setDevice({
      browser,
      browserVersion,
      os,
      touchPoints: navigator.maxTouchPoints || 0,
      isPWA: window.matchMedia && window.matchMedia('(display-mode: standalone)').matches,
      screenDensity: window.devicePixelRatio > 1 ? 'high' : 'normal',
    });
  }, []);

  return device;
};

export const useAccessibility = () => {
  const [a11y, setA11y] = useState({
    prefersHighContrast: false,
    prefersReducedData: false,
  });

  useEffect(() => {
    const checkAccessibility = () => {
      setA11y({
        prefersHighContrast: window.matchMedia('(prefers-contrast: high)').matches,
        prefersReducedData: window.matchMedia('(prefers-reduced-data: reduce)').matches,
      });
    };

    checkAccessibility();
    
    // Listen for changes
    const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
    const reducedDataMedia = window.matchMedia('(prefers-reduced-data: reduce)');
    
    highContrastMedia.addEventListener('change', checkAccessibility);
    reducedDataMedia.addEventListener('change', checkAccessibility);
    
    return () => {
      highContrastMedia.removeEventListener('change', checkAccessibility);
      reducedDataMedia.removeEventListener('change', checkAccessibility);
    };
  }, []);

  return a11y;
};

export const useScrollPosition = () => {
  const [scroll, setScroll] = useState({
    y: 0,
    directionY: 'down',
    velocity: 0,
    isNearTop: true,
    isNearBottom: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let lastTime = Date.now();

    const updateScroll = () => {
      const currentY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = currentY - lastY;
      const deltaTime = currentTime - lastTime;
      
      const velocity = deltaTime > 0 ? Math.abs(deltaY / deltaTime) * 1000 : 0;
      const direction = deltaY > 0 ? 'down' : deltaY < 0 ? 'up' : 'none';
      
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isNearTop = currentY < 100;
      const isNearBottom = currentY > documentHeight - windowHeight - 100;
      
      setScroll({
        y: currentY,
        directionY: direction,
        velocity,
        isNearTop,
        isNearBottom,
      });
      
      lastY = currentY;
      lastTime = currentTime;
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return scroll;
};

export const useElementVisibility = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        ...options,
      }
    );

    observer.observe(element);
    
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

export const useSafeArea = () => {
  const [safeArea, setSafeArea] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const updateSafeArea = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      
      setSafeArea({
        top: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-top)')) || 0,
        bottom: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-bottom)')) || 0,
        left: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-left)')) || 0,
        right: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-right)')) || 0,
      });
    };

    updateSafeArea();
    window.addEventListener('resize', updateSafeArea);
    
    return () => window.removeEventListener('resize', updateSafeArea);
  }, []);

  return safeArea;
};

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export const useBreakpointValue = (values) => {
  const { breakpoint } = useViewport();
  
  const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const currentIndex = breakpointOrder.indexOf(breakpoint);
  
  // Find the appropriate value for current breakpoint
  for (let i = currentIndex; i >= 0; i--) {
    const bp = breakpointOrder[i];
    if (values[bp] !== undefined) {
      return values[bp];
    }
  }
  
  // Fallback to the first available value
  return Object.values(values)[0];
};

export const useDeviceType = () => {
  const { isMobile, isTablet, isDesktop } = useViewport();
  return { isMobile, isTablet, isDesktop };
};

export const useOrientation = () => {
  const { orientation } = useViewport();
  return orientation;
};

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState('dark');

  useEffect(() => {
    const updateColorScheme = (e) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setColorScheme(darkModeQuery.matches ? 'dark' : 'light');
    
    darkModeQuery.addEventListener('change', updateColorScheme);
    
    return () => darkModeQuery.removeEventListener('change', updateColorScheme);
  }, []);

  return colorScheme;
};

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const updateReducedMotion = (e) => {
      setReducedMotion(e.matches);
    };

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    
    motionQuery.addEventListener('change', updateReducedMotion);
    
    return () => motionQuery.removeEventListener('change', updateReducedMotion);
  }, []);

  return reducedMotion;
};