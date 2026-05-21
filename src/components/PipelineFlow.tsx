import { useCurrentFrame, interpolate, Easing } from "remotion";

interface PipelineFlowProps {
  startFrame: number;
  durationInFrames: number;
  showCompetitor?: boolean;
}

export const PipelineFlow: React.FC<PipelineFlowProps> = ({
  startFrame,
  durationInFrames,
  showCompetitor = false,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  if (relativeFrame < -10 || relativeFrame >= durationInFrames + 10) return null;

  const opacity = interpolate(
    relativeFrame,
    [0, 10, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const flowProgress = interpolate(
    relativeFrame,
    [15, durationInFrames - 20],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const stages = [
    { name: "INBOUND CALL", status: "completed", color: "#22c55e" },
    { name: "RINGING...", status: "active", color: "#f59e0b" },
    { name: showCompetitor ? "MISSED" : "ANSWERED", status: showCompetitor ? "error" : "success", color: showCompetitor ? "#ef4444" : "#22c55e" },
    { name: showCompetitor ? "COMPETITOR WINS" : "QUALIFIED", status: showCompetitor ? "error" : "success", color: showCompetitor ? "#ef4444" : "#22c55e" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity,
        width: "90%",
        maxWidth: "800px",
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: "#0c0c0c",
          borderRadius: "12px",
          border: "1px solid #222",
          padding: "24px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "12px",
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "20px",
          }}
        >
          Lead Pipeline — Live
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
          {stages.map((stage, i) => {
            const stageThreshold = i / stages.length;
            const nextThreshold = (i + 1) / stages.length;
            const isActive = flowProgress > stageThreshold;
            const isCurrent = flowProgress >= stageThreshold && flowProgress < nextThreshold;
            
            // Staggered entrance for each stage
            const stageEntrance = interpolate(
              flowProgress,
              [stageThreshold - 0.05, stageThreshold + 0.05],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.2)) }
            );

            return (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: isActive ? `${stage.color}15` : "#111",
                    border: `1px solid ${isActive ? stage.color : "#222"}`,
                    borderRadius: i === 0 ? "8px 0 0 8px" : i === stages.length - 1 ? "0 8px 8px 0" : "0",
                    textAlign: "center",
                    position: "relative",
                    opacity: Math.max(stageEntrance, isActive ? 1 : 0.3),
                    transform: `scale(${isActive ? 1 : 0.95})`,
                    transition: "none",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: isActive ? stage.color : "#333",
                      margin: "0 auto 8px",
                      boxShadow: isActive ? `0 0 12px ${stage.color}60` : "none",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: isActive ? stage.color : "#555",
                      fontWeight: 600,
                    }}
                  >
                    {stage.name}
                  </div>
                  {isCurrent && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "10%",
                        right: "10%",
                        height: "2px",
                        background: stage.color,
                        boxShadow: `0 0 8px ${stage.color}`,
                        animation: "pulse 1s infinite",
                      }}
                    />
                  )}
                </div>
                {i < stages.length - 1 && (
                  <div
                    style={{
                      width: "20px",
                      height: "2px",
                      background: isActive ? stage.color : "#222",
                      opacity: isActive ? 1 : 0.3,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#555",
          }}
        >
          <span>Lead ID: #8X-2914</span>
          <span>Source: Direct Call</span>
          <span>Intent: High</span>
          <span>Value: $3,200</span>
        </div>
      </div>
    </div>
  );
};
