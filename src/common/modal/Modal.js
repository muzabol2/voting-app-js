import { useState } from "react";
import './Modal.css';

export const Modal = ({ children }) => {
   const [shouldShow, setShouldShow] = useState(false);

   return (
      <>
         <button className="rounded-btn" onClick={() => setShouldShow(true)}>+</button>
         {shouldShow && (
            <div className="modal-background" onClick={() => setShouldShow(false)}>
               <div className="modal-body" onClick={e => e.stopPropagation()}>
                  {children}
                  <div className="modal-footer">
                     <button onClick={() => setShouldShow(false)}>
                        Close
                     </button>
                  </div>
               </div>
            </div>
         )
         }
      </>
   );
}
