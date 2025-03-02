// "use client";
// import { motion } from "framer-motion";
// import React, { lazy, Suspense } from "react"; // Import lazy and Suspense

// // Use React's lazy to dynamically import the World component
// const World = lazy(() =>
//   import("./ui/globe").then((module) => ({ default: module.World }))
// );

// export function GlobeDemo() {
//   const globeConfig = {
//     pointSize: 4,
//     globeColor: "#062056",
//     showAtmosphere: true,
//     atmosphereColor: "#FFFFFF",
//     atmosphereAltitude: 0.1,
//     emissive: "#062056",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     polygonColor: "rgba(255,255,255,0.7)",
//     ambientLight: "#38bdf8",
//     directionalLeftLight: "#ffffff",
//     directionalTopLight: "#ffffff",
//     pointLight: "#ffffff",
//     arcTime: 1000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     initialPosition: { lat: 22.3193, lng: 114.1694 },
//     autoRotate: true,
//     autoRotateSpeed: 0.5,
//   };

//   const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
//   const sampleArcs = [
//     // Your sampleArcs data here
//   ];

//   return (
//     <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
//       <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="div"
//         >
//           <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
//             We sell soap worldwide
//           </h2>
//           <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
//             This globe is interactive and customizable. Have fun with it, and
//             don&apos;t forget to share it. :)
//           </p>
//         </motion.div>
//         <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
//         <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
//           {/* Wrap the World component in Suspense for lazy loading */}
//           <Suspense fallback={<div>Loading...</div>}>
//             <World data={sampleArcs} globeConfig={globeConfig} />
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   );
// }
