---
title: Self-balancing robot in ROS 2 and Gazebo
one_liner: A two-wheeled robot that balances itself with an IMU and a PID controller. I built the simulation, and the team also built a hardware version.
status: complete
period: Spring 2026
areas: [control]
contexts: [coursework]
featured: false
order: 11
platform: Two-wheeled robot, simulated in Gazebo Classic
tools: [ROS 2 Humble, Gazebo Classic, rqt_reconfigure, SOLIDWORKS, URDF, Python]
role: Group course project. I built the simulation, from the robot model to the PID balance node. The hardware version was built by my teammates.
hero: self-balancing/self_balancing_robot.png
hero_alt: The PID tuning interface for the simulated self-balancing robot
hero_caption: Tuning the PID gains live in the simulation.
pipeline:
  - IMU measures the tilt angle
  - PID controller turns the tilt into a wheel velocity command
  - Wheels drive under the body to bring it upright
pipeline_note: The hardware version uses the same loop, with its own gains.
---

## What it does

A two-wheeled robot keeps itself upright. An IMU measures how far the body is tilted, a PID controller turns that tilt into a wheel velocity command, and the wheels drive under the body to correct it.

## What I built

- The robot design in SOLIDWORKS, exported to URDF for Gazebo.
- A ROS 2 workspace for the simulation, split into description, Gazebo, control and bringup packages.
- The PID balance node. Its gains can be changed while the robot runs, through rqt_reconfigure, so I could tune it live.

## Result

The controller keeps the simulated robot upright. The team's hardware version, built around an ESP32, also uses a PID controller, with different gains.

![The hardware version built by the team](media/self-balancing/self_balancing_robot_hardware.png)
