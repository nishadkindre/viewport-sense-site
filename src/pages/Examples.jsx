import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Eye, 
  Navigation, 
  Settings, 
  Zap, 
  Shield, 
  Layout as LayoutIcon, 
  Image as ImageIcon, 
  Volume2, 
  Palette, 
  MousePointer, 
  Activity, 
  ArrowRight, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp,
  PlayCircle,
  Lightbulb,
  Target
} from 'lucide-react';

import ModernContainer from '../components/layout/ModernContainer';
import ModernCard from '../components/ui/ModernCard';
import ModernButton from '../components/ui/ModernButton';

// Copy functionality hook
const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState('');

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(''), 2000);
      return true;
    } catch (error) {
      console.error('Failed to copy text: ', error);
      return false;
    }
  };

  return { copy, copiedText };
};

// Code block component
const CodeBlock = ({ code, language = 'javascript', title }) => {
  const { copy, copiedText } = useCopyToClipboard();
  const isCopied = copiedText === code;

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <span className="text-sm font-medium text-gray-300">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-gray-100">{code}</code>
        </pre>
        <button
          onClick={() => copy(code)}
          className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
          title="Copy code"
        >
          {isCopied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

// Example card component
const ExampleCard = ({ 
  icon: Icon, 
  title, 
  description, 
  difficulty, 
  category, 
  code, 
  demoUrl, 
  tags 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Layout': return 'bg-blue-100 text-blue-800';
      case 'Responsive': return 'bg-purple-100 text-purple-800';
      case 'Performance': return 'bg-orange-100 text-orange-800';
      case 'Accessibility': return 'bg-green-100 text-green-800';
      case 'Animation': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ModernCard className="h-full">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
              {difficulty}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
              {category}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

      {tags && (
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col space-y-3">
        <div className="flex space-x-2">
          <ModernButton
            variant="primary"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1"
          >
            <Code className="w-4 h-4" />
            {isExpanded ? 'Hide Code' : 'Show Code'}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </ModernButton>
          
        </div>

        {isExpanded && code && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CodeBlock code={code} title={`${title} Implementation`} />
          </motion.div>
        )}
      </div>
    </ModernCard>
  );
};

// Examples data
const examplesData = [
  {
    icon: LayoutIcon,
    title: 'Responsive Navigation',
    description: 'Create a navigation that adapts based on screen size and device type, showing different layouts for mobile, tablet, and desktop.',
    difficulty: 'Beginner',
    category: 'Layout',
    demoUrl: '/demo',
    tags: ['useBreakpoint', 'useDevice', 'Navigation'],
    code: `import { useBreakpoint, useDevice } from 'viewport-sense';

const ResponsiveNav = () => {
  const breakpoint = useBreakpoint();
  const device = useDevice();
  
  // Show hamburger menu on mobile
  if (device.isMobile || breakpoint === 'xs' || breakpoint === 'sm') {
    return <HamburgerMenu />;
  }
  
  // Show full navigation on desktop
  return (
    <nav className="flex space-x-6">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};`
  },
  {
    icon: ImageIcon,
    title: 'Adaptive Image Loading',
    description: 'Load different image sizes and formats based on viewport size and device capabilities for optimal performance.',
    difficulty: 'Intermediate',
    category: 'Performance',
    demoUrl: '/demo',
    tags: ['useViewport', 'useDevice', 'Image Optimization'],
    code: `import { useViewport, useDevice } from 'viewport-sense';

const AdaptiveImage = ({ src, alt }) => {
  const viewport = useViewport();
  const device = useDevice();
  
  const getImageSrc = () => {
    const { width } = viewport;
    const highDPI = device.pixelRatio > 1;
    
    if (width <= 640) {
      return highDPI ? \`\${src}_mobile@2x.jpg\` : \`\${src}_mobile.jpg\`;
    } else if (width <= 1024) {
      return highDPI ? \`\${src}_tablet@2x.jpg\` : \`\${src}_tablet.jpg\`;
    } else {
      return highDPI ? \`\${src}_desktop@2x.jpg\` : \`\${src}_desktop.jpg\`;
    }
  };
  
  return (
    <img
      src={getImageSrc()}
      alt={alt}
      loading="lazy"
      className="w-full h-auto"
    />
  );
};`
  },
  {
    icon: Eye,
    title: 'Lazy Loading with Visibility',
    description: 'Implement smart lazy loading that loads content only when elements become visible in the viewport.',
    difficulty: 'Intermediate',
    category: 'Performance',
    demoUrl: '/demo',
    tags: ['useElementVisibility', 'Performance', 'Lazy Loading'],
    code: `import { useElementVisibility } from 'viewport-sense';
import { useRef, useState, useEffect } from 'react';

const LazyContent = ({ children }) => {
  const ref = useRef(null);
  const isVisible = useElementVisibility(ref);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);
  
  return (
    <div ref={ref} className="min-h-[200px]">
      {hasLoaded ? (
        children
      ) : (
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      )}
    </div>
  );
};`
  },
  {
    icon: Palette,
    title: 'Theme-Aware Components',
    description: 'Create components that automatically adapt to user preferences for dark mode, reduced motion, and high contrast.',
    difficulty: 'Beginner',
    category: 'Accessibility',
    demoUrl: '/demo',
    tags: ['useColorScheme', 'useReducedMotion', 'useAccessibility'],
    code: `import { useColorScheme, useReducedMotion, useAccessibility } from 'viewport-sense';

const ThemeAwareButton = ({ children, ...props }) => {
  const colorScheme = useColorScheme();
  const reducedMotion = useReducedMotion();
  const a11y = useAccessibility();
  
  const baseClasses = "px-4 py-2 rounded font-medium";
  const themeClasses = colorScheme === 'dark' 
    ? "bg-white text-black hover:bg-gray-100" 
    : "bg-black text-white hover:bg-gray-800";
  const motionClasses = reducedMotion ? "" : "transition-all duration-200";
  const contrastClasses = a11y.prefersHighContrast ? "border-2 border-current" : "";
  
  return (
    <button 
      className={\`\${baseClasses} \${themeClasses} \${motionClasses} \${contrastClasses}\`}
      {...props}
    >
      {children}
    </button>
  );
};`
  },
  {
    icon: Activity,
    title: 'Scroll Progress Indicator',
    description: 'Build a scroll progress bar that shows reading progress and adapts to different content lengths.',
    difficulty: 'Beginner',
    category: 'Layout',
    demoUrl: '/demo',
    tags: ['useScrollPosition', 'Progress Bar'],
    code: `import { useScrollPosition } from 'viewport-sense';

const ScrollProgress = () => {
  const scroll = useScrollPosition();
  
  const getProgress = () => {
    const { y: scrollY } = scroll;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    return Math.min((scrollY / maxScroll) * 100, 100);
  };
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-blue-600 transition-all duration-150"
        style={{ width: \`\${getProgress()}%\` }}
      />
    </div>
  );
};`
  },
  {
    icon: Navigation,
    title: 'Safe Area Aware Layout',
    description: 'Create layouts that respect device safe areas like notches and home indicators on mobile devices.',
    difficulty: 'Advanced',
    category: 'Layout',
    demoUrl: '/demo',
    tags: ['useSafeArea', 'Mobile Layout', 'iOS Safari'],
    code: `import { useSafeArea } from 'viewport-sense';

const SafeAreaLayout = ({ children }) => {
  const safeArea = useSafeArea();
  
  const safeAreaStyles = {
    paddingTop: safeArea.top || 0,
    paddingBottom: safeArea.bottom || 0,
    paddingLeft: safeArea.left || 0,
    paddingRight: safeArea.right || 0,
  };
  
  return (
    <div 
      className="min-h-screen bg-white"
      style={safeAreaStyles}
    >
      <header className="bg-blue-600 text-white p-4">
        <h1>Safe Area Aware Header</h1>
      </header>
      
      <main className="flex-1 p-4">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white p-4">
        <p>Footer respects safe areas</p>
      </footer>
    </div>
  );
};`
  },
  {
    icon: Zap,
    title: 'Performance Monitoring',
    description: 'Monitor viewport changes and device capabilities to optimize performance and user experience.',
    difficulty: 'Advanced',
    category: 'Performance',
    demoUrl: '/demo',
    tags: ['useViewport', 'useDevice', 'Performance'],
    code: `import { useViewport, useDevice, useAccessibility } from 'viewport-sense';
import { useEffect, useState } from 'react';

const PerformanceOptimizer = ({ children }) => {
  const viewport = useViewport();
  const device = useDevice();
  const a11y = useAccessibility();
  const [optimizations, setOptimizations] = useState({});
  
  useEffect(() => {
    const opts = {
      // Reduce animations on low-end devices
      animations: !a11y.prefersReducedMotion && device.memory > 4,
      
      // Lazy load images on mobile
      lazyImages: device.isMobile,
      
      // Reduce image quality on slow connections
      highQualityImages: device.connection?.effectiveType === '4g',
      
      // Enable virtual scrolling for large lists
      virtualScrolling: viewport.height < 600 || device.isMobile,
    };
    
    setOptimizations(opts);
  }, [viewport, device, a11y]);
  
  return (
    <div data-optimizations={JSON.stringify(optimizations)}>
      {children}
    </div>
  );
};`
  },
  {
    icon: Shield,
    title: 'Accessibility-First Modal',
    description: 'Build modals that respect user accessibility preferences and adapt to different devices seamlessly.',
    difficulty: 'Intermediate',
    category: 'Accessibility',
    demoUrl: '/demo',
    tags: ['useAccessibility', 'useViewport', 'Modal', 'A11y'],
    code: `import { useAccessibility, useViewport } from 'viewport-sense';
import { useEffect } from 'react';

const AccessibleModal = ({ isOpen, onClose, children }) => {
  const a11y = useAccessibility();
  const viewport = useViewport();
  
  const modalClasses = [
    'fixed inset-0 z-50 flex items-center justify-center',
    a11y.prefersReducedMotion ? '' : 'transition-opacity duration-300',
    viewport.width < 640 ? 'p-4' : 'p-8'
  ].filter(Boolean).join(' ');
  
  const backdropClasses = [
    'fixed inset-0 bg-black',
    a11y.prefersHighContrast ? 'bg-opacity-90' : 'bg-opacity-50'
  ].join(' ');
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus trap implementation
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements[0]?.focus();
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className={modalClasses} role="dialog" aria-modal="true">
      <div className={backdropClasses} onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-auto">
        {children}
      </div>
    </div>
  );
};`
  }
];

// Category filter component
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoryChange('All')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === 'All'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Examples
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Examples = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Get unique categories
  const categories = [...new Set(examplesData.map(example => example.category))];
  
  // Filter examples based on active category
  const filteredExamples = activeCategory === 'All' 
    ? examplesData 
    : examplesData.filter(example => example.category === activeCategory);

  return (
    <div className="min-h-screen py-16 bg-white">
      <ModernContainer>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Practical Examples</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real-World Examples
          </h1>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover practical implementations of <span className="font-semibold text-blue-600">Viewport Sense</span> in 
            real-world scenarios. Each example includes complete code, explanations, and live demos.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-12">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Copy & Paste Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <PlayCircle className="w-4 h-4" />
              <span>Live Demos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-4 h-4" />
              <span>Best Practices</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ModernButton 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/docs')}
            >
              <Code className="w-5 h-5" />
              View Documentation
            </ModernButton>
            
            <ModernButton 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/demo')}
            >
              <PlayCircle className="w-5 h-5" />
              Interactive Demo
              <ArrowRight className="w-4 h-4" />
            </ModernButton>
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExampleCard {...example} />
            </motion.div>
          ))}
        </div>
      </ModernContainer>
    </div>
  );
};

export default Examples;