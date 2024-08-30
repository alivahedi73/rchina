import { useEffect, useState } from "react";
import "./Menu.scss";
import { FaCaretRight } from "react-icons/fa";
import Submenu from "../Submenu/Submenu";
const Menu = () => {
  let [menu, setMenu] = useState([]);
  let [click, setClick] = useState(false);
  let fetchMenu = async () => {
    try {
      let data = await fetch("http://localhost:8000/Menu");
      let res = await data.json();
      setMenu(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <div className="submenu">
        {menu.map((item, index) => {
          return (
            <div key={index}>
              {item.class == false ? (
                <a href="#" className="sub_1" key={item.id} onMouseEnter={()=>setClick(true)} onMouseLeave={()=>setClick(false)}>
                  {item.name}
                  <div className="p_1">
                    <div className="pm">
                      <Submenu value={item.submenu} index={index+1}/>
                    </div>
                  </div>
                </a>
                
              ) : (
                <a href="#" className="sub_2" key={item.id}>
                  <span>{item.name}</span>
                  <div className="p_2"></div>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
