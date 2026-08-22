export interface TechGroup {
  id: string;
  label: string;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    id: "middleware",
    label: "Robotics middleware & planning",
    items: [
      "ROS 2 (Humble)",
      "MoveIt 2",
      "MoveIt Task Constructor",
      "Pilz Industrial Motion Planner",
      "ros2_control",
      "Nav2",
      "Navigation Behavior Trees",
      "SLAM Toolbox",
    ],
  },
  {
    id: "programming",
    label: "Programming",
    items: ["C/C++", "Python", "MATLAB", "Assembly"],
  },
  {
    id: "perception",
    label: "Perception",
    items: ["OpenCV", "YOLO", "MediaPipe", "OpenPose"],
  },
  {
    id: "simulation",
    label: "Simulation & CAD",
    items: ["Gazebo Classic", "MATLAB / Simulink", "Simscape Multibody", "SolidWorks", "Proteus"],
  },
  {
    id: "hardware",
    label: "Hardware & protocols",
    items: ["EtherCAT", "I2C", "UART", "Jetson Orin Nano", "ESP32", "Arduino Uno", "TM4C123GH6PM"],
  },
];

/**
 * Maps a tech label (as it appears above) to project ids where it was
 * actually used — drives the "highlight projects using this" interaction
 * in the TechnicalStack component. Only populated where traceable to the
 * source documents.
 */
export const techToProjects: Record<string, string[]> = {
  "ROS 2 (Humble)": ["dexterous-6-pro", "nova-robot", "ur5-cross-machine", "two-wheel-balancing"],
  "MoveIt 2": ["dexterous-6-pro"],
  "MoveIt Task Constructor": ["dexterous-6-pro"],
  "Pilz Industrial Motion Planner": ["dexterous-6-pro"],
  ros2_control: ["dexterous-6-pro", "nova-robot"],
  Nav2: ["nova-robot"],
  "Navigation Behavior Trees": ["nova-robot"],
  "SLAM Toolbox": ["nova-robot"],
  "C/C++": ["dexterous-6-pro", "self-balancing-beam"],
  Python: ["dexterous-6-pro", "projectz-internship"],
  MATLAB: ["computed-torque", "ur5-cross-machine", "planar-manipulator"],
  Assembly: ["self-balancing-beam"],
  OpenCV: ["dexterous-6-pro", "projectz-internship"],
  YOLO: ["dexterous-6-pro", "projectz-internship"],
  MediaPipe: ["projectz-internship"],
  OpenPose: ["projectz-internship"],
  "Gazebo Classic": ["nova-robot", "ur5-cross-machine", "two-wheel-balancing"],
  "MATLAB / Simulink": ["computed-torque"],
  "Simscape Multibody": ["computed-torque"],
  SolidWorks: [],
  Proteus: [],
  EtherCAT: ["dexterous-6-pro"],
  I2C: ["self-balancing-beam"],
  UART: ["self-balancing-beam"],
  "Jetson Orin Nano": ["dexterous-6-pro"],
  ESP32: ["esp32-diff-drive"],
  "Arduino Uno": [],
  TM4C123GH6PM: ["self-balancing-beam"],
};
