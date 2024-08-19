import React, { useState } from 'react';
import "./AddCard.css";
import Swal from 'sweetalert2';
const api = process.env.REACT_APP_API_URL;

export default function AddCard() {
    const [addData, setAddData] = useState({
        id: "",
        title: '',
        description: ""
    });
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const addCard = async (data) => {
        try {
            setLoading(true);
            const res = await fetch(`${api}/cards`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const cardsData = await res.json();
            console.log("Card added successfully:", cardsData);
            setAddData({
                id: "",
                title: '',
                description: ""
            })
            Swal.fire({
                title: "Good job!",
                text: cardsData.message,
                icon: "success"
            });

        } catch (error) {
            console.error("Error adding card:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addData);
        addCard(addData)
    };



    return (
        <div className="addcard">
            <form className='form_card' onSubmit={handleSubmit}>
                <label htmlFor="id">Unique Id</label>
                <input
                    type="text"
                    name="id"
                    id="id"
                    value={addData.id}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={addData.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={addData.description}
                    onChange={handleChange}
                    required
                />
                {loading ? (
                    <span className="loader"></span>
                ) : (
                    <button type='submit'>Submit</button>
                )}


            </form>
        </div>
    );
}
