import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Notecard from "../../components/Notecard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Notecard
            title="Meetingg on 7th December"
            date="3rd apr 2018"
            content="Meetingg on 7th December 2pm "
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="absolute flex items-center justify-center w-16 h-16 rounded-2xl bg-primary hover:bg-blue-600 right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        stryle={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2",
          },
        }}
        contentLable=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto at-14 p-5 overflow-scroll"
      >
        <AddEditNotes />
      </Modal>
    </div>
  );
};

export default Home;
