import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function JobCard({ filter, handleClick }) {
  return (
    <div className="row">
      <ul>
        {filter.map((companies) => (
          <li className="job-card d-flex align-items-center justify-content-between" key={companies.id} style={{borderLeft:companies.featured?'5px solid #63baba':'0'}}>
            <div className="job-card__info">
              <div className="d-md-flex align-items-center gap-3">
                <img src={companies.image} alt="account" />
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p>{companies.company}</p>
                    {companies.post &&  <p className="tag-new">{companies.post}</p>}
                    {companies.featured &&   <p className="tag-featured">{companies.featured}</p>}
                  </div>

                  <h6>{companies.jobtitle}</h6>

                  <ul>
                    <li>{companies.time}</li>
                    <li>{companies.contract}</li>
                    <li>{companies.location}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="job-card__tags">
              {companies.skill.map((skills) => (
                <button value={skills} onClick={handleClick} key={skills}>
                  {skills}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
