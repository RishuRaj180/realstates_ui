import "./ChangePassword.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function ChangePassword() {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !currentPassword ||
            !newPassword ||
            !confirmPassword
        ) {
            toast.error("All fields are required!");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {

            const username = localStorage.getItem("username");

            const response = await axios.post(
                "http://127.0.0.1:8000/api/change-password/",
                {
                    username,
                    current_password: currentPassword,
                    new_password: newPassword,
                }
            );

            if (response.data.success) {

                toast.success(response.data.message);

                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");

            } else {

                toast.error(response.data.message);

            }

        } catch (error) {

            toast.error("Something went wrong!");

        }

    };

    return (

        <div className="change-password-container">

            <div className="change-password-card">

                <h1>Change Password</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label>Current Password</label>

                        <input
                            type={showCurrent ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) =>
                                setCurrentPassword(e.target.value)
                            }
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowCurrent(!showCurrent)
                            }
                        >
                            {showCurrent ? "Hide" : "Show"}
                        </button>

                    </div>

                    <div className="input-group">

                        <label>New Password</label>

                        <input
                            type={showNew ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(e.target.value)
                            }
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowNew(!showNew)
                            }
                        >
                            {showNew ? "Hide" : "Show"}
                        </button>

                    </div>

                    <div className="input-group">

                        <label>Confirm Password</label>

                        <input
                            type={showConfirm ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirm(!showConfirm)
                            }
                        >
                            {showConfirm ? "Hide" : "Show"}
                        </button>

                    </div>

                    <button
                        className="change-password-btn"
                        type="submit"
                    >
                        Change Password
                    </button>

                </form>

            </div>

        </div>

    );

}

export default ChangePassword;