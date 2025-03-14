/* General Reset */
body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: radial-gradient(circle, #0f0f0f, #050505);
    color: #fff;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background: #0d0d0d;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    z-index: 999;
}

.nav-menu {
    list-style: none;
    display: flex;
    gap: 30px;
}

.nav-menu a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #66ff66;
}

/* Header Section */
.header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('https://source.unsplash.com/1600x900/?technology,abstract') center/cover no-repeat;
    text-align: center;
    color: rgb(246, 244, 244);
    position: relative;
    overflow: hidden;
}

.header:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
}

.title {
    font-size: 3.5em;
    color: #66ff66;
    text-shadow: 0 0 10px #66ff66;
    z-index: 1;
}

.subtitle {
    font-size: 3.5em;
    color: #66ff66;
    text-shadow: 0 0 10px #66ff66;
    z-index: 1;
}

.subtitle2 {
    font-size: 1.8em;
    color: #f3f8f3;
    text-shadow: 0 0 10px #f6fbf6;
    z-index: 1;
}

.subtitle3 {
    font-size: 1em;
    color: #66ff66;
    text-shadow: 0 0 10px #f6fbf6;
    z-index: 1;
}

/* Section General Styles */
.section {
    padding: 80px 100px;
    text-align: center;
}

.section-title {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #66ff66;
    text-shadow: 0 0 10px #66ff66;
}

/* Experience Cards */
.experience-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.experience-card {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    transition: transform 0.3s;
}

.experience-card:hover {
    transform: translateY(-10px);
}

/* Skills Section */
.skills-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.skills-card {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.skills-card:hover {
    transform: translateY(-10px);
}

/* Neon Green for Technical Skills */
.skills-card:first-child h3 {
    color: #66ff66;
    text-shadow: 0 0 10px #66ff66;
}

.skills-card:first-child ul li {
    color: #fbfbf9;
    text-shadow: 0 0 5px #66ff66;
}

/* Neon Blue for Core Skills */
.skills-card:nth-child(2) h3 {
    color: #66ff66;
    text-shadow: 0 0 10px #66ff66;
}

.skills-card:nth-child(2) ul li {
    color: #fbfbf9;
    text-shadow: 0 0 5px #66ff66;
}


/* Projects */
.project {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px 0;
    transition: transform 0.3s;
}

.project:hover {
    transform: scale(1.05);
}

/* Contact Form */
#contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-shadow: 0 0 10px #66ff66;
}

#contact-form input, 
#contact-form textarea {
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #333;
    color: #66ff66;
    
}

#contact-form button {
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #66ff66;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    text-shadow: 0 0 10px #66ff66;
}

#contact-form button:hover {
    background: #55dd55;
    text-shadow: 0 0 10px #66ff66;
}

/* Animation */
.animate-slide-in {
    animation: slide-in 1s ease forwards;
    opacity: 0;
}

@keyframes slide-in {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.animate-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.animate-fade-in {
    animation: fade-in 2s ease forwards;
    opacity: 0;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.animate-slide-up {
    animation: slide-up 1.5s ease forwards;
    opacity: 0;
}

@keyframes slide-up {
    0% {
        transform: translateY(50%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Image Container */
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background: #000;
    border-radius: 50px;
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.8);;
}



/* Header Layout */
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background: #000;
    color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.text-section {
    max-width: 50%;
}

.image-section {
    flex-shrink: 0;
}



.glowing-image2 {
    width: 50px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 60px rgba(7, 7, 7, 0.8);
    transition: transform 0.3s, box-shadow 0.3s;
    animation: floatUpDown 3s infinite ease-in-out;
}

/* Hover Effect */
.glowing-image2:hover {
    transform: scale(1.1);
    box-shadow: 0 0 80px rgba(0, 255, 0, 1);
}

/* Up-Down Floating Animation */
@keyframes floatUpDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.image-section {
    text-align: center;
    margin: 20px;
}

.glowing-image {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 60px rgba(23, 214, 45, 0.8);
    transition: transform 0.3s, box-shadow 0.3s;
    animation: floatUpDown 3s infinite ease-in-out;
}

/* Hover Effect */
.glowing-image:hover {
    transform: scale(1.1);
    box-shadow: 0 0 80px rgb(245, 247, 245);
}

/* Up-Down Floating Animation */
@keyframes floatUpDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.image-section {
    text-align: center;
    margin: 20px;
}

form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #1e1e2f;
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    color: #fff;
    font-family: Arial, sans-serif;
}

form label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #ccc;
}

form input[type="text"],
form input[type="email"],
form textarea {
    width: 90%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background: #2b2b3d;
    color: #fff;
    resize: vertical;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
}

form input::placeholder,
form textarea::placeholder {
    color: #888;
}

form input:focus,
form textarea:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 255, 150, 0.8);
    background: #323245;
}

form button[type="submit"] {
    width: 100%;
    padding: 10px;
    background: linear-gradient(45deg, #00ff6a, #00c4ff);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
    box-shadow: 0 5px 15px rgba(0, 255, 150, 0.3);
}

form button[type="submit"]:hover {
    background: linear-gradient(45deg, #00c4ff, #00ff6a);
    box-shadow: 0 5px 25px rgba(0, 255, 150, 0.5);
}