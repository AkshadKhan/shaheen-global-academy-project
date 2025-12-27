import { useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  Users,
  Award,
  Menu,
  LogOut,
  Search,
  Settings,
  AlertCircle,
} from 'lucide-react';

/* ===================== TYPES ===================== */

type ActiveTab = 'toppers' | 'teachers';
type ModalMode = 'add' | 'edit';

interface Topper {
  id: number;
  name: string;
  rank: number;
  percentage: number;
  subject: string;
  year: number;
}

interface Teacher {
  id: number;
  name: string;
  subject: string;
  experience: number;
  email: string;
  phone: string;
}

interface ApiConfig {
  useRealApi: boolean;
  toppersEndpoint: string;
  teachersEndpoint: string;
}

interface FormData {
  name: string;
  rank: string;
  percentage: string;
  subject: string;
  year: string;
  experience: string;
  email: string;
  phone: string;
}

/* ===================== COMPONENT ===================== */

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('toppers');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<ModalMode>('add');
  const [editingItem, setEditingItem] = useState<Topper | Teacher | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showApiConfig, setShowApiConfig] = useState<boolean>(false);

  /* ===================== API CONFIG ===================== */

  const [apiConfig, setApiConfig] = useState<ApiConfig>({
    useRealApi: false,
    toppersEndpoint: 'https://api.example.com/toppers',
    teachersEndpoint: 'https://api.example.com/teachers',
  });

  /* ===================== DATA ===================== */

  const [toppers, setToppers] = useState<Topper[]>([
    { id: 1, name: 'Rahul Sharma', rank: 1, percentage: 98.5, subject: 'Computer Science', year: 2024 },
    { id: 2, name: 'Priya Gupta', rank: 2, percentage: 97.8, subject: 'Mathematics', year: 2024 },
    { id: 3, name: 'Amit Kumar', rank: 3, percentage: 96.9, subject: 'Physics', year: 2024 },
  ]);

  const [teachers, setTeachers] = useState<Teacher[]>([
    { id: 1, name: 'Dr. Rajesh Verma', subject: 'Mathematics', experience: 15, email: 'rajesh@school.com', phone: '+91-9876543210' },
    { id: 2, name: 'Mrs. Sneha Patel', subject: 'English', experience: 10, email: 'sneha@school.com', phone: '+91-9876543211' },
    { id: 3, name: 'Mr. Vikram Singh', subject: 'Science', experience: 12, email: 'vikram@school.com', phone: '+91-9876543212' },
  ]);

  /* ===================== FORM ===================== */

  const [formData, setFormData] = useState<FormData>({
    name: '',
    rank: '',
    percentage: '',
    subject: '',
    year: '',
    experience: '',
    email: '',
    phone: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      rank: '',
      percentage: '',
      subject: '',
      year: '',
      experience: '',
      email: '',
      phone: '',
    });
    setEditingItem(null);
  };

  /* ===================== AUTH ===================== */

  const getAuthToken = (): string => {
    if (typeof window === 'undefined') return '';
    return window.localStorage.getItem('authToken') || '';
  };

  const getHeaders = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAuthToken()}`,
  });

  const apiCall = async <T,>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: unknown
  ): Promise<T> => {
    const res = await fetch(url, {
      method,
      headers: getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    return (await res.json()) as T;
  };

  /* ===================== MODAL HANDLERS ===================== */

  const openAddModal = () => {
    resetForm();
    setModalMode('add');
    setShowModal(true);
  };

  const openEditModal = (item: Topper | Teacher) => {
    setEditingItem(item);

    if (activeTab === 'toppers') {
      const t = item as Topper;
      setFormData({
        name: t.name,
        rank: t.rank.toString(),
        percentage: t.percentage.toString(),
        subject: t.subject,
        year: t.year.toString(),
        experience: '',
        email: '',
        phone: '',
      });
    } else {
      const t = item as Teacher;
      setFormData({
        name: t.name,
        rank: '',
        percentage: '',
        subject: t.subject,
        year: '',
        experience: t.experience.toString(),
        email: t.email,
        phone: t.phone,
      });
    }

    setModalMode('edit');
    setShowModal(true);
  };

  /* ===================== DELETE ===================== */

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    setLoading(true);
    try {
      if (activeTab === 'toppers') {
        setToppers(prev => prev.filter(t => t.id !== id));
      } else {
        setTeachers(prev => prev.filter(t => t.id !== id));
      }
    } finally {
      setLoading(false);
    }
  };

  /* ===================== SUBMIT ===================== */

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (activeTab === 'toppers') {
        const newItem: Topper = {
          id:
            modalMode === 'edit' && editingItem
              ? editingItem.id
              : toppers.length
              ? Math.max(...toppers.map(t => t.id)) + 1
              : 1,
          name: formData.name,
          rank: Number(formData.rank),
          percentage: Number(formData.percentage),
          subject: formData.subject,
          year: Number(formData.year),
        };

        setToppers(prev =>
          modalMode === 'add'
            ? [...prev, newItem]
            : prev.map(t => (t.id === newItem.id ? newItem : t))
        );
      } else {
        const newItem: Teacher = {
          id:
            modalMode === 'edit' && editingItem
              ? editingItem.id
              : teachers.length
              ? Math.max(...teachers.map(t => t.id)) + 1
              : 1,
          name: formData.name,
          subject: formData.subject,
          experience: Number(formData.experience),
          email: formData.email,
          phone: formData.phone,
        };

        setTeachers(prev =>
          modalMode === 'add'
            ? [...prev, newItem]
            : prev.map(t => (t.id === newItem.id ? newItem : t))
        );
      }

      setShowModal(false);
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  /* ===================== FILTER ===================== */

  const filteredToppers = toppers.filter(
    t =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTeachers = teachers.filter(
    t =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* ===================== JSX ===================== */


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Menu className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowApiConfig(!showApiConfig)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">API Config</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* API Configuration Panel */}
        {showApiConfig && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">API Configuration</h3>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-200 mb-3">
                  <input
                    type="checkbox"
                    checked={apiConfig.useRealApi}
                    onChange={(e) => setApiConfig({ ...apiConfig, useRealApi: e.target.checked })}
                    className="w-4 h-4 rounded"
                  />
                  <span className="font-semibold">Use Real API Endpoints</span>
                </label>
              </div>

              {apiConfig.useRealApi && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Toppers API Endpoint
                    </label>
                    <input
                      type="text"
                      value={apiConfig.toppersEndpoint}
                      onChange={(e) => setApiConfig({ ...apiConfig, toppersEndpoint: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="https://api.example.com/toppers"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Teachers API Endpoint
                    </label>
                    <input
                      type="text"
                      value={apiConfig.teachersEndpoint}
                      onChange={(e) => setApiConfig({ ...apiConfig, teachersEndpoint: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="https://api.example.com/teachers"
                    />
                  </div>
                </div>
              )}

              <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-200 space-y-2">
                    <p className="font-semibold">
                      {apiConfig.useRealApi ? '✓ Using Real API' : '✓ Using Demo Mode'}
                    </p>
                    {apiConfig.useRealApi && (
                      <div className="text-xs space-y-1">
                        <p><strong>Authentication:</strong> Bearer token from localStorage ('authToken')</p>
                        <p><strong>GET:</strong> {'{endpoint}'} - Fetch all records</p>
                        <p><strong>POST:</strong> {'{endpoint}'} - Create new record</p>
                        <p><strong>PUT:</strong> {'{endpoint}/{id}'} - Update record</p>
                        <p><strong>DELETE:</strong> {'{endpoint}/{id}'} - Delete record</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 mb-6 flex gap-2">
          <button
            onClick={() => { setActiveTab('toppers'); setSearchTerm(''); }}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'toppers'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-5 h-5" />
            Toppers
          </button>
          <button
            onClick={() => { setActiveTab('teachers'); setSearchTerm(''); }}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'teachers'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-5 h-5" />
            Teachers
          </button>
        </div>

        {/* Actions Bar */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full pl-11 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            onClick={openAddModal}
            className="flex items-center justify-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition"
          >
            <Plus className="w-5 h-5" />
            Add {activeTab === 'toppers' ? 'Topper' : 'Teacher'}
          </button>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
          {activeTab === 'toppers' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Subject</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Percentage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Year</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredToppers.map((topper) => (
                    <tr key={topper.id} className="hover:bg-white/5 transition">
                      <td className="px-6 py-4 text-white font-bold">#{topper.rank}</td>
                      <td className="px-6 py-4 text-white">{topper.name}</td>
                      <td className="px-6 py-4 text-gray-300">{topper.subject}</td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{topper.percentage}%</td>
                      <td className="px-6 py-4 text-gray-300">{topper.year}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEditModal(topper)}
                            disabled={loading}
                            className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 rounded-lg text-white transition"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(topper.id)}
                            disabled={loading}
                            className="p-2 bg-red-600 hover:bg-red-700 disabled:bg-red-800 rounded-lg text-white transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredToppers.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  No toppers found
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Subject</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Experience</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Phone</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredTeachers.map((teacher) => (
                    <tr key={teacher.id} className="hover:bg-white/5 transition">
                      <td className="px-6 py-4 text-white font-semibold">{teacher.name}</td>
                      <td className="px-6 py-4 text-gray-300">{teacher.subject}</td>
                      <td className="px-6 py-4 text-purple-400">{teacher.experience} years</td>
                      <td className="px-6 py-4 text-gray-300">{teacher.email}</td>
                      <td className="px-6 py-4 text-gray-300">{teacher.phone}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEditModal(teacher)}
                            disabled={loading}
                            className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 rounded-lg text-white transition"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(teacher.id)}
                            disabled={loading}
                            className="p-2 bg-red-600 hover:bg-red-700 disabled:bg-red-800 rounded-lg text-white transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredTeachers.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  No teachers found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl border border-white/20 p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {modalMode === 'add' ? 'Add' : 'Edit'} {activeTab === 'toppers' ? 'Topper' : 'Teacher'}
              </h2>
              <button
                onClick={() => { setShowModal(false); resetForm(); }}
                disabled={loading}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="space-y-4">
              {activeTab === 'toppers' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Rank</label>
                    <input
                      type="number"
                      value={formData.rank}
                      onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter rank"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Percentage</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.percentage}
                      onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter percentage"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Year</label>
                    <input
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter year"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Experience (years)</label>
                    <input
                      type="number"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter experience"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter phone"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => { setShowModal(false); resetForm(); }}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-800 rounded-lg text-white font-semibold transition"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
