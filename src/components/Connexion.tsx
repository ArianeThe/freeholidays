import React, { useState } from "react";
import "../assets/css/Connexion.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  login: string;
  password: string;
};

const Connexion: React.FC = () => {
  const { control, handleSubmit } = useForm<Inputs>();

  const [isloading, setIsLoading] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<String | null>(null);

  // Fonction de connexion simulée
  const login = async (data: Inputs) => {
    return new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        if (data.login === "user" && data.password === "password") {
          resolve({ token: "fake-jwt-token" });
        } else {
          reject("Identifiants incorrects");
        }
      }, 1000);
    });
  };

  const onSubmitLoginFillForm: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    try {
      const result = await login(data); // Appelle la fonction `login`
      localStorage.setItem("token", result.token); // Stocke le token
      setIsLoading(false);
    } catch (error) {
      setErrorLogin(error as string); // Gère l'erreur de connexion
      setIsLoading(false);
    }
  };

  return (
    <div className="connexion">
      <h2 className="title">Connexion utilisateur</h2>
      <p className="texte">
        Ici tu te connectes pour accéder à plus d'information et si tu souhaites
        partager tes expériences
      </p>

      <label className="title">LOGIN</label>
      <div className="error">{errorLogin && errorLogin}</div>
      <form onSubmit={handleSubmit(onSubmitLoginFillForm)}>
        <div >
          <Controller
            render={({ field }) => <input className="champ" {...field} placeholder="Login" />}
            control={control}
            name="login"
            defaultValue=""
          />
        </div>

        <label className="title">PASSWORD</label>
        <div>
          <Controller
            render={({ field }) => (
              <input className="champ" {...field} type="password" placeholder="Password" />
            )}
            control={control}
            name="password"
            defaultValue=""
          />
        </div>

        <button className="submit" type="submit" disabled={isloading}>
          {isloading ? "Chargement..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default Connexion;
