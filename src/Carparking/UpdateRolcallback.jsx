
// // import axios from "axios";
// // import React from "react";
// // import { useState, useEffect } from "react";
// // import Swal from "sweetalert2";
// // import {ApiUrlTest} from '../Constant/Constant';
// //   const UpdateRollcallback = () => {
// //   const [post, setPost] = useState(null);
// //    const baseURL = `${ApiUrlTest}`+"/hooks/GetReportByDate/1400-09-08";

// //   useEffect(() => {
// //     axios.get(baseURL).then((response) => {
// //       console.log('update records:',response.data);
// //       setPost(response.data);
// //     });
// //   }, []);

// //   // if (!post) return null
// //   //   return (
// //   //   <div className="mt-6" >
// //   //     {post?post.map(item=>{
// //   //       return (`<h1>${item.ObjectId}</h1>
// //   //         <h2>${item.Radif}</h2>
// //   //         <h2>${item.Hostname}</h2>
// //   //         <h2>${item.Ipaddress}</h2>
// //   //         <h2>${item.CardNo}</h2>
// //   //         <h2>${item.InOutDate}</h2>
// //   //         <h2>${item.ActionCode}</h2>
// //   //         <h2>${item.ActionTime}</h2>
// //   //         `)
// //   //     }):null}

// // // </div>
// // //   );
// // return (
// //   <div className="mt-6" >
// // {post?post.map
// // (item=>{
// //   return(<table class="table table-dark">
// //   <thead>
// //     <tr>
// //       <th scope="col">${item.ObjectId}</th>
// //       <th scope="col">${item.Radif}</th>
// //       <th scope="col">${item.Hostname}</th>
// //       <th scope="col">${item.Ipaddress}</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr>
// //       <th scope="row">1</th>
// //       <td>${item.CardNo}</td>
// //       <td>${item.InOutDate}</td>
// //       <td>${item.ActionCode}</td>
// //     </tr>
  
// //   </tbody>
// // </table>
// //        )}
// //  ):null}
// //   </div>
// //     )

// //  };
// // export default UpdateRollcallback;

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }