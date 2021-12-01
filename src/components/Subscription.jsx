import React, {useState} from "react";
import LoadingMask from './LoadingMask'

const Subscription = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)

  const subscribing = (e) => {
    e.preventDefault();

    setLoader(true) 
    setShow(!show)

    fetch("https://seriescharacters.com/api/newsletter", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email })

    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
        setLoader(false)
        setTimeout(() => {
          setShow(false);
        }, 5000)
      })
      .catch(function() {
        setError(true)
        setLoader(false)
    })
  };

  return(
    <div>
      { !show 
        && (
          <form onSubmit={(e) => subscribing(e)}>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            <input
              type="submit" 
              value="Subscribe"
              disabled={ !(email.includes('@') && email.includes('.'))}
            />
          </form>
        ) 
      }
    
    { loader && <LoadingMask />}

    { message && <h3>Subscribed</h3> }

    { error && <div>Error, something happened</div>}
  </div>
    
  )
}

export default Subscription;