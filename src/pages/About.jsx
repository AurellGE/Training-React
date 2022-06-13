import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Biodata from "../components/Biodata"
import PortfolioCard from "../components/PortfolioCard"

const About = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            const res = await axios.get("http://localhost:4000/portfolio");
            setPortfolio(res.data);
        };
        fetchPortfolio();
    }, []);

    const renderPortfolioList = () => {
        let portfolioList = portfolio;
        if (searchQuery) {
            portfolioList = portfolioList.filter(({ project }) =>
                project.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
    
        return portfolioList.map(({ project, date, detail, link, id }) => {
            return <PortfolioCard project={project} date={date} detail={detail} link={link} id={id} key={id} />;
        });
    };

    return (
        <>
            <Biodata />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="list">{renderPortfolioList()}</div>
        </>
    )
}
    
export default About;
