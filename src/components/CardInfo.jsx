const CardInfo = ({ title, icon, value, backgroundColor, mb }) => {
    return (

        <div className="card text-white mb-3" style={{ background: backgroundColor }}>
            <div className="card-body">
                <h5 className={`card-title fs-6 d-flex justify-content-center ${mb}`}>
                    <i className={`bi ${icon} me-2`}></i>
                    <span className="ms-1">{title}</span>
                </h5>
                <p className="card-text">{value}</p>
            </div>
        </div>
    );
};

export default CardInfo;