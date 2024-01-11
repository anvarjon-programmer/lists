import React, { useState } from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modals({open,toggle,handleSubmit,text}) {
  return (
      <Modal isOpen={open} toggle={toggle} >
        <ModalHeader>
          <h1>Add USer</h1>
        </ModalHeader>
        <ModalBody>
          <form id="form" onSubmit={handleSubmit}>
            <input type="text" defaultValue={text?.title} placeholder="Title" className="form-control m-2"/>
            <select className="form-control m-2" defaultValue={text?.status}>
              <option value="open">open</option>
              <option value="pending">Pending</option>
              <option value="pyload">PAyload</option>
              <option value="progress">Progress</option>
            </select>
          </form>
        </ModalBody>
        <ModalFooter>
          <button id="form" className="btn btn-success" form="form" type="submit">save</button>
        </ModalFooter>
      </Modal>
  );
}
