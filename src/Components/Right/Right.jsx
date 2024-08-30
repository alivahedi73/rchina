import { useEffect, useState } from "react";
import "./Right.scss";
import { TbTargetArrow } from "react-icons/tb";
const Right = () => {
  let [rcat, setRcat] = useState([]);
  let fetchRightCat = async () => {
    try {
      let data = await fetch("http://localhost:8000/right");
      let res = await data.json();
      setRcat(res);
    } catch (error) {}
  };
  useEffect(() => {
    fetchRightCat();
  }, []);
  return (
    <>
      <div className="main_right">
        <div className="mr_1">you may like</div>
        {rcat.map((item, index) => {
          return (
            <a href={item.href} className="mr_2" key={index}>
              <div className="main_mr">
                <img src={item.src} alt="" />
                <div className="m_mr_2">
                  <p className="mr_3">{item.name}</p>
                  <p className="mr_4">{item.p}</p>
                </div>
              </div>
            </a>
          );
        })}

        <p className="mr_5">No desirable products?</p>
        <a href="#" className="req_mr">
          <div className="req_1">
            <p className="muy">
              <TbTargetArrow style={{ fontSize: "25px" }} />
            </p>
            <p>post your request now</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Right;
