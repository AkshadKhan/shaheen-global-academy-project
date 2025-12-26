
import  { useState, useEffect } from 'react';
import { X,  Edit, Trash2, LogOut, Users, Award } from 'lucide-react';

const API_URL = 'http://localhost:3000/api/v1/admin/auth';

// Types
interface Topper {
  _id: string;
  name: string;
  course: string;
  year: number;
  cgpa: number;
  profilePicture?: string;
}

interface Teacher {
  _id: string;
  name: string;
  department: string;
  designation: string;
  email: string;
  profilePicture?: string;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [activeTab, setActiveTab] = useState<'toppers' | 'teachers'>('toppers');
  
  // Login state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  
  // Toppers state
  const [toppers, setToppers] = useState<Topper[]>([]);
  const [showTopperModal, setShowTopperModal] = useState(false);
  const [editingTopper, setEditingTopper] = useState<Topper | null>(null);
  const [topperForm, setTopperForm] = useState({ name: '', course: '', year: '', cgpa: '' });
  const [topperImage, setTopperImage] = useState<File | null>(null);
  
  // Teachers state
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [teacherForm, setTeacherForm] = useState({ name: '', department: '', designation: '', email: '' });
  const [teacherImage, setTeacherImage] = useState<File | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      if (activeTab === 'toppers') {
        fetchToppers();
      } else {
        fetchTeachers();
      }
    }
  }, [isLoggedIn, activeTab]);

  // Auth Functions
  const handleRegister = async () => {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: regUsername, password: regPassword })
      });
      const data = await res.json();
      
      if (res.ok) {
        alert('Admin created successfully! Please login.');
        setShowRegister(false);
        setRegUsername('');
        setRegPassword('');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      alert('Error registering admin');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
        setIsLoggedIn(true);
        setUsername('');
        setPassword('');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Error logging in');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setIsLoggedIn(false);
  };

  // Toppers Functions
  const fetchToppers = async () => {
    try {
      const res = await fetch(`${API_URL}/toppers`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setToppers(data);
    } catch (error) {
      console.error('Error fetching toppers:', error);
    }
  };

  const openTopperModal = (topper?: Topper) => {
    if (topper) {
      setEditingTopper(topper);
      setTopperForm({
        name: topper.name,
        course: topper.course,
        year: topper.year.toString(),
        cgpa: topper.cgpa.toString()
      });
    } else {
      setEditingTopper(null);
      setTopperForm({ name: '', course: '', year: '', cgpa: '' });
    }
    setTopperImage(null);
    setShowTopperModal(true);
  };

  const handleTopperSubmit = async () => {
    const formData = new FormData();
    formData.append('name', topperForm.name);
    formData.append('course', topperForm.course);
    formData.append('year', topperForm.year);
    formData.append('cgpa', topperForm.cgpa);
    if (topperImage) {
      formData.append('profilePicture', topperImage);
    }
    
    try {
      const url = editingTopper 
        ? `${API_URL}/toppers/${editingTopper._id}`
        : `${API_URL}/toppers`;
      
      const res = await fetch(url, {
        method: editingTopper ? 'PUT' : 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      
      if (res.ok) {
        setShowTopperModal(false);
        setEditingTopper(null);
        fetchToppers();
      }
    } catch (error) {
      alert('Error saving topper');
    }
  };

  const deleteTopper = async (id: string) => {
    if (!confirm('Are you sure you want to delete this topper?')) return;
    
    try {
      await fetch(`${API_URL}/toppers/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchToppers();
    } catch (error) {
      alert('Error deleting topper');
    }
  };

  // Teachers Functions
  const fetchTeachers = async () => {
    try {
      const res = await fetch(`${API_URL}/teachers`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setTeachers(data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const openTeacherModal = (teacher?: Teacher) => {
    if (teacher) {
      setEditingTeacher(teacher);
      setTeacherForm({
        name: teacher.name,
        department: teacher.department,
        designation: teacher.designation,
        email: teacher.email
      });
    } else {
      setEditingTeacher(null);
      setTeacherForm({ name: '', department: '', designation: '', email: '' });
    }
    setTeacherImage(null);
    setShowTeacherModal(true);
  };

  const handleTeacherSubmit = async () => {
    const formData = new FormData();
    formData.append('name', teacherForm.name);
    formData.append('department', teacherForm.department);
    formData.append('designation', teacherForm.designation);
    formData.append('email', teacherForm.email);
    if (teacherImage) {
      formData.append('profilePicture', teacherImage);
    }
    
    try {
      const url = editingTeacher 
        ? `${API_URL}/teachers/${editingTeacher._id}`
        : `${API_URL}/teachers`;
      
      const res = await fetch(url, {
        method: editingTeacher ? 'PUT' : 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      
      if (res.ok) {
        setShowTeacherModal(false);
        setEditingTeacher(null);
        fetchTeachers();
      }
    } catch (error) {
      alert('Error saving teacher');
    }
  };

  const deleteTeacher = async (id: string) => {
    if (!confirm('Are you sure you want to delete this teacher?')) return;
    
    try {
      await fetch(`${API_URL}/teachers/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchTeachers();
    } catch (error) {
      alert('Error deleting teacher');
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Panel</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">University Admin</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('toppers')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              activeTab === 'toppers'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Award size={20} />
            Toppers
          </button>
          <button
            onClick={() => setActiveTab('teachers')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              activeTab === 'teachers'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users size={20} />
            Teachers
          </button>
        </div>

        {/* Toppers Tab */}
        {activeTab === 'toppers' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Toppers</h2>
              <button
                onClick={() => openTopperModal()}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Add Topper
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toppers.map((topper) => (
                <div key={topper._id} className="bg-white rounded-lg shadow-md p-6">
                  {topper.profilePicture && (
                    <img
                      src={`http://localhost:5000/${topper.profilePicture}`}
                      alt={topper.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-center mb-2">{topper.name}</h3>
                  <p className="text-gray-600 text-center mb-1">{topper.course}</p>
                  <p className="text-gray-600 text-center mb-1">Year: {topper.year}</p>
                  <p className="text-blue-600 font-bold text-center mb-4">CGPA: {topper.cgpa}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openTopperModal(topper)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTopper(topper._id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teachers Tab */}
        {activeTab === 'teachers' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Teachers</h2>
              <button
                onClick={() => openTeacherModal()}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Add Teacher
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher) => (
                <div key={teacher._id} className="bg-white rounded-lg shadow-md p-6">
                  {teacher.profilePicture && (
                    <img
                      src={`http://localhost:5000/${teacher.profilePicture}`}
                      alt={teacher.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-center mb-2">{teacher.name}</h3>
                  <p className="text-gray-600 text-center mb-1">{teacher.designation}</p>
                  <p className="text-gray-600 text-center mb-1">{teacher.department}</p>
                  <p className="text-blue-600 text-center mb-4">{teacher.email}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openTeacherModal(teacher)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTeacher(teacher._id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Topper Modal */}
      {showTopperModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {editingTopper ? 'Edit Topper' : 'Add Topper'}
              </h3>
              <button onClick={() => setShowTopperModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={topperForm.name}
                  onChange={(e) => setTopperForm({...topperForm, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Course</label>
                <input
                  type="text"
                  value={topperForm.course}
                  onChange={(e) => setTopperForm({...topperForm, course: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="number"
                  value={topperForm.year}
                  onChange={(e) => setTopperForm({...topperForm, year: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CGPA</label>
                <input
                  type="number"
                  step="0.01"
                  value={topperForm.cgpa}
                  onChange={(e) => setTopperForm({...topperForm, cgpa: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setTopperImage(e.target.files?.[0] || null)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <button
                onClick={handleTopperSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {editingTopper ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Teacher Modal */}
      {showTeacherModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {editingTeacher ? 'Edit Teacher' : 'Add Teacher'}
              </h3>
              <button onClick={() => setShowTeacherModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={teacherForm.name}
                  onChange={(e) => setTeacherForm({...teacherForm, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Department</label>
                <input
                  type="text"
                  value={teacherForm.department}
                  onChange={(e) => setTeacherForm({...teacherForm, department: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Designation</label>
                <input
                  type="text"
                  value={teacherForm.designation}
                  onChange={(e) => setTeacherForm({...teacherForm, designation: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={teacherForm.email}
                  onChange={(e) => setTeacherForm({...teacherForm, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setTeacherImage(e.target.files?.[0] || null)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <button
                onClick={handleTeacherSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {editingTeacher ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
