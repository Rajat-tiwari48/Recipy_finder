// import React from "react";

// // export default function Loader({ size = 6 }) {
// //   return (
// //     <div className={`flex items-center justify-center py-6`}>
// //       <div className={`w-${size} h-${size} rounded-full animate-spin border-4 border-t-transparent`} />
// //     </div>
// //   );
// // }

// function Loader() {
//   return (
//     <div className="flex items-center justify-center py-12">
//       <div className="relative">
//         <div className="w-16 h-16 border-4 border-orange-200 rounded-full animate-spin border-t-orange-500" />
//         <ChefHat className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500" size={24} />
//       </div>
//     </div>
//   );
// }

// export default Loader;

import React from "react";
import { ChefHat } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orange-200 rounded-full animate-spin border-t-orange-500" />
        <ChefHat className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500" size={24} />
      </div>
    </div>
  );
}

