---
title: Autonomous navigation with 3D obstacle avoidance
one_liner: A differential-drive robot that maps its surroundings and navigates on its own in Gazebo, using Nav2 and a depth camera for 3D obstacle avoidance.
status: simulation
areas: [navigation, perception]
contexts: [personal]
featured: true
order: 4
platform: Custom differential-drive robot, simulated in Gazebo Classic
tools: [ROS 2 Humble, Nav2, SLAM Toolbox, AMCL, Spatio-Temporal Voxel Layer, behavior trees, URDF, Xacro]
role: Built the robot model and the navigation setup, from mapping to obstacle avoidance.
hero: nova/full_navigation_stack.png
hero_alt: The navigation stack running in Gazebo and RViz
hero_caption: The navigation stack running in Gazebo and RViz.
video: nova/3d_obstacle_avoidance_navigation.mp4
video_caption: The robot avoiding obstacles while navigating to a goal.
pipeline:
  - Gazebo world and robot model (URDF)
  - SLAM Toolbox builds the map
  - AMCL localizes the robot on the map
  - Nav2 plans and follows a path to the goal
  - Spatio-Temporal Voxel Layer adds 3D obstacles from the depth camera
  - A behavior tree handles what the robot does when its path is blocked
---

## What it does

The robot maps an environment with SLAM Toolbox, localizes on the map with AMCL, and drives to goals set in RViz using Nav2. A depth camera feeds a Spatio-Temporal Voxel Layer in the local costmap, so the robot also avoids obstacles at heights the 2D lidar does not scan.

## What I built

I wrote the URDF for the robot with its lidar and RGB-D camera, set up Gazebo worlds for mapping and navigation tests, and configured the full stack: SLAM Toolbox, AMCL, Nav2, the voxel layer and a behavior tree for the obstacle avoidance routine. The work is split into separate packages for the robot description, the Gazebo setup and the navigation.

![Map of a Gazebo world built with SLAM Toolbox](media/nova/slam_house_map.png)

![The voxel layer marking obstacles in the local costmap](media/nova/stvl_navigation.png)

## Result

In simulation, the robot builds a map, localizes itself, and navigates to goals while avoiding obstacles in 3D.

## Limits

The computational cost of Spatio Temporal Voxel Layer.
