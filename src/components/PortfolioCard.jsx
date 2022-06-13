const PortfolioCard = ({ project, date, detail, link, id }) => {
    return (
        <div className="card">
            <h5 className="card__title">{project}</h5>
            <p className="card__detail card__date">{date}</p>
            <p className="card__detail">{detail}</p>
            <a href={link} className="btn btn-primary btn-link" target="_blank">Link</a>
        </div>
    );
};

export default PortfolioCard;
