---
title: UR5 control from MATLAB over ROS 2
one_liner: A two-way link between MATLAB and Simulink and a simulated UR5 in Gazebo, with analytical inverse kinematics and joint-space trajectories.
status: complete
areas: [control, manipulation]
contexts: [coursework]
featured: true
order: 3
platform: UR5, simulated in Gazebo
tools: [MATLAB, Simulink, Robotics System Toolbox, ROS 2 Humble, Gazebo]
role: "Group project for the Robotics course (MCT352L). I built the MATLAB side and the MATLAB to ROS 2 communication pipeline. Teammates did the error analysis and wrote the report."
hero: ur5/ur5_robot.png 
hero_caption: The UR5 in Gazebo, with its state shown in RViz.
pipeline:
  - MATLAB and Simulink motion planner
  - Analytical IK, up to 8 solutions with one selected
  - Cubic joint-space trajectory within velocity and acceleration limits
  - ROS 2 JointTrajectory message
  - UR5 in Gazebo
pipeline_note: Joint states return to MATLAB on the /joint_states topic and pass through a low-pass filter first.
---

## What it does

MATLAB plans the motion and Gazebo executes it. For each target pose, a closed-form IK solution gives up to 8 joint configurations, and a selection function picks one based on how close it is to the joint limits and how well it continues from the previous state. A cubic polynomial then interpolates in joint space, within the UR5 velocity limit of 3.14 rad/s and acceleration limit of 40 rad/s².

The IK equations (Andersen's method) come from a reference document. I implemented them and did not derive them.

## The hard part

Getting MATLAB and ROS 2 to exchange messages reliably in both directions was the hardest part of the project. MATLAB publishes JointTrajectory messages and subscribes to /joint_states. The joint state feedback arrives at a 0.04 s interval with jitter, so a low-pass filter in Simulink cleans it before use. ROS 2 and Gazebo run on a separate machine from MATLAB.

![Simulink model for the MATLAB to ROS 2 communication](media/ur5/matlab_gazebo_simulink_diagram.jpeg)

## Result

Two motions were tested: home to pick, and pick to place. End-effector position RMSE was 3.2%.
