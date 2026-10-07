import type { MockupType } from "@/lib/content/projects";

export function ProjectMockup({ type }: { type: MockupType }) {
  if (type === "pipeline") return <Pipeline />;
  if (type === "chat") return <Chat />;
  return <Dashboard />;
}

function Pipeline() {
  return (
    <div className="pipe">
      <div>
        New enquiry received<span>form</span>
      </div>
      <div>
        Classified as buyer<span>auto</span>
      </div>
      <div className="h">
        Follow-up message queued<span>auto</span>
      </div>
      <div>
        Assigned to an agent<span>crm</span>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="chat">
      <div className="q">What is our refund policy for annual plans?</div>
      <div className="r">
        Annual plans can be refunded within the window stated in the policy
        document.
      </div>
      <div className="src">Source: Policies.pdf, page 4</div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dash">
      <div>
        <span className="m">Metric A</span>
        <b>—</b>
      </div>
      <div>
        <span className="m">Metric B</span>
        <b>—</b>
      </div>
      <div>
        <span className="m">Metric C</span>
        <b>—</b>
      </div>
      <div className="w">
        <span className="m">Sample data</span>
        <svg
          viewBox="0 0 300 90"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 70L40 60 80 66 120 40 160 48 200 24 240 30 300 8"
            stroke="#e9a53b"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}