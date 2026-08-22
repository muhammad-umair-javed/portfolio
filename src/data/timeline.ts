export interface TimelineEntry {
  id: string;
  period: string;
  phase: string;
  title: string;
  description: string;
  projectId?: string;
  branch?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    id: "sem5-beam",
    period: "Semester 5",
    phase: "Foundations",
    title: "Self-balancing beam — bare-metal control",
    description:
      "Starting at the hardware layer: sensor fusion and PID control implemented directly in bare-metal C++ on a TM4C123GH6PM.",
    projectId: "self-balancing-beam",
  },
  {
    id: "sem6-integration",
    period: "Semester 6",
    phase: "Systems integration",
    title: "Self-balancing robot & MATLAB–ROS 2 bridge",
    description:
      "Connecting planning tools to real execution: a ROS 2/Gazebo self-balancing robot deployed to hardware, and a MATLAB-to-ROS 2 cross-machine kinematics pipeline.",
    projectId: "ur5-cross-machine",
  },
  {
    id: "mid-degree-autonomy",
    period: "Mid-degree",
    phase: "Autonomy",
    title: "Nova Robot — full navigation stack",
    description:
      "Scaling to full-robot autonomy: SLAM, Nav2, sensor fusion, and a custom hardware interface for a hoverboard-based AGV.",
    projectId: "nova-robot",
  },
  {
    id: "2025-manipulation",
    period: "2025 — present",
    phase: "Manipulation research",
    title: "Dexterous 6 Pro — collaborative manipulation",
    description:
      "Collaborative manipulation from drive to grasp: EtherCAT hardware interfacing, IK solver investigation, trajectory execution debugging, and a vision-guided pick-and-place pipeline.",
    projectId: "dexterous-6-pro",
  },
];

export const timelineBranches: TimelineEntry[] = [
  {
    id: "cansat",
    period: "2025",
    phase: "Parallel — competition",
    title: "CANSAT — National Competition, World Space Week 2025",
    description:
      "Team lead; 2D flight-trajectory reconstruction from telemetry. Received the \"Hidden Gem\" award among 25 competing national teams.",
    branch: true,
  },
  {
    id: "projectz",
    period: "Jul – Aug 2025",
    phase: "Parallel — applied AI",
    title: "AI internship, ProjectZ Incorporated",
    description: "RAG pipelines and computer-vision workflows, feeding applied perception skills back into the manipulation work.",
    projectId: "projectz-internship",
    branch: true,
  },
];
