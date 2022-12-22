import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeConfirmEmail = (event) => {
    setConfirmEmail(event.target.value);
  };

  const sendData = () => {
    if (
      age > 18 &&
      name.length > 10 &&
      email.includes("@") &&
      email === confirmEmail
    ) {
      setFormFlow(2);
    } else {
      alert("Confira se os campos estão devidamente preenchidos");
    }
  };
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          onChangeAge={onChangeAge}
          onChangeName={onChangeName}
          onChangeEmail={onChangeEmail}
          onChangeConfirmEmail={onChangeConfirmEmail}
          confirmEmail={confirmEmail}
          name={name}
          age={age}
          email={email}
          sendData={sendData}
        />
      ) : (
        <ConfirmationForm />
      )}
    </MainContainer>
  );
};

export default MainPage;
