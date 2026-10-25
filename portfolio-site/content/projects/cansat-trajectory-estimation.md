---
title: CanSat 2D trajectory estimation
one_liner: Ground-station software that estimates a CanSat's 2D path from noisy IMU data using a Kalman filter and double integration.
status: complete
areas: [estimation]
contexts: [competition]
featured: true
order: 4
period: 2025
platform: CanSat with an MPU6050 IMU
tools: [Python, Kalman filter, matplotlib, Tkinter, serial communication]
role: Team lead. Implemented the trajectory estimation.
hero: cansat/CANSAT.jpeg
hero_alt: The CanSat kit next to the ground-station interface on a laptop
hero_caption: The CanSat kit and the ground-station interface.
video: cansat/2d_trajectory.mp4
video_caption: Live 2D trajectory from the ground station.
pipeline:
  - MPU6050 packets, 100 Hz over serial
  - Bias correction from a short stationary calibration
  - Kalman filter for roll and pitch
  - Gravity removal
  - High-pass filter and 5-sample moving average
  - Rotation into the world frame
  - Double integration to 2D position
pipeline_note: Gyro bias is also updated during stationary periods to limit drift.
---

## What it does

The CanSat streams accelerometer and gyroscope readings over serial at 100 Hz. A Python ground station turns them into a 2D trajectory and plots it live while the CanSat moves.

A Kalman filter estimates roll and pitch from the accelerometer and gyroscope. The roll and pitch are used to subtract gravity from the acceleration, and the remaining acceleration is filtered, rotated into the world frame and integrated twice to get position.

## Result

The team won the Hidden Gem Award at the National CANSAT Competition, held under World Space Week 2025 by SUPARCO. 25 teams competed.

## Limits

Position from double integration of acceleration drifts over time. The high-pass filter and the gyro recalibration reduce the drift but do not remove it. I did not measure position accuracy against a reference.
