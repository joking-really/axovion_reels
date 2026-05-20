import { AbsoluteFill, Audio, staticFile } from "remotion";
import { VideoBackground } from "../components/VideoBackground";
import { TextOverlay } from "../components/TextOverlay";
import { ScreenMockup } from "../components/ScreenMockup";
import { ProgressBar } from "../components/ProgressBar";

// Duration: 50s = 1511 frames at 30fps
export const TOFReel = () => {

  // Segment timings (in frames)
  const segments = {
    hook: { start: 0, duration: 127 },
    problem: { start: 127, duration: 619 },
    observation: { start: 746, duration: 280 },
    tension: { start: 1026, duration: 419 },
    close: { start: 1445, duration: 66 },
  };

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* Background Videos */}
      <VideoBackground
        src="tof_hook_bg.mp4"
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="tof_problem_bg1.mp4"
        startFrame={segments.problem.start}
        durationInFrames={300}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="tof_problem_bg2.mp4"
        startFrame={segments.problem.start + 300}
        durationInFrames={319}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="tof_observation_bg.mp4"
        startFrame={segments.observation.start}
        durationInFrames={segments.observation.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="tof_tension_bg.mp4"
        startFrame={segments.tension.start}
        durationInFrames={segments.tension.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="tof_close_bg.mp4"
        startFrame={segments.close.start}
        durationInFrames={segments.close.duration}
        blur={2}
        darken={0.6}
      />

      {/* Audio */}
      <Audio src={staticFile("tof_hook.mp3")} startFrom={0} endAt={segments.hook.duration} />
      <Audio src={staticFile("tof_problem.mp3")} startFrom={0} endAt={segments.problem.duration} />
      <Audio src={staticFile("tof_observation.mp3")} startFrom={0} endAt={segments.observation.duration} />
      <Audio src={staticFile("tof_tension.mp3")} startFrom={0} endAt={segments.tension.duration} />
      <Audio src={staticFile("tof_close.mp3")} startFrom={0} endAt={segments.close.duration} />

      {/* Text Overlays */}
      <TextOverlay
        text="Most clinics lose leads while the receptionist is eating lunch."
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        style={{ top: "35%" }}
        animation="slideUp"
      />

      <TextOverlay
        text="Think about it. Your highest-intent leads? They don't call at 10 AM on a Tuesday."
        startFrame={segments.problem.start}
        durationInFrames={150}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="They call at 1:15 PM. During lunch. After hours. On Sunday."
        startFrame={segments.problem.start + 150}
        durationInFrames={150}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="And they don't leave voicemails. They call the next clinic on the list."
        startFrame={segments.problem.start + 300}
        durationInFrames={160}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* Call Log Mockup during problem section */}
      <ScreenMockup
        type="callLog"
        startFrame={segments.problem.start + 100}
        durationInFrames={400}
      />

      <TextOverlay
        text="The first business to respond usually gets paid."
        startFrame={segments.observation.start}
        durationInFrames={140}
        style={{ top: "25%" }}
        animation="slideUp"
      />
      <TextOverlay
        text="Not the best. Not the cheapest. The fastest."
        startFrame={segments.observation.start + 140}
        durationInFrames={140}
        style={{ top: "25%" }}
        animation="slideUp"
      />

      <TextOverlay
        text="They already decided to call you."
        startFrame={segments.tension.start}
        durationInFrames={140}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="That's the hard part. And most businesses still lose them."
        startFrame={segments.tension.start + 140}
        durationInFrames={140}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Response time is a revenue system."
        startFrame={segments.tension.start + 280}
        durationInFrames={139}
        style={{ top: "20%" }}
        animation="fade"
      />

      <TextOverlay
        text="Speed compounds."
        startFrame={segments.close.start}
        durationInFrames={segments.close.duration}
        style={{ top: "40%", fontSize: "64px" }}
        animation="slideUp"
      />

      {/* Progress Bar */}
      <ProgressBar totalFrames={1511} color="#3b82f6" />

      {/* Brand Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
          color: "rgba(255,255,255,0.4)",
          fontSize: "14px",
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.1em",
          zIndex: 100,
        }}
      >
        AXOVION
      </div>
    </AbsoluteFill>
  );
};
