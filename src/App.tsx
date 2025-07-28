function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI-Powered LMS Demo
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to your AI-powered Learning Management System created by Cursor!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Dashboard</h2>
            <p className="text-gray-600">AI-powered insights and analytics</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Courses</h2>
            <p className="text-gray-600">AI-recommended course catalog</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">AI Assistant</h2>
            <p className="text-gray-600">Interactive learning companion</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Students</h2>
            <p className="text-gray-600">Student management with AI insights</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h2>
            <p className="text-gray-600">AI-driven performance analytics</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings</h2>
            <p className="text-gray-600">AI configuration and preferences</p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">🚀 Demo Features</h3>
          <ul className="text-blue-700 space-y-1">
            <li>• AI-powered course recommendations</li>
            <li>• Intelligent learning analytics</li>
            <li>• Interactive AI assistant</li>
            <li>• Real-time progress tracking</li>
            <li>• Predictive student insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;