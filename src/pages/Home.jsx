import { useNavigate } from "react-router-dom";
import Button from "../ui/Button.jsx";
import Wordmark from "../ui/Wordmark.jsx";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3">
      <div className="bg-surface w-full max-w-xs rounded-2xl border border-border shadow-sm flex flex-col h-[640px] p-6">
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div className="h-16 w-16 rounded-2xl bg-accent-soft flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
              <path
                d="M6 7h12M6 12h12M6 17h7"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <Wordmark size="lg" />
        </div>

        <div className="space-y-4">
          <p className="text-muted text-sm leading-6 text-center">
            Track clients, send invoices, and keep your books straight —
            without the spreadsheet.
          </p>
          <div className="space-y-2.5">
            <Button variant="primary" onClick={() => navigate("/create-account")}>
              Create an account
            </Button>
            <Button variant="secondary" onClick={() => navigate("/login")}>
              I already have an account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
