
# CloudDrawingSVG

## Overview

The **CloudDrawingSVG** project features an SVG graphic of a cloud-like shape with an animation that simulates the process of drawing the cloud. The animation transitions the stroke color from black to red, creating the effect of the cloud being drawn in real-time.

## Live demo

https://github.com/user-attachments/assets/f1fb7075-08e2-42d2-83e5-78651af54969


## How to View

To view the CloudDrawingSVG graphic:

1. Open the `index.html` file in your web browser to see the SVG graphic.
2. The animation is controlled by the `style.css` file, which defines the drawing effect.

## Project Structure

The project is organized as follows:

    |-- cloud-drawing-svg/
        |-- index.html
        |-- style.css
        |-- README.md

## Description

- **SVG Graphic**: The SVG graphic includes:
  - **Path**: Represents a cloud-like shape created with the `path` element, using cubic Bezier curves to form a smooth, rounded structure.
  - **Polyline**: Additional lines that complement the cloud shape.

- **Animation**:
  - **Purpose**: Simulates the drawing of the cloud by animating the stroke from black to red.
  - **Effect**: The stroke transitions with a dashed effect to mimic the appearance of being drawn.
  - **Duration**: The animation lasts 10 seconds and loops infinitely, creating a continuous drawing effect.

- **CSS Styling**:
  - **Border**: The SVG container is styled with a 1px solid blue border.
  - **Animation**: The `animate` keyframes control the stroke color transition and dashed effect.

## Contact

For questions or feedback regarding the CloudDrawingSVG project, please reach out via GitHub Issues 
