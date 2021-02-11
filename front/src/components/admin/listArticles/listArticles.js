import axios from "axios";
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import './listArticles.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const ListArticles = ({ history }) => {

    const [refreshKey, setRefreshKey] = useState(0);

    let [articles, setArticle] = useState([])

    useEffect(() => {
        console.log(refreshKey)
        axios.get('https://localhost:8000/article')
            .then(response => {
                setArticle(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, [refreshKey]);

    function handleDelete(id) {
        axios.delete('https://localhost:8000/article/' + id).then(res => {
            setRefreshKey(oldKey => oldKey + 1);
            history.push('/admin/listArticles')
        })
    }

    return (

        <div>
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Nos articles
        </Card.Header>
                <Card.Body>
                    <div className="mx-auto my-4">
                        <Button className="addarticle mx-2 p-3" href="/admin/addArticle">+ Ajouter un article</Button>
                    </div>
                    <Table striped hover className="px-5">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Nom</td>
                                <td>Contenu</td>
                                <td>Date de publication</td>
                                <td>Catégorie</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(article => (
                                <tr key={article.id}>
                                    <td>{article.id}</td>
                                    <td>{article.name}</td>
                                    <td className="text-justify">{article.content}</td>
                                    <td>{article.date}</td>
                                    <td>{article.category}</td>
                                    <td><Button className="updatearticle mx-2 p-3" href={`/admin/addArticle/${article.id}`}>Modifier</Button></td>
                                    <td><Button className="addarticle mx-2 p-3" onClick={() => handleDelete(article.id)}>Supprimer</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body >
            </Card >
        </div >

    );
}

export default ListArticles;