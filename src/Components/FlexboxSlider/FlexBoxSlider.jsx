import { useEffect, useState } from "react";
import "./FlexBoxSlider.scss";
import { LuMoveRight } from "react-icons/lu";
const FlexBoxSlider = () => {
  let [flex, setFlex] = useState([]);
  let fetchFlexBox = async () => {
    try {
      let data = await fetch("http://localhost:8000/FlexBoxSlider");
      let res = await data.json();
      setFlex(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchFlexBox();
  }, []);
  return (
    <>
      <div className="sl_2">
        {flex.map((item, index) => {
          return (
            <div key={index}>
              {item.class ? (
                <a href="#" className="s_1" key={index + 1}>
                  <img src={item.src} alt={item.alt} />
                  <p className="s_1_P">{item.pfirst}</p>
                  <p className="sp1_hover">{item.psecond}</p>
                  <p className="s_hover">
                    <LuMoveRight style={{ fontSize: "25px" }} />
                  </p>
                </a>
              ) : (
                <a href="#" className="s_2" key={item.id}>
                  <img src={item.src} className="s2Img" alt={item.alt} />
                  <p className="s2P">{item.pfirst}</p>
                  <div className="sp_hover">
                    <LuMoveRight style={{ fontSize: "25px" }} />
                  </div>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlexBoxSlider;
