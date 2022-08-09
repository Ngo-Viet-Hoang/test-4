// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material/IconButton";
// import foodService from "../Service/FoodService";

// export default function Deletefood({food, onDeleteFood}) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
    
//   };
//   const deleteFood = async () => {
//     onDeleteFood(food);
//     handleClose();
//   }

//   return (
//     <div>
//         <IconButton aria-label="delete"onClick={handleClickOpen}>
//           <DeleteIcon />
//         </IconButton>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           <p>{`Delete flight airline ${food.name} ?`}</p>
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//           Are you sure you want to delete this airline {food.name} ?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button variant="outlined" color="error" onClick={handleClose}>Disagree</Button>
//           <Button variant="outlined"  onClick={deleteFood} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
