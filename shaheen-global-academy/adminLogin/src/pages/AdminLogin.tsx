import { useState } from 'react';
import { Lock, Mail, Settings, AlertCircle, CheckCircle } from 'lucide-react';

interface Message {
  type: 'success' | 'error';
  text: string;
}

export default function AdminLogin() {
  const [useRealApi, setUseRealApi] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState(
    'https://api.example.com/auth/login'
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState<Message>({
    type: 'success',
    text: '',
  });

  const handleLogin = async () => {
    setLoading(true);
    setMessage({ type: 'success', text: '' });

    try {
      if (useRealApi) {
        const res = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        if (!res.ok) throw new Error('Invalid credentials');

        const data = await res.json();
        localStorage.setItem('authToken', data.token);
      }

      setMessage({ type: 'success', text: 'Login successful' });
    } catch {
      setMessage({ type: 'error', text: 'Login failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full px-4">
        {/* API Config */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setUseRealApi(!useRealApi)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          >
            <Settings className="w-4 h-4" />
            API Config
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-400">Sign in to continue</p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <div>
              <label className="text-gray-200 text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 rounded-lg text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-200 text-sm">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 rounded-lg text-white"
                />
              </div>
            </div>

            {message.text && (
              <div
                className={`flex gap-2 p-3 rounded-lg ${
                  message.type === 'error'
                    ? 'bg-red-500/20 text-red-300'
                    : 'bg-green-500/20 text-green-300'
                }`}
              >
                {message.type === 'error' ? (
                  <AlertCircle className="w-5 h-5" />
                ) : (
                  <CheckCircle className="w-5 h-5" />
                )}
                {message.text}
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white font-semibold"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
