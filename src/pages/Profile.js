import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { auth, provider } from "../components/firebase/firebase.config";
import { addUser } from "../store/profileSlice";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleSingin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const name = result.user.displayName;
                const profile = result.user;
                const user = { token, profile };
                // console.log(user);
                dispatch(addUser(user));
                localStorage.setItem("token", token);
                localStorage.setItem("name", name);
                toast.success(`Hi ${profile.displayName}`);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Layout>
            <button onClick={handleGoogleSingin}>Sign in with Google</button>
        </Layout>
    );
};

export default Profile;
