import React from "react";
//import { ReactDOM } from "react-dom";
import { ReactDOM } from "react";

import './Modal.css';

// const Modal = (props)=>{
//     return ReactDOM.createPortal(
//             <div className="ui dimer show modals visible active">
//                 <div className="ui raised very padded text container segment">
//                     <h1>THE MODAL </h1>
//                 </div>
//             </div>,
//             document.querySelector('#modal')

//     )
// }

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }
  
    componentDidMount() {
      modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }
  
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el
      );
    }
  }
  


export default Modal;