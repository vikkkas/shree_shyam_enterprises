"use client";

import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { toast } from "sonner";

export default function RequestCallbackBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: "callback@request.com",
          message: "Callback request from mobile sticky bar.",
        }),
      });
      if (res.ok) {
        toast.success("We'll call you back shortly!");
        setDismissed(true);
        setVisible(false);
      } else {
        toast.error("Failed. Please call us directly: +91 8866009082");
      }
    } catch {
      toast.error("Network error. Please call us: +91 8866009082");
    } finally {
      setLoading(false);
    }
  };

  if (!visible || dismissed) return null;

  return (
    /* Mobile only — hidden on md+ */
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9980] bg-[#0E1B2E] border-t-2 border-[#E05A1E] shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#E05A1E]" />
            <span className="text-white font-heading font-bold text-sm uppercase tracking-wide">
              Request a Callback
            </span>
          </div>
          <button
            onClick={() => { setDismissed(true); setVisible(false); }}
            className="text-[#8BA3BF] hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="flex-1 bg-[#1A2D48] border border-white/10 text-white text-sm px-3 py-2 placeholder:text-white/30 focus:outline-none focus:border-[#E05A1E] transition-colors rounded-sm"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
              className="flex-1 bg-[#1A2D48] border border-white/10 text-white text-sm px-3 py-2 placeholder:text-white/30 focus:outline-none focus:border-[#E05A1E] transition-colors rounded-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-clip w-full bg-[#E05A1E] text-white py-2.5 text-sm font-semibold tracking-wide hover:bg-[#c94d17] transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Call Me Back →"}
          </button>
        </form>
      </div>
    </div>
  );
}
