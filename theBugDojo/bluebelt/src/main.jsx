import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShortcutForm from "./ShortcutForm";
import DoubledCounter from "./DoubledCounter";
import MemoSearch from "./MemoSearch";
import UndoEditor from "./UndoEditor";
// import './index.css'
// import App from './App.jsx'
// import NameInput from "./NameInput.jsx";
// import Playlist from "./PlayList.jsx";
// import SecretMessage from "./SecretMesssage.jsx";
// import LiveTicker from "./LiveTicker.jsx";
// import TaskList from "./TaskList.jsx";
// import Counter from "./Counter.jsx";
// import FeedbackForm from "./FeedbackForm.jsx";
// import LiveCount from "./LiveCount.jsx";
// import SearchList from "./SearchList.jsx";
// import VotingPanel from "./VotinPanel.jsx";
// import SettingsPanel from "./SettingsPannel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      {/* <h1>All Components</h1> */}
      {/* <ShortcutForm /> */}
      {/* <DoubledCounter/> */}

      <MemoSearch />
      <UndoEditor/>

    </div>
  </StrictMode>,
);
