import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Clock, 
  Star,
  Brain,
  TrendingUp,
  Award
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  students: number;
  duration: string;
  rating: number;
  category: string;
  aiRecommended: boolean;
  progress: number;
  image: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: 'AI Fundamentals',
      description: 'Learn the basics of artificial intelligence and machine learning',
      instructor: 'Dr. Sarah Chen',
      students: 156,
      duration: '8 weeks',
      rating: 4.8,
      category: 'Technology',
      aiRecommended: true,
      progress: 85,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Data Science Essentials',
      description: 'Master data analysis, visualization, and statistical modeling',
      instructor: 'Prof. Michael Rodriguez',
      students: 203,
      duration: '10 weeks',
      rating: 4.9,
      category: 'Data Science',
      aiRecommended: true,
      progress: 92,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      description: 'Build modern web applications with React and Node.js',
      instructor: 'Alex Johnson',
      students: 89,
      duration: '12 weeks',
      rating: 4.7,
      category: 'Programming',
      aiRecommended: false,
      progress: 78,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      description: 'Learn modern marketing techniques and analytics',
      instructor: 'Emma Wilson',
      students: 134,
      duration: '6 weeks',
      rating: 4.6,
      category: 'Marketing',
      aiRecommended: true,
      progress: 65,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Business Analytics',
      description: 'Transform data into actionable business insights',
      instructor: 'Dr. James Thompson',
      students: 98,
      duration: '8 weeks',
      rating: 4.8,
      category: 'Business',
      aiRecommended: false,
      progress: 45,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'UX/UI Design Principles',
      description: 'Create user-centered digital experiences',
      instructor: 'Lisa Park',
      students: 76,
      duration: '6 weeks',
      rating: 4.9,
      category: 'Design',
      aiRecommended: true,
      progress: 88,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Data Science', 'Programming', 'Marketing', 'Business', 'Design'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const aiRecommendedCourses = courses.filter(course => course.aiRecommended);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600 mt-1">Manage and explore AI-recommended courses</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Course</span>
        </button>
      </div>

      {/* AI Recommendations Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Brain className="w-6 h-6 text-primary-600" />
          <h2 className="text-lg font-semibold text-primary-900">AI Recommendations</h2>
        </div>
        <p className="text-primary-700 mb-4">
          Based on student performance and learning patterns, we recommend these courses for optimal learning outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiRecommendedCourses.slice(0, 3).map((course) => (
            <div key={course.id} className="bg-white rounded-lg p-4 border border-primary-200">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">Recommended</span>
              </div>
              <h3 className="font-medium text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field w-40"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
          >
            {/* Course Image */}
            <div className="relative mb-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              {course.aiRecommended && (
                <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <Brain className="w-3 h-3" />
                  <span>AI</span>
                </div>
              )}
            </div>

            {/* Course Info */}
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{course.description}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{course.instructor}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <span className="text-primary-600 font-medium">{course.category}</span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900 font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full btn-primary">
                Continue Learning
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Courses; 