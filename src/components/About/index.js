import React from 'react';
import coverImage from "../../assets/images/cover/20180602_133257.jpg"

function About() {
  return (
    <section className="my-5">
        <h1 id="about">Jacobs World</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;