javascript mini project 2 --html,css.js,dom,gsap

Problem Statement:
This JavaScript code snippet demonstrates how to create a web application where the color of a rectangle dynamically changes based on mouse movement. When the mouse is over the left half of the rectangle, it transitions from dark red to transparent. Conversely, when over the right half, it transitions from dark blue to transparent. The GreenSock Animation Platform (GSAP) is used for smooth color transitions.

Explanation:
This code listens for mouse movement over the rectangle with the ID center.
It calculates the horizontal position of the mouse relative to the rectangle's left edge.
Based on the mouse position, it maps the color transitions from dark red to transparent (left half) or from dark blue to transparent (right half) using GSAP's mapRange function.
The rectangle returns to white when the mouse leaves its area.

what i learned
1.gsap-->maprange fun
2.event listner
3.getBoundingClientRect()-->to get the co-ordinates of the rectangle
