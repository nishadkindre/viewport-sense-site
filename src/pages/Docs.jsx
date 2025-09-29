import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code, 
  Package, 
  Download, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Zap, 
  Shield, 
  Heart, 
  Settings, 
  Eye, 
  Navigation, 
  MousePointer, 
  Palette, 
  Volume2, 
  RefreshCw, 
  ChevronRight, 
  Copy, 
  Check,
  ExternalLink,
  Github
} from 'lucide-react';

import ModernContainer from '../components/layout/ModernContainer';
import ModernCard from '../components/ui/ModernCard';
import ModernButton from '../components/ui/ModernButton';

// Documentation sections data
const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <Zap className="w-5 h-5" />,
    sections: ['Installation', 'Quick Start', 'Basic Usage']
  },
  {
    id: 'core-api',
    title: 'Core API',
    icon: <Code className="w-5 h-5" />,
    sections: ['Factory Functions', 'ViewportCore', 'BreakpointManager', 'DeviceDetector']
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    icon: <Package className="w-5 h-5" />,
    sections: ['useViewport', 'useBreakpoint', 'useDevice', 'useMediaQuery', 'Advanced Hooks']
  },
  {
    id: 'configuration',
    title: 'Configuration',
    icon: <Settings className="w-5 h-5" />,
    sections: ['Breakpoint Systems', 'Custom Config', 'Performance', 'TypeScript']
  },
  {
    id: 'examples',
    title: 'Examples',
    icon: <Book className="w-5 h-5" />,
    sections: ['Basic Examples', 'Advanced Usage', 'Integration Patterns']
  }
];

