/* styles.css */

body {
    background-color: #f8f8f8;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.book-library {
    background-color: #ffffff;
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.book {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 200px;
    text-align: center;
}

.book img {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.book h2 {
    font-size: 1.2em;
    margin: 10px 0;
}

.author {
    color: #777777;
    font-size: 0.9em;
    margin: 5px 0;
}

.price {
    color: #2ecc71;
    font-size: 1.1em;
    margin: 5px 0;
}
