import styles from './AvisoCarrito.module.css';

function AvisoCarrito({ mensaje, onClose }) {
  if (!mensaje) return null; // No renderiza nada si no hay mensaje

  return (
    <div className={styles.avisoCarrito} role="status">
      <span>✓ {mensaje}</span>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar aviso"
        className={styles.cerrarAviso}
      >
        ×
      </button>
    </div>
  );
}

export default AvisoCarrito;
