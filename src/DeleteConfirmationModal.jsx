import PropTypes from "prop-types";
import { Box, Button, Modal, Typography } from "@mui/material";

const DeleteConfirmation = ({ isOpen, closeModal, onDelete }) => {
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography>Are you sure you want to permanently delete?</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button onClick={onDelete} variant="contained" color="error">
            Delete
          </Button>
          <Button onClick={closeModal} variant="contained" color="primary">
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

DeleteConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteConfirmation;
