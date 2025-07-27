import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette, 
  Brain,
  ToggleLeft,
  ToggleRight,
  Save,
  RefreshCw
} from 'lucide-react';

interface Setting {
  id: string;
  title: string;
  description: string;
  type: 'toggle' | 'select' | 'input';
  value: any;
  options?: string[];
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<Setting[]>([
    {
      id: 'ai-assistant',
      title: 'AI Assistant',
      description: 'Enable AI-powered learning assistance and recommendations',
      type: 'toggle',
      value: true
    },
    {
      id: 'auto-recommendations',
      title: 'Auto Recommendations',
      description: 'Automatically suggest courses based on learning patterns',
      type: 'toggle',
      value: true
    },
    {
      id: 'progress-tracking',
      title: 'Progress Tracking',
      description: 'Track and analyze learning progress with AI insights',
      type: 'toggle',
      value: true
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Receive notifications about course updates and AI insights',
      type: 'toggle',
      value: true
    },
    {
      id: 'ai-language',
      title: 'AI Language',
      description: 'Preferred language for AI interactions',
      type: 'select',
      value: 'English',
      options: ['English', 'Spanish', 'French', 'German', 'Chinese']
    },
    {
      id: 'ai-intensity',
      title: 'AI Assistance Level',
      description: 'How proactive should the AI be in providing assistance',
      type: 'select',
      value: 'Moderate',
      options: ['Minimal', 'Moderate', 'High', 'Maximum']
    }
  ]);

  const [isSaving, setIsSaving] = useState(false);

  const handleSettingChange = (id: string, value: any) => {
    setSettings(prev => 
      prev.map(setting => 
        setting.id === id ? { ...setting, value } : setting
      )
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate saving
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const handleReset = () => {
    setSettings(prev => 
      prev.map(setting => ({
        ...setting,
        value: setting.type === 'toggle' ? true : 
               setting.type === 'select' ? setting.options?.[0] || '' : ''
      }))
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Configure your AI-powered learning experience</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleReset}
            className="btn-secondary flex items-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="btn-primary flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      {/* AI Configuration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">AI Configuration</h2>
            <p className="text-gray-600">Customize your AI learning assistant</p>
          </div>
        </div>

        <div className="space-y-6">
          {settings.slice(0, 3).map((setting) => (
            <div key={setting.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{setting.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{setting.description}</p>
              </div>
              <button
                onClick={() => handleSettingChange(setting.id, !setting.value)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  setting.value ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    setting.value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">AI Preferences</h2>
            <p className="text-gray-600">Personalize your AI experience</p>
          </div>
        </div>

        <div className="space-y-6">
          {settings.slice(3).map((setting) => (
            <div key={setting.id} className="space-y-2">
              <label className="block">
                <span className="font-medium text-gray-900">{setting.title}</span>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </label>
              {setting.type === 'select' && (
                <select
                  value={setting.value}
                  onChange={(e) => handleSettingChange(setting.id, e.target.value)}
                  className="input-field w-full md:w-64"
                >
                  {setting.options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            <p className="text-gray-600">Manage your notification preferences</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Course Updates</h3>
              <p className="text-sm text-gray-600 mt-1">Get notified when new content is added to your courses</p>
            </div>
            <button
              onClick={() => handleSettingChange('notifications', !settings.find(s => s.id === 'notifications')?.value)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                settings.find(s => s.id === 'notifications')?.value ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.find(s => s.id === 'notifications')?.value ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">AI Insights</h3>
              <p className="text-sm text-gray-600 mt-1">Receive AI-generated insights about your learning progress</p>
            </div>
            <button
              onClick={() => handleSettingChange('ai-insights', !settings.find(s => s.id === 'ai-insights')?.value)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                settings.find(s => s.id === 'ai-insights')?.value ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.find(s => s.id === 'ai-insights')?.value ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">System Status</h2>
            <p className="text-gray-600">Current system and AI status</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">AI Assistant</span>
            </div>
            <p className="text-sm text-green-600 mt-1">Active and ready</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-800">Learning Analytics</span>
            </div>
            <p className="text-sm text-blue-600 mt-1">Real-time tracking enabled</p>
          </div>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-800">Recommendations</span>
            </div>
            <p className="text-sm text-purple-600 mt-1">AI engine optimized</p>
          </div>
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-orange-800">Data Sync</span>
            </div>
            <p className="text-sm text-orange-600 mt-1">Last sync: 2 minutes ago</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings; 