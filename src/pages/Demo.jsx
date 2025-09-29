import React, { useRef } from 'react';
import {
  Monitor,
  Smartphone,
  Tablet,
  Search,
  Eye,
  Accessibility,
  Move,
  Shield,
  Activity,
  Zap,
  Palette,
  Maximize2,
  RotateCcw,
  Wifi,
  Globe,
  ArrowDown,
  ArrowUp,
  CheckCircle,
  XCircle,
  Info,
  MousePointer,
  Navigation
} from 'lucide-react';
import {
  useViewport,
  useBreakpoint,
  useDevice,
  useAccessibility,
  useScrollPosition,
  useElementVisibility,
  useSafeArea,
  useMediaQuery,
  useBreakpointValue,
  useDeviceType,
  useOrientation,
  useColorScheme,
  useReducedMotion,
} from '../hooks/useViewportSense';

import ModernContainer from '../components/layout/ModernContainer';
import { ModernCard } from '../components/ui';

// Helper components for better UI
const InfoItem = ({ icon: Icon, label, value, type = 'default' }) => {
  const getValueColor = () => {
    switch (type) {
      case 'active': return 'text-green-600 bg-green-50';
      case 'inactive': return 'text-gray-500 bg-gray-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'accent': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-900 bg-gray-50';
    }
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center space-x-3">
        {Icon && <Icon className="w-4 h-4 text-gray-500" />}
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getValueColor()}`}>
        {value}
      </span>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, color = 'blue' }) => {
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600'
  };

  return (
    <div className="flex items-center space-x-3 mb-6">
      <div className={`w-10 h-10 ${colorMap[color]} bg-${color.split('-')[0]}-100 rounded-lg flex items-center justify-center`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
  );
};

// Demo components
function ViewportInfo() {
  const viewport = useViewport();
  
  const getDeviceIcon = () => {
    if (viewport.isMobile) return Smartphone;
    if (viewport.isTablet) return Tablet;
    return Monitor;
  };

  const getDeviceType = () => {
    if (viewport.isMobile) return { text: 'Mobile', type: 'accent' };
    if (viewport.isTablet) return { text: 'Tablet', type: 'warning' };
    return { text: 'Desktop', type: 'active' };
  };

  const deviceType = getDeviceType();
  
  return (
    <ModernCard animate hover>
      <SectionHeader icon={Monitor} title="Viewport Information" color="blue" />
      <div className="space-y-3">
        <InfoItem 
          icon={Maximize2} 
          label="Width" 
          value={`${viewport.width}px`}
          type="default"
        />
        <InfoItem 
          icon={Maximize2} 
          label="Height" 
          value={`${viewport.height}px`}
          type="default"
        />
        <InfoItem 
          icon={Activity} 
          label="Breakpoint" 
          value={viewport.breakpoint}
          type="accent"
        />
        <InfoItem 
          icon={getDeviceIcon()} 
          label="Device Type" 
          value={deviceType.text}
          type={deviceType.type}
        />
        <InfoItem 
          icon={RotateCcw} 
          label="Orientation" 
          value={viewport.orientation}
          type="default"
        />
        <InfoItem 
          icon={Eye} 
          label="Pixel Ratio" 
          value={viewport.pixelRatio}
          type="default"
        />
      </div>
    </ModernCard>
  );
}

function DeviceInfo() {
  const device = useDevice();
  
  return (
    <ModernCard animate hover>
      <SectionHeader icon={Smartphone} title="Device Detection" color="green" />
      <div className="space-y-3">
        <InfoItem 
          icon={Globe} 
          label="Browser" 
          value={device.browser || 'Unknown'}
          type="accent"
        />
        <InfoItem 
          icon={Info} 
          label="Version" 
          value={device.browserVersion || 'Unknown'}
          type="default"
        />
        <InfoItem 
          icon={Monitor} 
          label="Operating System" 
          value={device.os || 'Unknown'}
          type="active"
        />
        <InfoItem 
          icon={MousePointer} 
          label="Touch Points" 
          value={device.touchPoints ?? 0}
          type={device.touchPoints > 0 ? 'active' : 'inactive'}
        />
        <InfoItem 
          icon={Shield} 
          label="Progressive Web App" 
          value={device.isPWA ? 'Yes' : 'No'}
          type={device.isPWA ? 'active' : 'inactive'}
        />
        <InfoItem 
          icon={Activity} 
          label="Screen Density" 
          value={device.screenDensity || 'Unknown'}
          type="default"
        />
      </div>
    </ModernCard>
  );
}

function BreakpointQueries() {
  const breakpoint = useBreakpoint();
  const isAboveMd = useMediaQuery('(min-width: 768px)');
  const isBelowLg = useMediaQuery('(max-width: 991px)');
  
  return (
    <ModernCard animate hover>
      <SectionHeader icon={Search} title="Breakpoint Queries" color="purple" />
      <div className="space-y-3">
        <InfoItem 
          icon={Activity} 
          label="Current Breakpoint" 
          value={breakpoint}
          type="accent"
        />
        <InfoItem 
          icon={isAboveMd ? CheckCircle : XCircle} 
          label="Above Medium (≥768px)" 
          value={isAboveMd ? 'Yes' : 'No'}
          type={isAboveMd ? 'active' : 'inactive'}
        />
        <InfoItem 
          icon={isBelowLg ? CheckCircle : XCircle} 
          label="Below Large (≤991px)" 
          value={isBelowLg ? 'Yes' : 'No'}
          type={isBelowLg ? 'active' : 'inactive'}
        />
      </div>
    </ModernCard>
  );
}

function AccessibilityInfo() {
  const a11y = useAccessibility();
  const colorScheme = useColorScheme();
  const reducedMotion = useReducedMotion();
  
  return (
    <ModernCard animate hover>
      <SectionHeader icon={Accessibility} title="Accessibility" color="red" />
      <div className="space-y-3">
        <InfoItem 
          icon={Palette} 
          label="Color Scheme" 
          value={colorScheme || 'no-preference'}
          type={colorScheme === 'dark' ? 'active' : 'default'}
        />
        <InfoItem 
          icon={reducedMotion ? CheckCircle : XCircle} 
          label="Reduced Motion" 
          value={reducedMotion ? 'Yes' : 'No'}
          type={reducedMotion ? 'active' : 'inactive'}
        />
        <InfoItem 
          icon={a11y?.prefersHighContrast ? CheckCircle : XCircle} 
          label="High Contrast" 
          value={a11y?.prefersHighContrast ? 'Yes' : 'No'}
          type={a11y?.prefersHighContrast ? 'active' : 'inactive'}
        />
        <InfoItem 
          icon={a11y?.prefersReducedData ? CheckCircle : XCircle} 
          label="Reduced Data" 
          value={a11y?.prefersReducedData ? 'Yes' : 'No'}
          type={a11y?.prefersReducedData ? 'active' : 'inactive'}
        />
      </div>
    </ModernCard>
  );
}

function ResponsiveDemo() {
  const deviceType = useDeviceType();
  const orientation = useOrientation();
  
  const fontSize = useBreakpointValue({
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
  });
  
  const getDeviceIcon = () => {
    if (deviceType?.isMobile) return Smartphone;
    if (deviceType?.isTablet) return Tablet;
    return Monitor;
  };

  const DeviceIcon = getDeviceIcon();
  
  // Convert deviceType object to string
  const deviceTypeString = deviceType?.isMobile ? 'Mobile' : 
                          deviceType?.isTablet ? 'Tablet' : 
                          deviceType?.isDesktop ? 'Desktop' : 'Unknown';
  
  return (
    <ModernCard className="mb-16">
      <SectionHeader icon={Zap} title="Responsive Demo" color="orange" />
      
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 rounded-lg">
          <DeviceIcon className="w-6 h-6 text-blue-600" />
          <div>
            <p className="text-lg font-semibold text-gray-900" style={{ fontSize }}>
              This content adapts to your screen size!
            </p>
            <p className="text-sm text-gray-600">
              Device: {deviceTypeString} • {orientation || 'Unknown'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bp-mobile-only border border-green-200 bg-green-50 p-4 rounded-lg text-center">
          <Smartphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <p className="text-green-800 font-medium">Mobile Only</p>
          <p className="text-green-600 text-sm">Visible on mobile devices</p>
        </div>
        <div className="bp-tablet-only border border-yellow-200 bg-yellow-50 p-4 rounded-lg text-center">
          <Tablet className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <p className="text-yellow-800 font-medium">Tablet Only</p>
          <p className="text-yellow-600 text-sm">Visible on tablet devices</p>
        </div>
        <div className="bp-desktop-only border border-blue-200 bg-blue-50 p-4 rounded-lg text-center">
          <Monitor className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-blue-800 font-medium">Desktop Only</p>
          <p className="text-blue-600 text-sm">Visible on desktop screens</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-2 mb-3">
          <Activity className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900">Dynamic Font Size</span>
        </div>
        <p className="text-gray-600" style={{ fontSize }}>
          This text size changes based on your screen breakpoint: {fontSize}
        </p>
      </div>
    </ModernCard>
  );
}

function SafeAreaDemo() {
  const safeArea = useSafeArea();
  
  return (
    <ModernCard animate hover className="mb-16">
      <SectionHeader icon={Shield} title="Safe Area Demo" color="green" />
      <p className="text-gray-600 mb-6">Device safe areas respect notches, home indicators, and screen cutouts.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <InfoItem 
          icon={ArrowUp} 
          label="Top Inset" 
          value={`${safeArea?.top || 0}px`}
          type={safeArea?.top > 0 ? 'active' : 'default'}
        />
        <InfoItem 
          icon={ArrowDown} 
          label="Bottom Inset" 
          value={`${safeArea?.bottom || 0}px`}
          type={safeArea?.bottom > 0 ? 'active' : 'default'}
        />
        <InfoItem 
          icon={Navigation} 
          label="Left Inset" 
          value={`${safeArea?.left || 0}px`}
          type={safeArea?.left > 0 ? 'active' : 'default'}
        />
        <InfoItem 
          icon={Navigation} 
          label="Right Inset" 
          value={`${safeArea?.right || 0}px`}
          type={safeArea?.right > 0 ? 'active' : 'default'}
        />
      </div>

      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-dashed border-blue-200">
        <div className="text-center">
          <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-blue-900 font-medium">Safe Area Visualization</p>
          <p className="text-blue-600 text-sm">Content within safe boundaries</p>
        </div>
      </div>
    </ModernCard>
  );
}

function ScrollDemo() {
  const scroll = useScrollPosition();
  
  const getDirectionIcon = () => {
    if (scroll?.directionY === 'down') return ArrowDown;
    if (scroll?.directionY === 'up') return ArrowUp;
    return Move;
  };

  const DirectionIcon = getDirectionIcon();
  
  return (
    <ModernCard animate hover>
      <SectionHeader icon={Move} title="Scroll Position" color="blue" />
      <div className="space-y-3">
        <InfoItem 
          icon={Navigation} 
          label="Scroll Y Position" 
          value={`${Math.round(scroll?.y || 0)}px`}
          type="accent"
        />
        <InfoItem 
          icon={DirectionIcon} 
          label="Scroll Direction" 
          value={scroll?.directionY || 'none'}
          type={scroll?.directionY ? 'active' : 'inactive'}
        />
        <InfoItem 
          icon={Zap} 
          label="Scroll Velocity" 
          value={`${Math.round(scroll?.velocity || 0)}px/s`}
          type={Math.abs(scroll?.velocity || 0) > 100 ? 'warning' : 'default'}
        />
        <InfoItem 
          icon={scroll?.isNearTop ? CheckCircle : XCircle} 
          label="Near Top" 
          value={scroll?.isNearTop ? 'Yes' : 'No'}
          type={scroll?.isNearTop ? 'active' : 'inactive'}
        />
        <InfoItem 
          icon={scroll?.isNearBottom ? CheckCircle : XCircle} 
          label="Near Bottom" 
          value={scroll?.isNearBottom ? 'Yes' : 'No'}
          type={scroll?.isNearBottom ? 'active' : 'inactive'}
        />
      </div>

      {/* Visual scroll indicator */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Page Progress</span>
          <span className="text-sm text-gray-500">{Math.round((scroll?.y || 0) / Math.max(document.documentElement.scrollHeight - window.innerHeight || 1, 1) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ 
              width: `${Math.min(Math.max((scroll?.y || 0) / Math.max(document.documentElement.scrollHeight - window.innerHeight || 1, 1) * 100, 0), 100)}%` 
            }}
          />
        </div>
      </div>
    </ModernCard>
  );
}

function VisibilityDemo() {
  // Create refs properly - not in an array
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  
  // Call hooks for each ref - hooks must be called in the same order
  const isVisible1 = useElementVisibility(ref1);
  const isVisible2 = useElementVisibility(ref2);
  const isVisible3 = useElementVisibility(ref3);
  const isVisible4 = useElementVisibility(ref4);
  const isVisible5 = useElementVisibility(ref5);
  
  // Create arrays for rendering
  const items = [
    { ref: ref1, isVisible: isVisible1 },
    { ref: ref2, isVisible: isVisible2 },
    { ref: ref3, isVisible: isVisible3 },
    { ref: ref4, isVisible: isVisible4 },
    { ref: ref5, isVisible: isVisible5 },
  ];
  
  return (
    <ModernCard animate hover>
      <SectionHeader icon={Eye} title="Element Visibility" color="purple" />
      <p className="text-gray-600 mb-6">Scroll to watch these elements change state when they enter the viewport:</p>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            ref={item.ref}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              item.isVisible 
                ? 'border-green-200 bg-green-50' 
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {item.isVisible ? (
                  <Eye className="w-5 h-5 text-green-600" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
                <span className="font-medium text-gray-900">
                  Visibility Target {index + 1}
                </span>
              </div>
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                item.isVisible 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {item.isVisible ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Visible</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4" />
                    <span>Hidden</span>
                  </>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This element {item.isVisible ? 'is currently visible' : 'is not visible'} in the viewport.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Info className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-blue-900">Intersection Observer</span>
        </div>
        <p className="text-blue-800 text-sm">
          Elements are tracked using the Intersection Observer API for optimal performance.
        </p>
      </div>
    </ModernCard>
  );
}

function ScrollIndicator() {
  const scroll = useScrollPosition();
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const scrollPercent = ((scroll?.y || 0) / maxScroll) * 100;
  
  return (
    <div 
      className="scroll-indicator" 
      style={{ width: `${Math.min(Math.max(scrollPercent, 0), 100)}%` }}
    />
  );
}

function App() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <ScrollIndicator />
      <ModernContainer>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            <span>Live Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Demo
          </h1>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience <span className="font-semibold text-blue-600">Viewport Sense</span> in action. 
            All values update in real-time as you interact with your browser, resize windows, 
            scroll, and change device orientation.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-12">
            <div className="flex items-center space-x-2">
              <Monitor className="w-4 h-4" />
              <span>Responsive</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Real-time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Interactive</span>
            </div>
            <div className="flex items-center space-x-2">
              <Accessibility className="w-4 h-4" />
              <span>Accessible</span>
            </div>
          </div>
        </div>

        <div className="modern-grid mb-16">
          <ViewportInfo />
          <DeviceInfo />
          <BreakpointQueries />
          <AccessibilityInfo />
        </div>

        <ResponsiveDemo />
        <SafeAreaDemo />
        
        <div className="modern-grid mb-16">
          <ScrollDemo />
        </div>

        <VisibilityDemo />
      </ModernContainer>
    </div>
  );
}

export default App;
