import { useCallback, useState } from "react";
// import { HexColorPicker } from "react-colorful";
import { Radio } from "pretty-checkbox-react";
import profile1 from "../../assets/img/man1.webp";
import profile2 from "../../assets/img/man2.webp";
import profile3 from "../../assets/img/man3.webp";
import profile4 from "../../assets/img/woman1.jpg";
import profile5 from "../../assets/img/woman2.jpg";
import axios from "axios";
import "./index.css";

const ModalPop = ({ showModal, setShowModal, theme, setTheme }) => {
    const [tempTheme, settemptheme] = useState("");

    const hideModal = (e) => {
        if (e.target.className.includes("activated-modal")) {
            setShowModal(false);
        }
    };

    const userData = {
        username: "",
        phoneNumber: "",
        email: "",
        website: "",
        address: "",
        picture: "",
        color: ""
    };

    const fetchData = () => {
        axios.post("http://localhost:3000/api/save-user", userData);
        setShowModal(False);
    };

    return (
        <div
            onClick={hideModal}
            className={
                showModal ? "activated-modal " + "modal-page" : "modal-page"
            }>
            <div className={"modal-container display-flex flex-coloumn"}>
                <p className="choose-prefers">Choose Your Prefers</p>
                <div className="user-form-container display-flex flex-coloumn">
                    <div>
                        <p className="theme-color-text">Theme Color</p>
                        <input
                            onChange={(e) => {
                                userData.color = e.target.value;
                            }}
                            defaultValue={theme}
                            type="color"
                        />
                    </div>
                    <form className="inputs display-flex flex-coloumn">
                        <input
                            style={{ borderColor: theme + "80" }}
                            onChange={(e) => {
                                userData.username = e.target.value;
                            }}
                            placeholder="Username"
                            name="Username"
                            type="text"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            onChange={(e) => {
                                userData.phoneNumber = e.target.value;
                            }}
                            placeholder="Phone number"
                            name="Phone number"
                            type="text"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            onChange={(e) => {
                                userData.email = e.target.value;
                            }}
                            placeholder="Email"
                            name="Email"
                            type="email"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            onChange={(e) => {
                                userData.website = e.target.value;
                            }}
                            placeholder="Website"
                            name="Website"
                            type="text"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            onChange={(e) => {
                                userData.address = e.target.value;
                            }}
                            placeholder="Address"
                            name="Address"
                            type="text"
                        />
                        <div className="img-container display-flex">
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile1}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                    onChange={(e) =>
                                        (userData.picture =
                                            e.target.parentElement.parentElement.children[0].src)
                                    }
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile2}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                    onChange={(e) =>
                                        (userData.picture =
                                            e.target.parentElement.parentElement.children[0].src)
                                    }
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile3}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                    onChange={(e) =>
                                        (userData.picture =
                                            e.target.parentElement.parentElement.children[0].src)
                                    }
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile4}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                    onChange={(e) =>
                                        (userData.picture =
                                            e.target.parentElement.parentElement.children[0].src)
                                    }
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile5}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                    onChange={(e) =>
                                        (userData.picture =
                                            e.target.parentElement.parentElement.children[0].src)
                                    }
                                />
                            </figure>
                            <button
                                onClick={fetchData}
                                style={{ background: theme }}
                                type="button"
                                className="save-btn">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalPop;
