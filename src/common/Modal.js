import { useState } from "react"

export const Modal = ({ children }) => {
   const [shouldShow, setShouldShow] = useState(false);

   return (
      <>
         <button onClick={() => setShouldShow(true)}>+</button>
         {shouldShow && (
            <div className="modal-background" onClick={() => setShouldShow(false)}>
               <div className="modal-body" onClick={e => e.stopPropagation()}>
                  {children}
                  <button onClick={() => setShouldShow(false)}>Done</button>
               </div>
            </div>
         )}
      </>
   );
}