// Copy button component
const CopyButton = ({ code, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded transition-colors ${className}`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
};

// Code block component
const CodeBlock = ({ children, language = 'javascript', title, showCopy = true }) => {
  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between bg-gray-50 border border-gray-200 border-b-0 rounded-t-md px-4 py-2">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          {showCopy && <CopyButton code={children} />}
        </div>
      )}
      <div className={`modern-code-block ${title ? 'rounded-t-none' : ''} relative`}>
        {!title && showCopy && (
          <div className="absolute top-3 right-3">
            <CopyButton code={children} />
          </div>
        )}
        <pre className="text-sm leading-relaxed">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ icon, title, description, color = "blue" }) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
    gray: "bg-gray-100 text-gray-600"
  };

  return (
    <ModernCard className="text-center h-full">
      <div className={`w-12 h-12 ${colorMap[color]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </ModernCard>
  );
};

const Docs = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('getting-started');

  // Installation code examples
  const installationCode = {
    npm: `npm install viewport-sense`,
    yarn: `yarn add viewport-sense`,
    pnpm: `pnpm add viewport-sense`
  };

  const quickStartCode = `import { useViewport, useBreakpoint } from 'viewport-sense/react';

function MyComponent() {
  const { isMobile, isTablet, width } = useViewport();
  const breakpoint = useBreakpoint();

  return (
    <div>
      <p>Device: {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}</p>
      <p>Breakpoint: {breakpoint} ({width}px)</p>
    </div>
  );
}`;

  const vanillaJSCode = `import { createBreakpointJS } from 'viewport-sense';

const viewport = createBreakpointJS();

// Device detection
console.log(viewport.isMobile()); // true/false
console.log(viewport.getBreakpoint()); // 'xs', 'sm', 'md', 'lg', 'xl'

// Listen for changes
viewport.addEventListener('change', (state) => {
  console.log(\`Breakpoint: \${state.breakpoint}\`);
});`;

  const configCode = `import { createBreakpointJS } from 'viewport-sense';

const viewport = createBreakpointJS({
  breakpointSystem: 'tailwind', // 'bootstrap', 'tailwind', 'material', 'foundation'
  debounceDelay: 100,
  enableA11y: true,
  autoCSSVars: true,
});`;

  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Viewport Detection",
      description: "Real-time responsive breakpoints with comprehensive device type detection.",
      color: "blue"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "React Integration",
      description: "Complete React hooks with TypeScript support for seamless integration.",
      color: "green"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Multiple Systems",
      description: "Support for Bootstrap, Tailwind, Material Design, or custom breakpoints.",
      color: "purple"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accessibility First",
      description: "Respects user preferences for motion, contrast, and color schemes.",
      color: "red"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero Dependencies",
      description: "Lightweight (~4KB gzipped) bundle with tree-shaking support.",
      color: "yellow"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Developer Experience",
      description: "Built with TypeScript from the ground up with excellent IntelliSense.",
      color: "gray"
    }
  ];

  const reactHooks = [
    {
      name: 'useViewport()',
      description: 'Returns the current viewport state including dimensions and device info',
      icon: <Monitor className="w-4 h-4" />
    },
    {
      name: 'useBreakpoint()',
      description: 'Returns the current breakpoint name (xs, sm, md, lg, xl)',
      icon: <Tablet className="w-4 h-4" />
    },
    {
      name: 'useDevice()',
      description: 'Returns comprehensive device and browser information',
      icon: <Smartphone className="w-4 h-4" />
    },
    {
      name: 'useMediaQuery()',
      description: 'Matches custom media queries with automatic re-evaluation',
      icon: <Settings className="w-4 h-4" />
    },
    {
      name: 'useElementVisibility()',
      description: 'Tracks element visibility using Intersection Observer API',
      icon: <Eye className="w-4 h-4" />
    },
    {
      name: 'useScrollPosition()',
      description: 'Tracks scroll position, direction, and velocity',
      icon: <Navigation className="w-4 h-4" />
    },
    {
      name: 'useBreakpointValue()',
      description: 'Returns responsive values based on current breakpoint',
      icon: <RefreshCw className="w-4 h-4" />
    },
    {
      name: 'useAccessibility()',
      description: 'Returns user accessibility preferences and settings',
      icon: <Volume2 className="w-4 h-4" />
    }
  ];

  const breakpointSystems = [
    {
      name: 'Tailwind CSS',
      breakpoints: 'sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536',
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: 'Material Design',
      breakpoints: 'xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920',
      icon: <Palette className="w-5 h-5" />
    },
    {
      name: 'Bootstrap',
      breakpoints: 'xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400',
      icon: <Package className="w-5 h-5" />
    },
    {
      name: 'Custom',
      breakpoints: 'Define your own breakpoints with pixel values',
      icon: <Settings className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="modern-section bg-gradient-to-b from-gray-50 to-white">
        <ModernContainer>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-3 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Book className="w-4 h-4" />
                <span>Complete Documentation</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Documentation
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Complete guide to <span className="font-semibold text-blue-600">viewport-sense</span> - a lightweight, 
                TypeScript-first viewport utility library. Learn everything from basic setup to advanced patterns.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4" />
                  <span>API Reference</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Quick Start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span>React Hooks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Configuration</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <ModernButton 
                  variant="primary" 
                  size="lg"
                  onClick={() => {
                    setActiveSection('installation');
                    document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Download className="w-5 h-5" />
                  Get Started
                </ModernButton>
                
                <ModernButton 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open('https://github.com/nkindre/viewport-sense', '_blank')}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                  <ExternalLink className="w-4 h-4" />
                </ModernButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">4KB</div>
                  <div className="text-sm text-gray-500">Gzipped size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-500">TypeScript</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">0</div>
                  <div className="text-sm text-gray-500">Dependencies</div>
                </div>
              </div>
            </motion.div>
          </div>
        </ModernContainer>
      </section>

      {/* Installation Section */}
      <section className="modern-section bg-gray-50">
        <ModernContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Installation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <CodeBlock title="NPM" showCopy={true}>
                {installationCode.npm}
              </CodeBlock>
              <CodeBlock title="Yarn" showCopy={true}>
                {installationCode.yarn}
              </CodeBlock>
              <CodeBlock title="PNPM" showCopy={true}>
                {installationCode.pnpm}
              </CodeBlock>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">React Hooks</h3>
                <CodeBlock title="React Integration" showCopy={true}>
                  {quickStartCode}
                </CodeBlock>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vanilla JavaScript</h3>
                <CodeBlock title="Core API" showCopy={true}>
                  {vanillaJSCode}
                </CodeBlock>
              </div>
            </div>
          </div>
        </ModernContainer>
      </section>

      {/* React Hooks Section */}
      <section className="modern-section">
        <ModernContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              React Hooks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive collection of React hooks for viewport management and responsive design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reactHooks.map((hook, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <ModernCard className="h-full p-4">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">
                        {hook.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-gray-900 mb-2">
                        {hook.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {hook.description}
                      </p>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </ModernContainer>
      </section>

      {/* Breakpoint Systems */}
      <section className="modern-section bg-gray-50">
        <ModernContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Breakpoint Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from popular breakpoint systems or define your own custom breakpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {breakpointSystems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <ModernCard>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-blue-600">
                        {system.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {system.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-mono">
                        {system.breakpoints}
                      </p>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Configuration Example
            </h3>
            <CodeBlock title="Custom Configuration" showCopy={true}>
              {configCode}
            </CodeBlock>
          </div>
        </ModernContainer>
      </section>

      {/* Links and Resources */}
      <section className="modern-section">
        <ModernContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Resources & Links
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional resources to help you get the most out of viewport-sense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModernCard className="text-center">
              <Github className="w-8 h-8 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub Repository</h3>
              <p className="text-gray-600 text-sm mb-4">Source code, issues, and contributions</p>
              <ModernButton 
                variant="secondary" 
                size="sm"
                onClick={() => window.open('https://github.com/nkindre/viewport-sense', '_blank')}
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </ModernButton>
            </ModernCard>

            <ModernCard className="text-center">
              <Package className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NPM Package</h3>
              <p className="text-gray-600 text-sm mb-4">Download statistics and package info</p>
              <ModernButton 
                variant="secondary" 
                size="sm"
                onClick={() => window.open('https://www.npmjs.com/package/viewport-sense', '_blank')}
              >
                View on NPM
                <ExternalLink className="w-4 h-4" />
              </ModernButton>
            </ModernCard>

            <ModernCard className="text-center">
              <MousePointer className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demo</h3>
              <p className="text-gray-600 text-sm mb-4">Try all features in real-time</p>
              <ModernButton 
                variant="accent" 
                size="sm"
                onClick={() => navigate('/demo')}
              >
                View Demo
                <ChevronRight className="w-4 h-4" />
              </ModernButton>
            </ModernCard>
          </div>
        </ModernContainer>
      </section>
    </div>
  );
};

export default Docs;