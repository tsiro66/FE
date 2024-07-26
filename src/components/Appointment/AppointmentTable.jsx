import React from "react";
import CustomTable from "../CustomTable";

const AppointmentTable = ({ rows, onDeleteClick, onEditClick }) => {
  const columns = [
    { id: "appointmentId", label: "ID" },
    { id: "patientId", label: "Patient ID" },
    { id: "appointmentDate", label: "Appointment Date" },
    { id: "description", label: "Description", hideOnMobile: true },
  ];

  return (
    <CustomTable
      rows={rows}
      columns={columns}
      onDeleteClick={onDeleteClick}
      onEditClick={onEditClick}
      idField="appointmentId"
      columnWidth={250}
    />
  );
};

export default AppointmentTable;
