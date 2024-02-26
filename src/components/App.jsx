import React from "react";
import Avatar from "./Avatar";
import LinkButton from "./LinkButton";

function App() {
  return (
    <div className="profile">
      <Avatar image="./images/avatar-jessica.jpeg" />
      <h1 className="profile__name">Jessica Randall</h1>
      <p className="profile__country">London, United Kingdom</p>
      <p className="profile__description">
        "Front-end developer and avid reader."
      </p>

      <section className="profile-social">
        <LinkButton link="https://github.com/AlyferJT" title="GitGub" />

        <LinkButton
          link="https://www.frontendmentor.io/profile/AlyferJT"
          title="Frontend Mentor"
        />

        <LinkButton
          link="https://www.linkedin.com/in/alyfer-jacobsen-tagliaferro-9b88b8231/"
          title="Linkedin"
        />

        <LinkButton link="https://github.com/AlyferJT" title="Twitter" />

        <LinkButton
          link="https://www.instagram.com/alyfer.j/"
          title="Instagram"
        />
      </section>
    </div>
  );
}

export default App;
