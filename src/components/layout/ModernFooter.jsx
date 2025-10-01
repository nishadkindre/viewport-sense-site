import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Package, Heart, Code, Zap } from 'lucide-react';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Product': [
      { name: 'Features', href: '/#features' },
      { name: 'Demo', href: '/demo' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Examples', href: '/examples' },
    ],
    'Resources': [
      { name: 'Getting Started', href: '/docs/getting-started' },
      { name: 'API Reference', href: '/docs/api' },
      { name: 'GitHub', href: 'https://github.com/nishadkindre/viewport-sense', external: true },
      { name: 'NPM Package', href: 'https://www.npmjs.com/package/viewport-sense', external: true },
    ],
    'Community': [
      { name: 'Issues', href: 'https://github.com/nishadkindre/viewport-sense/issues', external: true },
      { name: 'Discussions', href: 'https://github.com/nishadkindre/viewport-sense/discussions', external: true },
      { name: 'Contributing', href: 'https://github.com/nishadkindre/viewport-sense/blob/main/CONTRIBUTING.md', external: true },
      { name: 'Changelog', href: 'https://github.com/nishadkindre/viewport-sense/blob/main/CHANGELOG.md', external: true },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="modern-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div className="text-gray-900 font-semibold text-lg">
                Viewport Sense
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              A modern, lightweight library for responsive breakpoint detection and viewport management.
            </p>
            
            {/* Stats */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span>4KB gzipped</span>
              </div>
              <div className="flex items-center space-x-1">
                <Code className="w-4 h-4" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>© {currentYear} Viewport Sense. Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for developers.</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a
              href="https://github.com/nishadkindre/viewport-sense"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.npmjs.com/package/viewport-sense"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Package className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;