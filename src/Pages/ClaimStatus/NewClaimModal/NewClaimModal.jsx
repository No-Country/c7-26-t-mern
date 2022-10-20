import "./newClaimModal.css";

const NewClaimModal = (props) => {
  document.body.style.overflow = "hidden";

  return (
    <div className="newClaimModalBackground">
      <div className="newClaimModalBox">
        <h4>¡Tu reclamo fue publicado!</h4>
        <p>En 24 horas recibirás novedades de tu reclamo.</p>
        <button onClick={() => props.setModal(false)}>Entiendo</button>
      </div>
    </div>
  );
};

export default NewClaimModal;
