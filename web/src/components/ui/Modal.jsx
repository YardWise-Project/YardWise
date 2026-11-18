
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div role="dialog" aria-modal="true" className="bg-background rounded-lg p-6" >
        
        <button type="button" onClick={onClose}> Close </button>

        {children}

        {/* TODO:
          - Add keyboard support (Escape key)
          - Add focus management
          - Improve modal styling
        */}
      </div>
    </div>
  );
}
