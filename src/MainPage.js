import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Menubar from "./Component/Menubar";
import './style.css';

function MainPage() {
  return (
    <div>
      <Header/>
      <Menubar />
      <Content/>
      <Footer/>
    </div>
  );
}

export default MainPage;
