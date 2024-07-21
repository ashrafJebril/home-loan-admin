import Table from "../components/Table";
import PageBar from "../components/PageBar";
import { useState, useEffect } from "react";
import Dialog from "../components/AddUserDialog";
import { connect } from "react-redux";
const Users = ({ addUsers, getUsers, users }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalFunction = (e) => {
    setShowModal(e);
  };
  useEffect(() => {
    getUsers("broker");
  }, []);

  const addBroker = (data) => {
    addUsers(data);
  };
  return (
    <div>
      <Dialog
        func={addBroker}
        visible={showModal}
        setVisible={showModalFunction}
      />
      <PageBar showModal={showModalFunction} text={"Add Broker"} />
      <Table data={users} />
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  addUsers: (data) => dispatch.user.createBroker(data),
  getUsers: (data) => dispatch.user.getUsers(data),
});
const mapState = (state) => ({
  logged: state.user.logged,
  users: state.user.users,
});
export default connect(mapState, mapDispatch)(Users);
