import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Settings, AlertCircle, CheckCircle } from 'lucide-react';

interface Message {
  type: 'success' | 'error';
  text: string;
}

export default function AdminLogin() {
  const API_BASE_URL = "http://localhost:3000/api/v1/admin/auth";
  const navigate = useNavigate();

  const [useRealApi, setUseRealApi] = useState(false);
  // const [apiEndpoint, setApiEndpoint] = useState(
  //   "https://api.example.com/auth/login",
  // );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState<Message>({
    type: "success",
    text: "",
  });

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage({ type: "error", text: "Please enter email and password" });
      return;
    }
    setLoading(true);
    setMessage({ type: "success", text: "" });

    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid credentials");

      //token jwt saved in local storage
      localStorage.setItem("authToken", data.token);
      setMessage({ type: "success", text: "Login successful" });
      navigate("/dashboard");

    } catch (error: any) {
      setMessage({ type: "error", text: error.message || "Login failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E293B] via-[#020617] to-[#020617] flex items-center justify-center p-4 min-h-[90svh] overflow-y-auto"> {/*min-h-screen flex items-center justify-center bg-brand-bg p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900*/}
      <div className="max-w-md max-h-50 w-full mx-auto px-4 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.45)] bg-white/5 py-4 rounded-xl">
        {/* API Config */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setUseRealApi(!useRealApi)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            <Settings className="w-4 h-4" />
            API Config
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9AE600] rounded-full mb-2">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <p className="text-white text-3xl">Admin Login</p>
          <p className="text-gray-400">Sign in to continue</p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20 shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="text-gray-200 text-sm">
                Email
              </label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9AE600] focus:border-transparent transition-all"
                  placeholder="admin@shaheen.edu"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-200 text-sm">
                Password
              </label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9AE600] focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {message.text && (
              <div
                className={`flex gap-2 p-2 rounded-lg ${message.type === "error"
                  ? "bg-red-500/20 text-red-300 border border-red-500/30"
                  : "bg-[#9AE600]/20 text-[#9AE600] border border-[#9AE600]/30"
                  }`}
              >
                {message.type === "error" ? (
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
              className="w-full bg-[#9AE600] hover:bg-[#8BD500] py-3 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </button>

            <div className="text-center">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-[#9AE600] transition-colors"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-3">
          Shaheen Education Foundation ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}