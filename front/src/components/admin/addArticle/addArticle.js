import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddArticle = ({ match, history }) => {

    const [data, setData] = useState({
        name: '', content: '', date: '', category: ''
    })

    const [label, setLabel] = useState({
        button: ''
    })

    const onChange = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataInput = {
            name: data.name, content: data.content, date: data.date, category: data.category
        }
        if (match.params.id != null) {
            axios.post("https://localhost:8000/article/" + match.params.id + "/edit", dataInput)
                .then((result) => {
                    console.log(result.data);
                    console.log(result.gender);
                    history.push('/admin/listArticles')
                })
        } else {
            axios.post("https://localhost:8000/article/new", dataInput)
                .then((result) => {
                    console.log(result.data);
                    console.log(result.gender);
                    history.push('/admin/listArticles')
                })
        }
    }

    React.useEffect(() => {
        setLabel({ button: "Créer" })
        if (match.params.id != null) {
            setLabel({ button: "Modifier" })
            axios.get('https://localhost:8000/article/show?id=' + match.params.id).then(res => {
                setData({
                    name: res.data.name,
                    content: res.data.content,
                    date: res.data.date,
                    category: res.data.category
                })
            }).catch((error) => { console.log(error) })
        }
    }, []
    );

    return (
        <div>
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    {label.button} l'article
                </Card.Header>
                <Card.Body>
                    <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nom*</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Name" required onChange={onChange} value={data.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date de publication*</Form.Label>
                            <Form.Control name="date" type="text" placeholder="Date" onChange={onChange} value={data.date} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Categorie*</Form.Label>
                            <Form.Control name="category" type="text" placeholder="category" onChange={onChange} value={data.category} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contenu de l'article</Form.Label>
                            <Form.Control as="textarea" rows={3} name="content" required placeholder="... Contenu de votre article ..." onChange={onChange} value={data.content} />
                        </Form.Group>

                        <Button type="submit" className="buttonRegisterValidation mb-2 w-50">
                            {label.button} l'article
                        </Button>
                    </Form>
                </Card.Body >
            </Card >
        </div >

    );
}

export default AddArticle;