export type ProjectCategory =
  | "Robotics & manipulation"
  | "Autonomous robotics"
  | "Control & embedded systems"
  | "Perception & AI";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  detail: string[];
  tech: string[];
  metric?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "nova-robot",
    title: "Nova Robot — autonomous mobile navigation stack",
    category: "Autonomous robotics",
    summary:
      "Full navigation stack for a differential-drive mobile robot: SLAM mapping, AMCL localization, and Nav2 with 3D obstacle avoidance.",
    detail: [
      "Built the full stack: URDF modeling, Gazebo Classic simulation, SLAM Toolbox mapping, and AMCL-based localization.",
      "Configured and tuned Nav2 with a DWB local controller and a Spatio-Temporal Voxel Layer (STVL) for 3D obstacle avoidance using an Intel RealSense D435, debugging costmap-layer interactions, behavior-tree configuration, TF-tree consistency, and QoS mismatches.",
      "Implemented a ros2_control hardware interface for a hoverboard-based AGV platform and explored social/human-aware costmap layers for navigation around people.",
    ],
    tech: ["ROS 2", "Nav2", "SLAM Toolbox", "Gazebo", "ros2_control"],
  },
  {
    id: "computed-torque",
    title: "Computed-torque control of the Dexterous 6 Pro",
    category: "Control & embedded systems",
    summary:
      "Simscape Multibody model of the 6-DOF arm with a computed-torque controller, studying model-based control ahead of the ROS 2 implementation.",
    detail: [
      "Modeled the 6-DOF manipulator as a Simscape Multibody system.",
      "Implemented a computed-torque controller, including joint zero-position offset correction via rigid-transform blocks.",
    ],
    tech: ["MATLAB", "Simulink", "Simscape Multibody"],
  },
  {
    id: "ur5-cross-machine",
    title: "Cross-machine MATLAB–ROS 2 kinematics and path planning (UR5)",
    category: "Robotics & manipulation",
    summary:
      "Kinematics and path-planning routines in MATLAB, executed on a UR5 in ROS 2/Gazebo/MoveIt on a separate machine.",
    detail: [
      "Developed kinematics and path-planning routines in MATLAB.",
      "Built a cross-machine communication interface linking a MATLAB-based planner to ROS 2/Gazebo/MoveIt on a separate machine.",
      "Combined MATLAB's rapid-prototyping workflow with ROS 2/Gazebo's modular architecture and physics simulation.",
    ],
    tech: ["MATLAB", "ROS 2", "Gazebo", "MoveIt"],
    metric: "< 2% net tracking error",
  },
  {
    id: "self-balancing-beam",
    title: "Self-balancing beam — bare-metal sensor fusion and control",
    category: "Control & embedded systems",
    summary:
      "Bare-metal C++ sensor fusion and PID control balancing a beam on a vibration-heavy platform, with a live monitoring dashboard.",
    detail: [
      "Integrated a TM4C123GH6PM microcontroller with two BLDC motors, current sensors, optocouplers, and an IMU using bare-metal C++.",
      "Fused optocoupler RPM feedback with IMU readings through filtering to extract beam-bend angle on a vibration-heavy platform.",
      "Designed and tuned a PID controller with a live dashboard for angle, RPM, and current monitoring.",
    ],
    tech: ["C++", "TM4C123GH6PM", "PID control", "Sensor fusion"],
    metric: "< 2° steady-state error · disturbance rejection within 10s",
  },
  {
    id: "two-wheel-balancing",
    title: "ROS 2 self-balancing two-wheel robot",
    category: "Autonomous robotics",
    summary: "IMU-based PID balancing, simulated in ROS 2/Gazebo and deployed to hardware.",
    detail: ["IMU-based PID balancing controller, first simulated then deployed to physical hardware."],
    tech: ["ROS 2", "Gazebo", "PID control", "IMU"],
  },
  {
    id: "esp32-diff-drive",
    title: "ESP32 differential-drive robot",
    category: "Autonomous robotics",
    summary: "UDP teleoperation and wheel odometry on an ESP32-based differential-drive platform.",
    detail: ["ESP32-based differential-drive robot with UDP teleoperation and wheel odometry."],
    tech: ["ESP32", "UDP", "Odometry"],
  },
  {
    id: "planar-manipulator",
    title: "2-DOF planar manipulator (MATLAB)",
    category: "Robotics & manipulation",
    summary: "PID-controlled 2-DOF arm tracking a square trajectory, with motor thermal modeling.",
    detail: [
      "Developed a 2-DOF robotic manipulator arm and ran it on a square trajectory with a PID controller.",
      "Performed high-fidelity motor modeling, monitoring heat emissions, copper losses, and power consumption.",
    ],
    tech: ["MATLAB", "PID control", "Motor modeling"],
  },
  {
    id: "projectz-internship",
    title: "AI internship — ProjectZ Incorporated",
    category: "Perception & AI",
    summary:
      "Applied perception and RAG work feeding into the vision-guided manipulation pipeline above — Jul – Aug 2025.",
    detail: [
      "Developed Retrieval-Augmented Generation (RAG) pipelines and chatbot features using LangChain and the Gemini API.",
      "Built computer-vision pipelines for OCR, object detection, and pose estimation using OpenCV, YOLOv11, MediaPipe, and OpenPose, and applied classical CV techniques to optimize recurring internal workflows.",
      "Prototyped and demonstrated models through Python scripts and Tkinter GUI applications.",
    ],
    tech: ["LangChain", "Gemini API", "OpenCV", "YOLOv11", "MediaPipe", "OpenPose"],
  },
];

/**
 * Ordered to tell the actual progression — embedded control fundamentals,
 * then autonomous mobile systems, then manipulation research — with the
 * applied-AI internship last, as a supporting track rather than a peer
 * category to the robotics work.
 */
export const categoryOrder: ProjectCategory[] = [
  "Control & embedded systems",
  "Autonomous robotics",
  "Robotics & manipulation",
  "Perception & AI",
];

export const categoryIntros: Partial<Record<ProjectCategory, string>> = {
  "Control & embedded systems": "Where it started — first-principles control on real hardware, no framework underneath it.",
  "Autonomous robotics": "Scaling from a single control loop to a full autonomous system.",
  "Robotics & manipulation": "Manipulation and planning work alongside the Dexterous 6 Pro flagship research above.",
  "Perception & AI": "A supporting track, not a separate specialization — applied perception work that feeds the vision-guided manipulation above.",
};
