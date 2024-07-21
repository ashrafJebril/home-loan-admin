import Table from "../components/Table";
import PageBar from "../components/PageBar";
import { useState } from "react";
import Dialog from "../components/AddUserDialog";
const Users = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalFunction = (e) => {
    setShowModal(e);
  };
  return (
    <div>
      <Dialog visible={showModal} setVisible={showModalFunction} />
      <PageBar showModal={showModalFunction} text={"Add Broker"} />
      <Table />
    </div>
  );
};

export default Users;
