function ContactUs() {
    return (
        <div className="contact-us" >
        <h1>Contact Us</h1>
        <div className="rowc">
           <div className="col-4">
              <div className="form">
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
 <div className="col-4">
    <div className="add">
    <h1>ADDRESS</h1>
    <h3>OLD NO:226, Triplicane high road</h3>
    <h3>Triplicane</h3>
    <h3>chennai-5</h3>
    <h3>9789025152</h3>
    </div>
  </div>
  </div>
  </div>


    )}

    export default ContactUs ;