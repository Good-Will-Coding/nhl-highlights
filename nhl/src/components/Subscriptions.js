import React, { useState } from "react";
import axios from "axios";

const Subscriptions = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onChangeInput = e => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      saveSubscription(email);
    } else {
      console.log("Invalid Email");
      setEmailError(!emailError);
    }
  };

  const saveSubscription = email => {
    axios
      .post("http://localhost:3004/subcriptions", {
        email
      })
      .then(() => {
        setSubscribed(!subscribed);
        setEmail("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="subscribe_panel">
      <h3>{subscribed ? `Thanks for subscribing!` : `Subscribe to us`}</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={onChangeInput}
          />
          <div className="email_error">{emailError ? `Whoops! Please double check your email.` : null }</div>
        </form>
      </div>
      <small>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        quaerat tempore sequi natus quidem corporis.
      </small>
    </div>
  );
};

export default Subscriptions;
