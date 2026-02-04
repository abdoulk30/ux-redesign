import { useState } from "react";
import MessageMenu from "./MessageMenu";

export default function Message({ message, onEdit }) {
  const [showMenu, setShowMenu] = useState(false);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(message.text);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };

  const saveEdit = () => {
    onEdit(message.id, value);
    setEditing(false);
  };

  return (
    <div
      className={`bubble ${message.sender}`}
      onContextMenu={handleContextMenu}
    >
      {editing ? (
        <div className="edit-box">
          <input value={value} onChange={e => setValue(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <>
          {message.text}
          {message.edited && <div className="edited">edited</div>}
        </>
      )}

      {showMenu && (
        <MessageMenu
          onEdit={() => {
            setEditing(true);
            setShowMenu(false);
          }}
          onClose={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}
