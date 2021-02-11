import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './home.css';

const Home = () => {
    let [articles, setArticle] = useState([])

    useEffect(() => {
        axios.get('https://localhost:8000/article')
            .then(response => {
                console.log(response.data);
                setArticle(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <Card className="w-50 mx-auto my-4 shadow-lg bg-white rounded ">
            <Card.Header as="h3" className="titleCard text-center">
                Bienvenue sur notre Blog !
        </Card.Header>
            <Card.Body>
                {articles.map(article => (
                    <Card key={article.id} className="my-4 shadow bg-white rounded cardListConcert text-center concert__card" >
                        < Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Text as="h3">{article.name}</Card.Text>
                            <Card.Text className="text-justify mx-3">{article.content}</Card.Text>
                            <Card.Text>{article.date}</Card.Text>
                            <Card.Text>{article.category}</Card.Text>
                            <Card.Link href={`/admin/articleDetails/${article.id}`} className="btn btnDetail">Voir l'article complet</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </Card.Body >
        </Card >
    );
}

export default Home;