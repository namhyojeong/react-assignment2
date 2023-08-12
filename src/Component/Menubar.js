import { Link } from "react-router-dom";

function Menubar() {
  return (
    <>
    <div className="menubar">
      <div className="weather1"><Link to="/suwon">수원</Link></div>
      <div className="weather2"><Link to="/seongnam">성남</Link></div>
      <div className="weather3"><Link to="/seoul">서울</Link></div>
      <div className="weather4"><Link to="/gwangju">광주</Link></div>
      <div className="weather5"><Link to="/jeju">제주</Link></div>
      </div>
    </>
  );
}
export default Menubar;
