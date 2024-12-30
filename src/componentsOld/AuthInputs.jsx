import { useState } from 'react';
import { styled } from "styled-components"
import Button from './Button';
import CustomInput from './CustomInput';

const ControlContainer = styled.div`
 width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <ControlContainer>
      <div className="controls">

        <CustomInput
          type="email"
          label="Email"
          isNotValid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <CustomInput
          type="password"
          label="Password"
          isNotValid={passwordNotValid}
          // className={passwordNotValid ? 'invalid' : undefined}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </ControlContainer>
  );
}

// export default function AuthInputs() {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   function handleInputChange(identifier, value) {
//     if (identifier === 'email') {
//       setEnteredEmail(value);
//     } else {
//       setEnteredPassword(value);
//     }
//   }

//   function handleLogin() {
//     setSubmitted(true);
//   }

//   const emailNotValid = submitted && !enteredEmail.includes('@');
//   const passwordNotValid = submitted && enteredPassword.trim().length < 6;

//   return (
//     <ControlContainer>
//       <div className="controls">
//         <p>
//           <Label $isNotValid={emailNotValid}>Email</Label>
//           <Input
//             type="email"
//             $isNotValid={emailNotValid}
//             // className={emailNotValid ? 'invalid' : undefined}
//             onChange={(event) => handleInputChange('email', event.target.value)}
//           />
//         </p>
//         <p>
//           <Label $isNotValid={passwordNotValid}>Password</Label>
//           <Input
//             type="password"
//             $isNotValid={passwordNotValid}
//             // className={passwordNotValid ? 'invalid' : undefined}
//             onChange={(event) =>
//               handleInputChange('password', event.target.value)
//             }
//           />
//         </p>
//       </div>
//       <div className="actions">
//         <button type="button" className="text-button">
//           Create a new account
//         </button>
//         <Button className='button' onClick={handleLogin}>Sign In</Button>
//       </div>
//     </ControlContainer>
//   );
// }
