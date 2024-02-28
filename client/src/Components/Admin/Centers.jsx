import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Centers.css";
import { useNavigate } from "react-router-dom";

const Centers = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("https://cowinup.onrender.com/vaccine");
                console.log(res.data);
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://cowinup.onrender.com/vaccine/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <div className="header">
                <h1 className="title">Welcome, Admin:) </h1>
                <Link to="/admin"><button className="logout-btn" >
                    Logout
                </button>
                </Link>
            </div>
            <div className="admin-dashboard">


                <button className="add-btn">
                    <Link to="/add" className="add-link">
                        Add Center
                    </Link>
                </button>
                <br></br>
                <div className="books-container">
                    {books.map((book) => (
                        <div key={book.id} className="book">
                            <h2 className="book-title">Center : {book.center}</h2>
                            <p className="book-desc"><strong>Address : </strong>{book.address}</p>
                            <span className="book-price"><strong>Slots Available : </strong> {book.slots}</span>
                            <p className="book-desc"><strong>Issue Date : </strong>{book.issue_date}</p>
                            <button className="delete-btn" onClick={() => handleDelete(book.id)}>
                                Delete
                            </button>
                            <button className="update-btn">
                                <Link
                                    to={`/update/${book.id}`}
                                    className="update-link"
                                >
                                    Update
                                </Link>
                            </button>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Centers;
