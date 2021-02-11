<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/article")
 */
class ArticleController extends AbstractController
{
    /**
     * @Route("/", name="article_index", methods={"GET"})
     */
    public function index(ArticleRepository $articleRepository): Response
    {
        $response = new Response();

        $serializer = $this->container->get('serializer');
        $json = $serializer->serialize($articleRepository->findAll(), 'json', ['groups' => ['article']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/new", name="article_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $response = new Response();

        $serializer = $this->container->get('serializer');
        
        $article = new Article();
        $form = $this->createForm(ArticleType::class, $article);
        
        $data=json_decode($request->getContent(),true);
        $form->submit($data);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($article);
        $entityManager->flush();

        $json = $serializer->serialize($data, 'json', ['groups' => ['article']]);
        
        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/show", name="article_show", methods={"GET"})
     */
    public function show(ArticleRepository $articleRepository, Request $request): Response
    {
        $response = new Response();

        $serializer = $this->container->get('serializer');
        $json = $serializer->serialize($articleRepository->find(["id" => $request->query->get('id')]), 'json', ['groups' => ['article']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/{id}/edit", name="article_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Article $article): Response
    {
        $form = $this->createForm(ArticleType::class, $article);
        $data=json_decode($request->getContent(),true);
        $form->submit($data);

        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('article_index');
    }

    /**
     * @Route("/{id}", name="article_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Article $article): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($article);
        $entityManager->flush();

        return $this->redirectToRoute('article_index');
    }
}
