import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  Zap, 
  Shield, 
  Code, 
  Download,
  ArrowRight,
  Github,
  Star,
  Package,
  Heart
} from 'lucide-react';

import ModernContainer from '../components/layout/ModernContainer';
import ModernCard from '../components/ui/ModernCard';
import ModernButton from '../components/ui/ModernButton';

// Live viewport stats component with modern design
const LiveViewportStats = () => {
  const [viewport, setViewport] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: 'unknown'
  });

  React.useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      let breakpoint = 'xs';
      
      if (width >= 1536) breakpoint = '2xl';
      else if (width >= 1280) breakpoint = 'xl';
      else if (width >= 1024) breakpoint = 'lg';
      else if (width >= 768) breakpoint = 'md';
      else if (width >= 640) breakpoint = 'sm';
      
      setViewport({
        width,
        height: window.innerHeight,
        breakpoint
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="modern-card font-mono text-sm"
    >
      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-2xl font-semibold text-blue-600 mb-1">
            {viewport.width}
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-wide">Width</div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-gray-900 mb-1">
            {viewport.height}
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-wide">Height</div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-blue-600 mb-1 uppercase">
            {viewport.breakpoint}
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-wide">Breakpoint</div>
        </div>
      </div>
    </motion.div>
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

const Home = () => {
  const navigate = useNavigate();
  
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

  const codeExample = `import { useViewport, useDevice } from 'viewport-sense/react';

function MyComponent() {
  const { width, height, breakpoint } = useViewport();
  const { isMobile, isTablet, isDesktop } = useDevice();

  return (
    <div>
      <p>Current breakpoint: {breakpoint}</p>
      <p>Device type: {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}</p>
      <p>Viewport: {width}x{height}</p>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="modern-section">
        <ModernContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Modern Viewport Detection</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Viewport Sense
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              A modern, lightweight library for <span className="font-semibold text-blue-600">responsive breakpoint detection</span> and 
              viewport management in React applications. Built with TypeScript, optimized for performance.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>4KB Gzipped</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Zero Dependencies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>React Optimized</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <ModernButton 
                variant="primary" 
                size="lg" 
                animate
                onClick={() => navigate('/docs')}
              >
                <Download className="w-5 h-5" />
                Get Started
              </ModernButton>
              
              <ModernButton 
                variant="secondary" 
                size="lg" 
                animate
                onClick={() => window.open('https://github.com/nkindre/viewport-sense', '_blank')}
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <Star className="w-4 h-4" />
              </ModernButton>
            </div>

            {/* Live Stats */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Monitor className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Live Viewport Stats</span>
              </div>
              <LiveViewportStats />
            </div>
          </motion.div>
        </ModernContainer>
      </section>

      {/* Features Section */}
      <section className="modern-section bg-gray-50">
        <ModernContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for responsive viewport management in modern web applications.
            </p>
          </motion.div>

          <div className="modern-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </ModernContainer>
      </section>

      {/* Code Example Section */}
      <section className="modern-section">
        <ModernContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Simple to Use
              </h2>
              <p className="text-lg text-gray-600">
                Get started with just a few lines of code
              </p>
            </div>

            <div className="modern-code-block relative">
              <button 
                className="copy-button"
                onClick={() => {
                  navigator.clipboard.writeText(codeExample);
                  // Show a brief success message
                  const button = event.target;
                  const originalText = button.textContent;
                  button.textContent = 'Copied!';
                  button.classList.add('bg-green-100', 'text-green-700');
                  setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('bg-green-100', 'text-green-700');
                  }, 2000);
                }}
              >
                Copy
              </button>
              {codeExample}
            </div>

            <div className="text-center mt-8">
              <Link to="/demo">
                <ModernButton variant="accent" size="lg" animate>
                  Try Interactive Demo
                  <ArrowRight className="w-5 h-5" />
                </ModernButton>
              </Link>
            </div>
          </motion.div>
        </ModernContainer>
      </section>

      {/* CTA Section */}
      <section className="modern-section bg-gray-50">
        <ModernContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Build Responsive?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
              Join thousands of developers building better responsive experiences with Viewport Sense.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModernButton 
                variant="accent" 
                size="lg" 
                animate
                onClick={() => navigate('/docs')}
              >
                <Download className="w-5 h-5" />
                Install Now
              </ModernButton>
              
              <ModernButton 
                variant="secondary" 
                size="lg" 
                animate
                onClick={() => window.open('https://github.com/nkindre/viewport-sense', '_blank')}
              >
                <Star className="w-5 h-5" />
                Star on GitHub
              </ModernButton>
            </div>
          </motion.div>
        </ModernContainer>
      </section>
    </div>
  );
};

export default Home;