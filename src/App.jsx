import OpinionMagnet from "react-opinion-magnet";
import "./App.css";

function App() {
  const props = {
    styleThemeColor: "#5D3FD3",
    styleFontColor: "#fff",
    styleFormTitle: "Give Us Feedback",
    styleFormPlaceHolder: "Your Feedback",
    styleRatingTitle:
      "Please rate the performance of our services and leave feedback below",
    styleButtonText: "Submit Your Feedback",
    opinionMagnetBackendUrl:
      "https://api-opinion-magnet.adaptable.app/api/feedback",
    opinionMagnetAccessToken: "6598398f064ff6a83e53c53c3141e991c67b9d30",
    opinionMagnetCompanyId: "65bd628291908372b099950b",
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Acme</h1>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <section>
        <h2>Welcome to Acme</h2>
        <p>
          At Acme, we believe in providing the best products and services to our
          customers. Our team of experts is dedicated to ensuring that you
          receive the highest quality service possible. Whether you need help
          with a project or just have a question, we're here to help.
        </p>
        <iframe
          src="https://giphy.com/embed/sM1VXgNGTDTc4"
          width="480"
          height="270"
          frameBorder="0"
          className="animate__animated animate__bounceInDown"
        ></iframe>
        <div className="testimonial">
          <p className="quote">
            "I was blown away by the level of service I received from Acme. The
            team was incredibly knowledgeable and helpful, and they went above
            and beyond to ensure that I was satisfied with the end result."
          </p>
          <p className="author">- Jane Doe</p>
        </div>
      </section>
      <div>
        <OpinionMagnet {...props} />
      </div>
      <footer>
        <p>&copy; 2024 Acme Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
