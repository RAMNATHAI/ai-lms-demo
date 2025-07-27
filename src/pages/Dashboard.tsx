import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  Brain
} from 'lucide-react';

interface Metric {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface AIInsight {
  id: number;
  type: 'success' | 'warning' | 'info';
  message: string;
  icon: React.ComponentType<any>;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      title: 'Total Students',
      value: '1,247',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Courses',
      value: '24',
      change: '+3',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Completion Rate',
      value: '87%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'AI Recommendations',
      value: '156',
      change: '+23',
      icon: Brain,
      color: 'text-orange-600'
    }
  ]);

  const [aiInsights, setAiInsights] = useState<AIInsight[]>([
    {
      id: 1,
      type: 'success',
      message: 'Students are performing 15% better in AI-recommended courses',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'warning',
      message: '3 students may need additional support in Advanced Mathematics',
      icon: AlertCircle
    },
    {
      id: 3,
      type: 'info',
      message: 'AI detected optimal study patterns for 89% of students',
      icon: Brain
    }
  ]);

  const [recentActivity] = useState([
    { id: 1, action: 'New course "AI Fundamentals" created', time: '2 hours ago', user: 'Dr. Smith' },
    { id: 2, action: 'Student Sarah completed "Data Science Basics"', time: '3 hours ago', user: 'Sarah Johnson' },
    { id: 3, action: 'AI generated personalized study plan for 15 students', time: '4 hours ago', user: 'AI Assistant' },
    { id: 4, action: 'New student enrollment: John Doe', time: '5 hours ago', user: 'John Doe' },
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">AI-powered insights and analytics</p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-blue-50 px-4 py-2 rounded-lg">
          <Brain className="w-5 h-5 text-primary-600" />
          <span className="text-sm font-medium text-primary-700">AI Assistant Active</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <p className="text-sm text-green-600 mt-1">{metric.change} from last month</p>
              </div>
              <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${metric.color}`}>
                <metric.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Insights and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>
          </div>
          <div className="space-y-3">
            {aiInsights.map((insight) => (
              <div key={insight.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <insight.icon className={`w-5 h-5 mt-0.5 ${
                  insight.type === 'success' ? 'text-green-600' :
                  insight.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                }`} />
                <p className="text-sm text-gray-700">{insight.message}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{activity.time}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-primary-600">{activity.user}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="card"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200">
            <BookOpen className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Create Course</span>
          </button>
          <button className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200">
            <Users className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Add Student</span>
          </button>
          <button className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200">
            <Brain className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">AI Analysis</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 