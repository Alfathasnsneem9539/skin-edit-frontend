import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [name, setName] = useState("Skin Edit User");
  const [email, setEmail] = useState("user@example.com");

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();

    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    alert("Logged out successfully!");

    navigate("/");
  };

  return (
    <main className="profile-page">

      <div className="profile-container">

        {/* HEADER */}

        <div className="profile-header">

          <p className="profile-small">
            MY ACCOUNT
          </p>

          <h1>
            Profile
          </h1>

          <p>
            Manage your Skin Edit account information.
          </p>

        </div>


        {/* PROFILE CARD */}

        <div className="profile-card">

          <div className="profile-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-info">

            <p className="profile-label">
              ACCOUNT DETAILS
            </p>

            {isEditing ? (

              <form
                className="profile-form"
                onSubmit={handleSave}
              >

                <div className="profile-form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />

                </div>


                <div className="profile-form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />

                </div>


                <div className="profile-actions">

                  <button
                    type="submit"
                    className="profile-save-button"
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    className="profile-cancel-button"
                    onClick={() =>
                      setIsEditing(false)
                    }
                  >
                    Cancel
                  </button>

                </div>

              </form>

            ) : (

              <>

                <div className="profile-detail">

                  <span>
                    Name
                  </span>

                  <strong>
                    {name}
                  </strong>

                </div>


                <div className="profile-detail">

                  <span>
                    Email
                  </span>

                  <strong>
                    {email}
                  </strong>

                </div>


                <button
                  className="profile-edit-button"
                  onClick={() =>
                    setIsEditing(true)
                  }
                >
                  Edit Profile
                </button>

              </>

            )}

          </div>

        </div>


        {/* ACCOUNT ACTIONS */}

        <div className="profile-actions-card">

          <div>
            <p className="profile-label">
              ACCOUNT
            </p>

            <h2>
              Manage your account
            </h2>

            <p>
              View your orders and manage your
              Skin Edit account.
            </p>
          </div>


          <div className="profile-links">

            <button
              onClick={() =>
                navigate("/cart")
              }
            >
              View Cart
            </button>

            <button
              onClick={() =>
                navigate("/wishlist")
              }
            >
              My Wishlist
            </button>

          </div>

        </div>


        {/* LOGOUT */}

        <div className="profile-logout">

          <button
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </main>
  );
}

export default Profile;