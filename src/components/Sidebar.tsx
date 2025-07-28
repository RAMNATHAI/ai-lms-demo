import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  Bot,
  Settings,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'courses', icon: BookOpen, label: 'Courses' },
    { id: 'students', icon: Users, label: 'Students' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'ai-assistant', icon: Bot, label: 'AI Assistant' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">AI LMS</h1>
            <p className="text-xs text-gray-500">Powered by AI</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`sidebar-item w-full text-left ${
              currentPage === item.id ? 'active' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* AI Status */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">AI Active</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Real-time learning insights</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 