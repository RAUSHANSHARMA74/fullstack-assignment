import React, { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import "./Home.css";
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const api = process.env.REACT_APP_API_URL;

export default function Home() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const getCards = async () => {
        console.log(api, "asdfsad")

        try {
            setLoading(true);
            const res = await fetch(`${api}/cards`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const cardsData = await res.json();
            setData(cardsData);
            console.log(cardsData)
        } catch (error) {
            console.log("error")
        } finally {
            setLoading(false);
        }
    };

    const searchData = async (title) => {
        try {
            setLoading(true);
            const res = await fetch(`${api}/cards/${title}`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const cardsData = await res.json();
            setData(cardsData);
        } catch (error) {
            console.error("Error fetching search data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        searchData(value);
    };

    useEffect(() => {
        getCards();
    }, []);

    return (
        <div className="home_page">
            <div className="help_and_search">
                <div className="help">
                    <h1>How can we help?</h1>
                    <div className="search">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Search'
                            value={search}
                            onChange={handleSearch}
                        />
                        <BsArrowRight className='arrow_right' />
                    </div>
                </div>
            </div>
            <div className="all_cards">

                {loading ? (
                    <p>Loading...</p>
                ) : data?.cards?.length > 0 ? (
                    data.cards.map((elm, index) => (
                        <Card
                            key={index}
                            id={elm.id}
                            title={elm.title}
                            description={elm.description}
                        />
                    ))
                ) : (
                    <p className='data_not_found'>{data.message || "No cards available"}</p>
                )}

            </div>
            <Footer />
        </div>
    );
}
