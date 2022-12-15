import { useState } from "react";
import { Modal } from "../common/modal/Modal";
import { Table } from "../common/table/Table";


export const ListOfPeople = ({ label, data, columns, addNewPerson }) => {
   const [person, setPerson] = useState("");

   const handleAddPerson = (e) => {
      e.preventDefault();
      addNewPerson(person);
      setPerson("");
      e.target.reset();
   }

   return (
      <div>
         <div className='top-thread'>
            <p>{label.toUpperCase()}S</p>
            <Modal>
               <form onSubmit={handleAddPerson}>
                  <label>
                     <span>New {label}: </span>
                     <input
                        type="text"
                        onChange={(e) => setPerson(e.target.value)}
                        value={person}
                        required
                     />
                  </label>
                  <button>Add</button>
               </form>
            </Modal>
         </div>
         {data && <Table
            data={data}
            columns={columns} />
         }
      </div>
   );
};

