export default function MessageMenu({ onEdit, onClose }) {
  return (
    <div className="menu" onMouseLeave={onClose}>
      <div>↩ Reply</div>
      <div>➡ Forward</div>
      <div>📋 Copy</div>
      <div onClick={onEdit}>✏️ Edit</div>
      <div>🌐 Translate</div>
      <div className="danger">🗑 Delete for all</div>
      <div className="danger">🗑 Delete for me</div>
    </div>
  );
}
