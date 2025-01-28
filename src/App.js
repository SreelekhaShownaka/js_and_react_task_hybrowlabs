// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [records, setRecords] = useState([]);

//   // Function to add a random record
//   const addRecord = async () => {
//     try {
//       const randomId = Math.floor(Math.random() * 83) + 1; // Random ID between 1 and 83
//       const response = await axios.get(
//         `https://swapi.dev/api/people/${randomId}/`
//       );
//       const newRecord = {
//         id: randomId,
//         name: response.data.name,
//         height: response.data.height,
//         gender: response.data.gender,
//       };
//       setRecords((prevRecords) => [...prevRecords, newRecord]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Function to delete a record by ID
//   const deleteRecord = (id) => {
//     setRecords((prevRecords) =>
//       prevRecords.filter((record) => record.id !== id)
//     );
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Star Wars Characters</h1>
//       <button
//         onClick={addRecord}
//         style={{ marginBottom: "10px", padding: "10px 20px" }}
//       >
//         Add Record
//       </button>
//       <table
//         border="1"
//         cellPadding="10"
//         style={{ width: "100%", textAlign: "left" }}
//       >
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Height</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((record) => (
//             <tr key={record.id}>
//               <td>{record.name}</td>
//               <td>{record.height}</td>
//               <td>{record.gender}</td>
//               <td>
//                 <button
//                   onClick={() => deleteRecord(record.id)}
//                   style={{ color: "red" }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// export default function App() {
//   const [records, setRecords] = useState([
//     "Frederick Warner",
//     "Amitabh Bachchan",
//     "Shahrukh Khan",
//   ]);

//   const addRecord = () => {
//     const newName = prompt("Enter a name:");
//     if (newName) {
//       setRecords([...records, newName]);
//     }
//   };

//   const deleteRecord = (index) => {
//     const updatedRecords = records.filter((_, i) => i !== index);
//     setRecords(updatedRecords);
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <button
//         onClick={addRecord}
//         className="bg-blue-500 text-white p-2 rounded"
//       >
//         Add Record
//       </button>
//       <div className="mt-4 border rounded">
//         <div className="p-2 border-b font-bold">Name</div>
//         {records.map((name, index) => (
//           <div key={index} className="p-2 border-b flex justify-between">
//             {name}
//             <button
//               onClick={() => deleteRecord(index)}
//               className="bg-red-500 text-white px-2 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function App() {
  const [records, setRecords] = useState([
    "Frederick Warner",
    "Amitabh Bachchan",
    "Shahrukh Khan",
  ]);

  const addRecord = () => {
    const newName = prompt("Enter a name:");
    if (newName) {
      setRecords([...records, newName]);
    }
  };

  const deleteRecord = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <button
        onClick={addRecord}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Add Record
      </button>

      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">#</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((name, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 p-2">{index + 1}</td>
              <td className="border border-gray-400 p-2">{name}</td>
              <td className="border border-gray-400 p-2">
                <button
                  onClick={() => deleteRecord(index)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

