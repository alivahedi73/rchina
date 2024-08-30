import Left from "../Left/Left";
import FlexBoxSlider from "../FlexboxSlider/FlexBoxSlider";
import Right from "../Right/Right";
import "./App.scss";
import Slider from "../Slider/Slider";
const App = () => {
  return (
    <>
      {/* start of project */}
      <div className="main_cat">
        <div className="w_cat">
          {/* start of right categorize */}
          <Left />
          {/* end of right categorize */}
          {/* start of center categorize */}
          <div className="center">
            <div className="sl_1">
              <Slider />
            </div>
            <FlexBoxSlider />
          </div>
          {/* end of center categorize */}
          {/* start of right of menu */}
          <Right />
          {/* end of right of menu */}
        </div>
      </div>
      {/* end of project */}
    </>
  );
};

export default App;
