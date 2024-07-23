import Table from "../components/Table";
import PageBar from "../components/PageBar";
import { useState, useEffect } from "react";
import Dialog from "../components/AddUserDialog";
import { connect } from "react-redux";
import LeadDialog from "../components/LeadDialog";
const Users = ({ addUsers, getUsers, users }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const columns = [
    { field: "status", header: "Status" },
    { field: "type", header: "Type" },
    { field: "usage", header: "Usage" },
    { field: "term", header: "Term" },
    { field: "progress", header: "Progress" },
    { field: "amount", header: "Amount" },
    { field: "balloonResidual", header: "Balloon Residual" },
    { field: "situation", header: "Situation" },
    { field: "saleType", header: "SaleType" },
    { field: "lender", header: "Lender" },
  ];
  const getLeadData = (data) => {
    console.log("data");
    setModalData(data);
    setShowModal(true);
  };

  const data = [
    {
      status: "created",
      type: "home loan",
      usage: "used",
      term: "30 years",
      progress: "initial",
      amount: "$300,000",
      balloonResidual: "$50,000",
      situation: "approved",
      saleType: "new",
      lender: "Bank A",
    },
    {
      status: "created",
      type: "home loan",
      usage: "used",
      term: "30 years",
      progress: "initial",
      amount: "$300,000",
      balloonResidual: "$50,000",
      situation: "approved",
      saleType: "new",
      lender: "Bank A",
    },
    {
      status: "created",
      type: "home loan",
      usage: "used",
      term: "30 years",
      progress: "initial",
      amount: "$300,000",
      balloonResidual: "$50,000",
      situation: "approved",
      saleType: "new",
      lender: "Bank A",
    },
    {
      status: "created",
      type: "home loan",
      usage: "used",
      term: "30 years",
      progress: "initial",
      amount: "$300,000",
      balloonResidual: "$50,000",
      situation: "approved",
      saleType: "new",
      lender: "Bank A",
    },
    {
      status: "created",
      type: "home loan",
      usage: "used",
      term: "30 years",
      progress: "initial",
      amount: "$300,000",
      balloonResidual: "$50,000",
      situation: "approved",
      saleType: "new",
      lender: "Bank A",
    },
    {
      status: "created",
      type: "home loan",
      usage: "used",
      term: "30 years",
      progress: "initial",
      amount: "$300,000",
      balloonResidual: "$50,000",
      situation: "approved",
      saleType: "new",
      lender: "Bank A",
    },
  ];
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
      <PageBar
        hideButton={true}
        pageTitle={"Leads"}
        showModal={showModalFunction}
        text={"Add Broker"}
      />
      <Table columns={columns} data={data} getLeadData={getLeadData} />
      <LeadDialog visible={showModal} setShowModal={setShowModal} />
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
