# Expo Image Component URI Encoding Bug

This repository demonstrates a bug in the Expo `Image` component where images with URIs containing special characters (spaces, accented characters, etc.) fail to load. The issue is particularly subtle because no error is thrown. 

## Bug Description
The `Image` component does not correctly handle URI encoding when special characters are present, leading to images not loading.  Standard `encodeURI` does not always resolve the problem.

## Reproduction
Clone the repository and run the `bug.js` example.  Observe that the image with spaces in the filename does not load.  The solution, `bugSolution.js` shows how to properly solve this.

## Solution
The `bugSolution.js` file provides a robust solution using a custom encoding function that handles more edge cases.  This involves using `encodeURIComponent` which is more thorough than `encodeURI` and addresses the limitations identified in the initial bug.

## Technologies Used
* Expo
* React Native
* JavaScript