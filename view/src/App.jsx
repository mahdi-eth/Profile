import compLogo from "./assets/img/compLogo.jpg";
import tempProfilePic from "./assets/img/man1.webp";
import phoneSVG from "./assets/icons/phone.svg";
import mailSVG from "./assets/icons/mail.svg";
import webSVG from "./assets/icons/web.svg";
import locSVG from "./assets/icons/loc.svg";
import { useEffect, useState } from "react";
import ModalPop from "./components/inputsModal";
import styled from "styled-components";
import axios from "axios";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);

    const getData = () => {
        axios
            .get("http://localhost:3000")
            .then((res) => {
                const hasGotData = res.data;
                setData(hasGotData);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    // const div = styled.div`
    //     height: 100vh;
    //     overflow: hidden;
    //     z-index: 1;
    //     &::before {
    //         content: "";
    //         padding: 4rem 0;
    //         background: rgb(216, 112, 147);
    //         width: 150%;
    //         rotate: 45deg;
    //         position: relative;
    //         left: 24rem;
    //         display: block;
    //     }
    //     &::after {
    //         content: "";
    //         padding: 6rem 0;
    //         background: rgb(216, 112, 147);
    //         width: 150%;
    //         rotate: 45deg;
    //         position: relative;
    //         right: 54rem;
    //         display: block;
    //     }
    // `;

    // const div = styled.div`
    //     &::before {
    //         content: "";
    //         padding: 4rem 0;
    //         background: rgb(71, 71, 71);
    //         width: 150%;
    //         rotate: 45deg;
    //         position: relative;
    //         left: 23rem;
    //         display: block;
    //     }
    //     &::after {
    //         content: "";
    //         padding: 8rem 0;
    //         background: rgb(71, 71, 71);
    //         width: 150%;
    //         rotate: 45deg;
    //         position: relative;
    //         right: 55rem;
    //         display: block;
    //     }
    // `;

    // const div = styled.div`
    //     &::after {
    //         content: "";
    //         padding: 8rem 0;
    //         background: rgb(216, 112, 147);
    //         width: 150%;
    //         rotate: 45deg;
    //         position: relative;
    //         right: 55rem;
    //         display: block;
    //     }
    // `;

    return (
        <>
            <ModalPop
                showModal={showModal}
                setShowModal={setShowModal}
                theme={data?.userData?.color}
            />
            <div className="main-container line">
                <div className="sec-line">
                    <div className="third-line">
                        <div className="contaion display-flex justify-content-center">
                            <div className="sub-container display-flex justify-content-center align-items-center">
                                <div className="profile-holder display-flex align-items-center flex-coloumn special-m">
                                    <img
                                        className="user z-index"
                                        src={data?.userData?.picture}
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
                                            {data?.userData?.username}
                                        </h1>
                                        <h2 className="sales">
                                            Sales Representative
                                        </h2>
                                    </div>
                                    <div className="form-info-items display-flex flex-coloumn">
                                        <div>
                                            <img src={phoneSVG} alt="phone" />
                                            {data?.userData?.phoneNumber}
                                        </div>
                                        <div>
                                            <img src={mailSVG} alt="mail" />
                                            {data?.userData?.email}
                                        </div>
                                        <div>
                                            <img src={webSVG} alt="web" />
                                            {data?.userData?.website}
                                        </div>
                                        <div className="none-bottom-border">
                                            <img src={locSVG} alt="location" />
                                            {data?.userData?.address}
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
