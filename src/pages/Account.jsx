import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("tally-user"));

  if (!user) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-3">
        <div className="bg-surface w-full max-w-xs rounded-2xl border border-border shadow-sm p-6 text-center space-y-4">
          <p className="text-sm text-muted">
            No account found yet. Create one to see your ledger.
          </p>
          <button
            onClick={() => navigate("/create-account")}
            className="text-accent text-sm font-semibold"
          >
            Create an account →
          </button>
        </div>
      </div>
    );
  }

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3">
      <div className="bg-surface w-full max-w-xs rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
              Settings
            </span>
            <h1 className="font-display text-xl font-semibold text-ink -mt-0.5">
              Account
            </h1>
          </div>
          <button
            onClick={handleSignOut}
            className="text-xs font-semibold text-muted hover:text-ink"
          >
            Sign out
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="h-14 w-14 rounded-full bg-accent-soft flex items-center justify-center font-display text-lg font-semibold text-accent">
                {user.fullName?.[0]?.toUpperCase() || "T"}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-accent ring-2 ring-surface">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                  <path
                    d="M4 20l4.5-1 10-10a2.1 2.1 0 00-3-3l-10 10L4 20z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div>
              <p className="font-semibold text-ink text-sm">{user.fullName}</p>
              <p className="text-muted text-xs">{user.email}</p>
            </div>
          </div>

          <p className="text-sm text-ink/80 leading-6">
            {user.studioName
              ? `Running ${user.studioName}${
                  user.worksSolo === "yes" ? " solo" : " with a team"
                }.`
              : `Working ${
                  user.worksSolo === "yes" ? "solo" : "with a team"
                }.`}{" "}
            Your invoices and clients will show up here as you add them.
          </p>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {[
              { label: "Clients", value: "0" },
              { label: "Invoices", value: "0" },
              { label: "Paid", value: "$0" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border py-3 text-center"
              >
                <p className="font-display text-lg font-semibold text-ink">
                  {stat.value}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
