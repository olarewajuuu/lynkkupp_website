import "./Subscribe.css"
const Subscribe = () => {
  return (
    <>
      <div className="sub">
          <h4>Interested in travel deals?</h4>
          <p>Enter your email, as we'll send them straight to your inbox.</p>
          <div className="input">
            <input type="text" placeholder="Enter your email address"/>
            <button>Subscribe</button>
          </div>
          <div className="paragraph">
            <p>We value your privacy. Rest assured, we won't spam you or share your information with third parities.
              Check out our privacy policy. You can unsubscribe anytime.
            </p>
          </div>
      </div>
    </>
  )
}

export default Subscribe
