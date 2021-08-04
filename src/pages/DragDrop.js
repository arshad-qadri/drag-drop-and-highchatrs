import React from "react";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const data = [
  {
    id: 1,
    name: "Arshad",
    age: 22,
    gender: "Male",
  },
  { id: 2, name: "Milind", age: 23, gender: "Male" },
  {
    id: 3,
    name: "Sarika",
    age: 21,
    gender: "Female",
  },
  {
    id: 4,
    name: "Rohan",
    age: 26,
    gender: "Male",
  },
  {
    id: 5,
    name: "Koustubh",
    age: 22,
    gender: "Male",
  },
];

const DragDrop = () => {
  const [user, setUser] = useState(data);
  const handleDragEnd = results => {
    if (!results.destination) return;
    let tempUser = [...user];
    let [selectedRow] = tempUser.splice(results.source.index, 1);
    tempUser.splice(results.destination.index, 0, selectedRow);
    setUser(tempUser);
    console.log(selectedRow);
  };
  return (
    <DragDropContext onDragEnd={results => handleDragEnd(results)}>
      <div className="w-full grid justify-center ">
        <table
          className="table-auto mt-10 shadow-lg "
          style={{ width: "50rem" }}
        >
          <thead className="border-b-2 border-black py-6">
            <tr>
              <th className="text-left pl-8 py-2">Name</th>
              <th className=" py-2">Age</th>
              <th className=" py-2">Gender</th>
            </tr>
          </thead>
          <Droppable droppableId="tbody">
            {provided => (
              <tbody ref={provided.innerRef} {...provided.droppableProps}>
                {user.map((e, index) => (
                  <Draggable draggableId={e.name} index={index} key={index}>
                    {provided => (
                      <tr
                        className="text-center border-b py-4"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <td className="text-left pl-8 py-2"> {e.name} </td>
                        <td className="py-2"> {e.age} </td>
                        <td className="py-2"> {e.gender} </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
