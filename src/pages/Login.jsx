import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import Wordmark from "../ui/Wordmark.jsx";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogin = () => {
    const nextErrors = {};
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Enter a valid email address.";
    if (!form.password.trim()) nextErrors.password = "Password is required.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const user = JSON.parse(localStorage.getItem("tally-user"));
    if (!user) {
      setErrors({ email: "No account found. Create one first." });
      return;
    }
    if (user.email !== form.email.trim() || user.password !== form.password) {
      setErrors({ password: "Email or password is incorrect." });
      return;
    }
    navigate("/account");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3">
      <div className="bg-surface w-full max-w-xs rounded-2xl border border-border shadow-sm p-6 space-y-6">
        <Wordmark />
        <div className="space-y-1">
          <h1 className="font-display text-2xl font-semibold text-ink">
            Welcome back
          </h1>
          <p className="text-muted text-sm">Log in to your Tally ledger.</p>
        </div>

        <div className="space-y-5">
          <Input
            name="email"
            label="Email address"
            type="email"
            placeholder="you@studio.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          <Button onClick={handleLogin}>Log in</Button>
        </div>

        <p className="text-center text-xs text-muted">
          New to Tally?{" "}
          <Link to="/create-account" className="text-accent font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
