import React from "react";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b88009a6-809a-4406-9c31-88d038f29b27");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <div className="input">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
        <div className="input">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>
        <div className="input">
          <label>Your Message</label>
          <textarea
            name="message"
            id=""
            className="field-message"
            placeholder="Enter Your Message"
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
