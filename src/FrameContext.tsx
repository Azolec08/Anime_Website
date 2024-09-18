import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import AllPopUp from "./components/popUp";
import AllData from "./data/list.json";
import { userContext } from "./store/createContextStore";
import "./style/card.scss";
import "./style/popStyle.scss";

const Context = () => {
  const { currentSong, get } = useContext(userContext);
  return (
    <>
      <Header />
      <Outlet />
      {AllData.map((list) => {
        if (currentSong[list.id] !== 0) {
          return (
            <div key={list.id} className="pop_up">
              <div>
                <AllPopUp {...list} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Context;
