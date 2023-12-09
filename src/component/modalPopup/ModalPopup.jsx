import { IoClose } from "react-icons/io5";


import "./ModalPopup.scss"

const ModalPopup = ({title, logo, hideModal, children}) => {
  return (
    <>
    
        {/* full website modal design */}
            <div className="modal_area">
            <div className="modal_container">
                <div className="modal_header">
                    <div className="modal_close_btn">
                        <button onClick={() => hideModal(false)}><IoClose /></button>
                    </div>
                    {
                        logo ? 
                        <div style={{paddingLeft: "36%"}} className="modal_header_content">
                            <img src={logo} alt="" />
                        </div> :
                        <div className="modal_header_content">
                            <span>{title}</span>
                        </div>
                    }
                </div>
                <div className="modal_body">
                    {children}
                </div>
            </div>
            </div>
    
    </>
  )
}

export default ModalPopup;