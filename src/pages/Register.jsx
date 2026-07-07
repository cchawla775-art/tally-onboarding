import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import Wordmark from "../ui/Wordmark.jsx";
import RegisterFields from "../components/RegisterFields.jsx";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  studioName: "",
  worksSolo: "yes",
};

const Register = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!/^\d{10}$/.test(form.phone.trim()))
      next.phone = "Enter a 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (form.password.trim().length < 6)
      next.password = "Password must be at least 6 characters.";
    return next;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    localStorage.setItem("tally-user", JSON.stringify(form));
    navigate("/account");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3">
      <div className="bg-surface w-full max-w-xs rounded-2xl border border-border shadow-sm p-6 space-y-6">
        <Wordmark />
        <div className="space-y-1">
          <h1 className="font-display text-2xl font-semibold text-ink">
            Set up your ledger
          </h1>
          <p className="text-muted text-sm">Takes less than a minute.</p>
        </div>

        <RegisterFields form={form} errors={errors} onChange={handleChange} />

        <Button onClick={handleSubmit}>Create account</Button>

        <p className="text-center text-xs text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
