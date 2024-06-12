import { forwardRef } from "react";

export const Textarea = forwardRef((props, ref, rows = 2) => (
  <textarea
   // Extraemos el valor de rows y el resto de las props
    {...props}
    ref={ref}
    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
    rows={rows}
  />
));
