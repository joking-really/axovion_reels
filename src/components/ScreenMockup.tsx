import { useCurrentFrame, interpolate } from "remotion";

interface ScreenMockupProps {
  type: "callLog" | "crmPipeline" | "calculator" | "errorLog" | "codeEditor";
  startFrame: number;
  durationInFrames: number;
}

export const ScreenMockup: React.FC<ScreenMockupProps> = ({
  type,
  startFrame,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  if (relativeFrame < 0 || relativeFrame >= durationInFrames) return null;

  const opacity = interpolate(
    relativeFrame,
    [0, 8, durationInFrames - 8, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const renderContent = () => {
    switch (type) {
      case "callLog":
        return (
          <div style={screenStyle}>
            <div style={headerStyle}>Call Log - Today</div>
            <div style={rowStyle("#ff4444")}>❌ 1:15 PM - Missed - Dr. Smith</div>
            <div style={rowStyle("#ff4444")}>❌ 2:30 PM - Missed - New Patient</div>
            <div style={rowStyle("#ff4444")}>❌ 6:45 PM - Missed - Follow-up</div>
            <div style={rowStyle("#44ff44")}>✓ 10:00 AM - Answered</div>
            <div style={rowStyle("#44ff44")}>✓ 11:30 AM - Answered</div>
            <div style={statsStyle}>Missed: 3 | Answered: 2 | Loss: $1,200</div>
          </div>
        );
      case "crmPipeline":
        return (
          <div style={screenStyle}>
            <div style={headerStyle}>Pipeline - May 2026</div>
            <div style={pipelineRowStyle}>New Leads ▶ 45</div>
            <div style={pipelineRowStyle}>Contacted ▶ 32</div>
            <div style={pipelineRowStyle}>Qualified ▶ 18</div>
            <div style={pipelineRowStyle}>Proposal ▶ 8</div>
            <div style={pipelineRowStyleLost}>Lost - No Response ▶ 12</div>
            <div style={statsStyle}>Revenue at Risk: $24,000</div>
          </div>
        );
      case "calculator":
        return (
          <div style={screenStyle}>
            <div style={headerStyle}>Leak Calculator</div>
            <div style={calcRowStyle}>Missed calls/day: 4</div>
            <div style={calcRowStyle}>Avg deal value: $3,000</div>
            <div style={calcRowStyle}>Working days: 22</div>
            <div style={dividerStyle} />
            <div style={resultStyle}>Monthly Leak: $264,000</div>
            <div style={resultStyle2}>Annual Leak: $3,168,000</div>
          </div>
        );
      case "errorLog":
        return (
          <div style={screenStyle}>
            <div style={headerStyle}>Test Results - FAIL</div>
            <div style={errorRowStyle}>✗ Interrupt test: FAILED</div>
            <div style={errorRowStyle}>✗ Accent test: FAILED</div>
            <div style={errorRowStyle}>✗ Price objection: FAILED</div>
            <div style={successRowStyle}>✓ Basic greeting: PASSED</div>
            <div style={statsStyle}>Pass Rate: 25% (1/4)</div>
          </div>
        );
      case "codeEditor":
        return (
          <div style={{...screenStyle, fontFamily: "monospace", fontSize: "14px"}}>
            <div style={headerStyle}>voice-agent.ts</div>
            <div style={codeLineStyle(1)}>const config = {'{'}</div>
            <div style={codeLineStyle(2)}>  interruptThreshold: 0.3,</div>
            <div style={codeLineStyle(3, true)}>  // BUG: Too aggressive</div>
            <div style={codeLineStyle(4, true)}>  // Fixed: 0.3 → 0.7</div>
            <div style={codeLineStyle(5)}>  accentModel: "en-US",</div>
            <div style={codeLineStyle(6, true)}>  // BUG: Missing PK support</div>
            <div style={codeLineStyle(7)}>{'}'}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity,
        width: "80%",
        maxWidth: "600px",
      }}
    >
      {renderContent()}
    </div>
  );
};

const screenStyle: React.CSSProperties = {
  background: "#0a0a0a",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #333",
  boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
  fontFamily: "Inter, system-ui, sans-serif",
};

const headerStyle: React.CSSProperties = {
  color: "#888",
  fontSize: "14px",
  marginBottom: "16px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};

const rowStyle = (color: string): React.CSSProperties => ({
  color,
  fontSize: "18px",
  padding: "8px 0",
  borderBottom: "1px solid #222",
});

const pipelineRowStyle: React.CSSProperties = {
  color: "#4ade80",
  fontSize: "18px",
  padding: "8px 0",
  borderBottom: "1px solid #222",
};

const pipelineRowStyleLost: React.CSSProperties = {
  color: "#f87171",
  fontSize: "18px",
  padding: "8px 0",
  borderBottom: "1px solid #222",
  fontWeight: "bold",
};

const calcRowStyle: React.CSSProperties = {
  color: "#e5e5e5",
  fontSize: "20px",
  padding: "10px 0",
};

const dividerStyle: React.CSSProperties = {
  height: "2px",
  background: "#333",
  margin: "16px 0",
};

const resultStyle: React.CSSProperties = {
  color: "#f87171",
  fontSize: "28px",
  fontWeight: "bold",
  padding: "8px 0",
};

const resultStyle2: React.CSSProperties = {
  color: "#fb923c",
  fontSize: "22px",
  fontWeight: "bold",
  padding: "4px 0",
};

const statsStyle: React.CSSProperties = {
  color: "#888",
  fontSize: "14px",
  marginTop: "16px",
  paddingTop: "12px",
  borderTop: "1px solid #333",
};

const errorRowStyle: React.CSSProperties = {
  color: "#f87171",
  fontSize: "16px",
  padding: "6px 0",
};

const successRowStyle: React.CSSProperties = {
  color: "#4ade80",
  fontSize: "16px",
  padding: "6px 0",
};

const codeLineStyle = (indent: number, highlight?: boolean): React.CSSProperties => ({
  color: highlight ? "#fbbf24" : "#e5e5e5",
  fontSize: "14px",
  padding: "2px 0",
  paddingLeft: `${indent * 16}px`,
});
