import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../firbase";

function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      setLoading(false);
    } catch (e) {
      setErrorFromSubmit(e.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>This email field is required</p>}

        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p> This password filed is required </p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p> Password must have at least 6 characters </p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading} />
        <Link style={{ color: "gray", textDecoration: "none" }} to="register">
          이미 아이디가 없다면...
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
