import "./Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Profile() {

    const [user, setUser] = useState(null);
    const [originalUser, setOriginalUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const username = localStorage.getItem("username");

                const response = await axios.post(
                    "http://127.0.0.1:8000/api/profile/",
                    {
                        username: username,
                    }
                );

                if (response.data.success) {

                    setUser(response.data.user);
                    setOriginalUser(response.data.user);

                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchProfile();

    }, []);

    const updateProfile = async () => {

        if (!user.name.trim()) {
            toast.error("Name is required");
            return;
        }

        if (!user.email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!/^[0-9]{10}$/.test(user.mobile)) {
            toast.error("Enter a valid mobile number");
            return;
        }

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/api/update-profile/",
                user
            );

            if (response.data.success) {

                toast.success(response.data.message);

                setOriginalUser(user);

                setIsEditing(false);

            } else {

                toast.error(response.data.message);

            }

        } catch (error) {

            toast.error("Something went wrong");

        }

    };

    const cancelEdit = () => {

        setUser(originalUser);

        setIsEditing(false);

    };

    if (!user) {
        return (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                Loading...
            </h2>
        );
    }

    return (        
    
    <div className="profile-container">

            <div className="profile-card">

                <h1>My Profile</h1>

                <div className="profile-row">
                    <strong>Name:</strong>

                    <input
                        type="text"
                        value={user.name}
                        disabled={!isEditing}
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                    />
                </div>

                <div className="profile-row">
                    <strong>Username:</strong>

                    <input
                        type="text"
                        value={user.username}
                        disabled
                    />
                </div>

                <div className="profile-row">
                    <strong>Email:</strong>

                    <input
                        type="email"
                        value={user.email}
                        disabled={!isEditing}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                </div>

                <div className="profile-row">
                    <strong>Mobile:</strong>

                    <input
                        type="text"
                        value={user.mobile}
                        disabled={!isEditing}
                        onChange={(e) =>
                            setUser({ ...user, mobile: e.target.value })
                        }
                    />
                </div>

                <div className="profile-row">
                    <strong>State:</strong>

                    <input
                        type="text"
                        value={user.state}
                        disabled={!isEditing}
                        onChange={(e) =>
                            setUser({ ...user, state: e.target.value })
                        }
                    />
                </div>

                <div className="profile-row">
                    <strong>City:</strong>

                    <input
                        type="text"
                        value={user.city}
                        disabled={!isEditing}
                        onChange={(e) =>
                            setUser({ ...user, city: e.target.value })
                        }
                    />
                </div>

                <div className="profile-row">
                    <strong>Gender:</strong>

                    <select
                        value={user.gender}
                        disabled={!isEditing}
                        onChange={(e) =>
                            setUser({ ...user, gender: e.target.value })
                        }
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                </div>

                <div className="profile-buttons">

                    {!isEditing ? (

                        <button
                            className="edit-btn"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </button>

                    ) : (

                        <>
                            <button
                                className="save-btn"
                                onClick={updateProfile}
                            >
                                Save Changes
                            </button>

                            <button
                                className="cancel-btn"
                                onClick={cancelEdit}
                            >
                                Cancel
                            </button>
                        </>

                    )}

                </div>

            </div>

        </div>
    );
}

export default Profile;