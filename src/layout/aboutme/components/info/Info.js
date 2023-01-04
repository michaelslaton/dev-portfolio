import lightUp from "../../../../utils/lightUp/lightUp";
import schoolList from "../../../../data/schools.js";
import Slider from "../photoSlider/Slider";
import "./info.css";

export default function Info({ nav }){

  return (
    <div className={"info-wrapper block"}>
      <div className={`${nav === "edu" ? "active-screen" : "inactive-screen"} info-wrapper__padding`}>

        {schoolList.map((school,i)=>{
          if(school.length-1 !== i){
          return (
            <div key={school.id} className="school__wrapper">
              <div className="school">
                <div className="school-grid-span-2 center">
                  <a href={school.link} rel="noreferrer" target="_blank">
                    <img className="school__img" alt={school.name} src={school.img}/>
                  </a>
                </div>
                <div>
                  <span className="school__title">School:</span>
                  <span className="school__title">Course:</span>
                  <span className="school__title">Dates:</span>
                </div>
                <div>
                  <span className="school__info">{lightUp(school.name)}</span>
                  <span className="school__info">{school.course}</span>
                  <span className="school__info">{school.dates}</span>
                </div>
              </div>
            { schoolList.length-1 !== i && (
              <div className="divider"/>
            )}
            </div>
          )}
          else return <></>
        })}

      </div>
      
      <div className={`${nav === "photo" ? "active-screen" : "inactive-screen"}`}>
        <Slider/>
      </div>

      <div className={`${nav === "misc" ? "active-screen" : "inactive-screen"} info-wrapper__padding`}>
        Some Stuff
      </div>
    </div>
  )
}