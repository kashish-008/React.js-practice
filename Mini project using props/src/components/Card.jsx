const Card = (props) => {
    
  return (
     <div className="card">
        <div>
          <div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            Save{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bookmark-icon lucide-bookmark"
            >
              <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
            </svg>
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.date}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card