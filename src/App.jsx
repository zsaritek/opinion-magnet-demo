import OpinionMagnet from "react-opinion-magnet";

function App() {
  const props = {
    styleThemeColor: "#5D3FD3",
    styleFontColor: "#fff",
    styleFormTitle: "Give Us Feedback",
    styleFormPlaceHolder: "Your Feedback",
    styleRatingTitle: "Please rate the performance of our services and leave feedback below",
    styleButtonText: "Submit Your Feedback",
    opinionMagnetBackendUrl: "https://api-opinion-magnet.adaptable.app/api/feedback",
    opinionMagnetAccessToken: "6598398f064ff6a83e53c53c3141e991c67b9d30",
    opinionMagnetCompanyId: "65bd628291908372b099950b",
  }
  return (
    <OpinionMagnet {...props} />
  )
}

export default App
