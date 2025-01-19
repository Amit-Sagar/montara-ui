import Layout from "./Components/Layout";
import Modal from "./Components/Modal";
import MidContainer from "./Components/MidContainer";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout setOpenModal={setOpenModal}>
      <MidContainer />
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </Layout>

  );
}

export default App;
