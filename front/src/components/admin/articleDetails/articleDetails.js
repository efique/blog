import Card from 'react-bootstrap/Card'
import axios from "axios";
import React, { useEffect, useState } from 'react';

const ArticleDetails = ({ match }) => {

    const [article, setArticle] = useState([])

    useEffect(() => {
        axios.get('https://localhost:8000/article/show?id=' + match.params.id).then((response) => setArticle(response.data))
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <div className="test">
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Détails de l'article
                </Card.Header>
                <Card.Body>
                    <Card>
                        <Card.Header>
                            {article.name}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{article.content}</Card.Text>
                            <Card.Text>{article.date}</Card.Text>
                            <Card.Text>{article.category}</Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Body >
            </Card >
        </div>
    );
}

export default ArticleDetails;