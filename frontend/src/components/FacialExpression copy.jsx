// import React, { useEffect, useRef } from "react";
// import * as faceapi from "face-api.js";

// const FacialExpression = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const loadModels = async () => {
//       const MODEL_URL = "/models";
//       await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
//       await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
//     };

//     const startVideo = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
//         videoRef.current.srcObject = stream;
//       } catch (err) {
//         console.error("Error accessing webcam:", err);
//       }
//     };

//     const handleVideoPlay = () => {
//       setInterval(async () => {
//         const detections = await faceapi
//           .detectAllFaces(
//             videoRef.current,
//             new faceapi.TinyFaceDetectorOptions()
//           )
//           .withFaceExpressions();

//         console.log(detections);
//       },2000);
//     };

//     loadModels().then(startVideo);

//     videoRef.current && videoRef.current.addEventListener("play", handleVideoPlay);
//   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(async () => {
// //       if (!videoRef.current || videoRef.current.readyState !== 4) return;

// //       const detections = await faceapi
// //         .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
// //         .withFaceExpressions();

// //       console.log(detections[0]);

// //         if (detections[0]?.expressions) {
// //           const expressions = detections[0].expressions;
// //           const maxValue = Math.max(...Object.values(expressions));
// //           const dominantExpression = Object.keys(expressions).find(
// //             (key) => expressions[key] === maxValue
// //           );
// //           console.log('Detected expression:', dominantExpression);
// //         }
// //     }, 2000);

// //     return () => clearInterval(interval);
// //   }, []);

//   return (
//     <div style={{ position: "relative" }}>
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         width="720"
//         height="560"
//         style={{ position: "absolute", top: 0, left: 0 }}
//       />
//     </div>
//   );
// };

// export default FacialExpression;
