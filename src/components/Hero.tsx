const Hero = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Make my resume</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome, your one-stop solution for creating and downloading
          professional resumes in PDF format. Our intuitive platform is designed
          to help you craft standout resumes with ease, whether you're a
          seasoned professional or just starting your career.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Create Resume{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
