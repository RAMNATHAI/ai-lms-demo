import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Clock, 
  Award,
  Brain,
  Target,
  Activity,
  PieChart
} from 'lucide-react';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface Metric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ComponentType<any>;
}

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const metrics: Metric[] = [
    {
      title: 'Total Enrollments',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Course Completion',
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: Award
    },
    {
      title: 'Avg. Study Time',
      value: '2.3h',
      change: '+0.4h',
      trend: 'up',
      icon: Clock
    },
    {
      title: 'AI Recommendations',
      value: '156',
      change: '+23',
      trend: 'up',
      icon: Brain
    }
  ];

  const coursePerformance: ChartData[] = [
    { label: 'AI Fundamentals', value: 92, color: '#3B82F6' },
    { label: 'Data Science', value: 88, color: '#10B981' },
    { label: 'Web Development', value: 85, color: '#F59E0B' },
    { label: 'Digital Marketing', value: 78, color: '#EF4444' },
    { label: 'Business Analytics', value: 82, color: '#8B5CF6' }
  ];

  const studentEngagement: ChartData[] = [
    { label: 'Very Active', value: 45, color: '#10B981' },
    { label: 'Active', value: 35, color: '#3B82F6' },
    { label: 'Moderate', value: 15, color: '#F59E0B' },
    { label: 'Inactive', value: 5, color: '#EF4444' }
  ];

  const aiInsights = [
    {
      id: 1,
      type: 'performance',
      title: 'Performance Boost',
      description: 'Students using AI recommendations show 23% better completion rates',
      metric: '+23%',
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'engagement',
      title: 'Engagement Patterns',
      description: 'Peak study times identified: 9-11 AM and 7-9 PM',
      metric: '2 peaks',
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'prediction',
      title: 'Dropout Prediction',
      description: 'AI identified 8 students at risk of dropping out',
      metric: '8 students',
      color: 'text-red-600'
    }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? TrendingUp : Activity;
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">AI-powered insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="input-field w-32"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                                 <div className="flex items-center space-x-1 mt-1">
                   {React.createElement(getTrendIcon(metric.trend), { className: `w-4 h-4 ${getTrendColor(metric.trend)}` })}
                   <span className={`text-sm ${getTrendColor(metric.trend)}`}>{metric.change}</span>
                 </div>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <metric.icon className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="w-6 h-6 text-primary-600" />
          <h2 className="text-lg font-semibold text-primary-900">AI-Powered Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiInsights.map((insight) => (
            <div key={insight.id} className="bg-white rounded-lg p-4 border border-primary-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{insight.title}</h3>
                <span className={`text-sm font-bold ${insight.color}`}>{insight.metric}</span>
              </div>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Performance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card"
        >
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Course Performance</h2>
          </div>
          <div className="space-y-4">
            {coursePerformance.map((course, index) => (
              <div key={course.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">{course.label}</span>
                  <span className="font-medium text-gray-900">{course.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.value}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: course.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Student Engagement */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card"
        >
          <div className="flex items-center space-x-2 mb-4">
            <PieChart className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Student Engagement</h2>
          </div>
          <div className="space-y-4">
            {studentEngagement.map((engagement, index) => (
              <div key={engagement.label} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: engagement.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{engagement.label}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{engagement.value}%</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-gray-900">Engagement Goal</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm font-medium text-gray-900">75%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Learning Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="card"
      >
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary-600" />
          <h2 className="text-lg font-semibold text-gray-900">Learning Trends</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Course Completion</h3>
            <p className="text-2xl font-bold text-green-600">87%</p>
            <p className="text-sm text-gray-600">+5% from last month</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Study Time</h3>
            <p className="text-2xl font-bold text-blue-600">2.3h</p>
            <p className="text-sm text-gray-600">+0.4h from last month</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Satisfaction</h3>
            <p className="text-2xl font-bold text-purple-600">4.8/5</p>
            <p className="text-sm text-gray-600">+0.2 from last month</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics; 