import Input from "../ui/Input.jsx";

const RegisterFields = ({ form, errors, onChange }) => {
  return (
    <div className="space-y-5">
      <Input
        name="fullName"
        label="Full name"
        placeholder="Jordan Blake"
        value={form.fullName}
        onChange={onChange}
        error={errors.fullName}
        required
      />
      <Input
        name="phone"
        label="Phone number"
        placeholder="10-digit number"
        value={form.phone}
        onChange={onChange}
        error={errors.phone}
        required
      />
      <Input
        name="email"
        label="Email address"
        type="email"
        placeholder="you@studio.com"
        value={form.email}
        onChange={onChange}
        error={errors.email}
        required
      />
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="At least 6 characters"
        value={form.password}
        onChange={onChange}
        error={errors.password}
        required
      />
      <Input
        name="studioName"
        label="Studio / company name"
        placeholder="Optional"
        value={form.studioName}
        onChange={onChange}
      />

      <div className="space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
          Working solo? <span className="text-danger">*</span>
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Input
              type="radio"
              id="solo-yes"
              name="worksSolo"
              value="yes"
              checked={form.worksSolo === "yes"}
              onChange={onChange}
            />
            <label htmlFor="solo-yes" className="text-sm text-ink">
              Yes
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="radio"
              id="solo-no"
              name="worksSolo"
              value="no"
              checked={form.worksSolo === "no"}
              onChange={onChange}
            />
            <label htmlFor="solo-no" className="text-sm text-ink">
              No, I have a team
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFields;
