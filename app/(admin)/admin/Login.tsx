"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "./actions";

function LoginButton() {
  const { pending } = useFormStatus();
  return <button type="submit" className="cms-primary" disabled={pending}>{pending ? "Вход…" : "Войти"}</button>;
}

export default function Login() {
  const [message, action] = useFormState(login, "");
  return <form action={action} className="cms-login-form">
    <label className="cms-field"><span>Пароль</span><input type="password" name="password" autoComplete="current-password" required maxLength={1024} /></label>
    {message && <p role="alert" className="cms-error">{message}</p>}
    <LoginButton />
  </form>;
}
