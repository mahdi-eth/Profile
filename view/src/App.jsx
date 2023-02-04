import compLogo from "./assets/img/compLogo.jpg";
import tempProfilePic from "./assets/img/man1.webp";
import phoneSVG from "./assets/icons/phone.svg";
import mailSVG from "./assets/icons/mail.svg";
import webSVG from "./assets/icons/web.svg";
import locSVG from "./assets/icons/loc.svg";
import { useState } from "react";
import ModalPop from "./components/inputsModal";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [theme, setTheme] = useState("#d87093");

    console.log(showModal);

    return (
        <>
            <ModalPop
                showModal={showModal}
                setShowModal={setShowModal}
                theme={theme}
                setTheme={setTheme}
            />
            <div className="main-container line">
                <div className="sec-line">
                    <div className="third-line">
                        <div className="contaion display-flex justify-content-center">
                            <div className="sub-container display-flex justify-content-center align-items-center">
                                <div className="profile-holder display-flex align-items-center flex-coloumn special-m">
                                    <img
                                        className="user z-index"
                                        src={tempProfilePic}
                                        alt="Profile picture"
                                    />
                                    <img
                                        className="comp-logo border-radius-19 z-index"
                                        src={compLogo}
                                        alt="Company logo!"
                                    />
                                </div>
                                <div className="form-info display-flex align-items-center flex-coloumn z-index">
                                    <div className="form-info-header display-flex align-items-center flex-coloumn">
                                        <h1 className="heading">
                                            PHIL Janet anderson
                                        </h1>
                                        <h2 className="sales">
                                            Sales Representative
                                        </h2>
                                    </div>
                                    <div className="form-info-items display-flex flex-coloumn">
                                        <div>
                                            <img src={phoneSVG} alt="phone" />
                                            +123-456-789
                                        </div>
                                        <div>
                                            <img src={mailSVG} alt="mail" />
                                            Hello@reallygreatsite.com
                                        </div>
                                        <div>
                                            <img src={webSVG} alt="web" />
                                            www.reallygreatsite.com
                                        </div>
                                        <div className="none-bottom-border">
                                            <img src={locSVG} alt="location" />
                                            123 AnyWhere st., Any City, st 1234
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="my-inputs z-index">
                                    My Inputs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
