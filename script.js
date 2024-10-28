/* Reset styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Header style */
header {
    background-color: #f3f4f6;
    padding: 50px;
    text-align: center;
    color: #333;
}
.header-content h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}
.header-content p {
    font-size: 1.2em;
}
.header-content .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    color: white;
    background-color: #007bff;
    border-radius: 5px;
    text-decoration: none;
}

/* Section styles */
section {
    padding: 50px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}
#about, #testimonials, #contact {
    background-color: #f9f9f9;
    margin-bottom: 20px;
    padding: 30px;
    border-radius: 8px;
}

/* Project cards */
.project-cards {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}
.project-card {
    background-color: #fff;
    padding: 20px;
    width: 250px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.project-card img {
    width: 100%;
    border-radius: 10px;
}

/* Form styling */
form {
    display: flex;
    flex-direction: column;
}
form label {
    margin: 10px 0 5px;
}
form input, form textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
form button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: white;
}
footer a {
    color: #ddd;
    text-decoration: none;
    margin: 0 10px;
}
footer a:hover {
    color: #fff;
}