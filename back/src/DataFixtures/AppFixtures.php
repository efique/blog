<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $article1 = new Article();
        $article2 = new Article();
        $article3 = new Article();
        $article4 = new Article();
        $article5 = new Article();

        $article1->setName("Bienvenue à LicorneLand");
        $article1->setContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tempor erat. Phasellus sem metus, cursus at urna vel, condimentum pharetra lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas at dui volutpat, malesuada leo et, finibus nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultricies sem eu rutrum pharetra. Sed hendrerit at ipsum quis interdum. Donec porttitor nulla vel ipsum lobortis, at placerat ex tincidunt. Ut eu nisl eros. Praesent pharetra blandit ex non placerat. Sed ac lectus eu turpis facilisis bibendum. Maecenas convallis elementum nulla, vel efficitur ex eleifend vel. Nulla sit amet lacinia nisi. Aliquam pretium magna eu quam facilisis, vitae semper nisl blandit. Mauris velit nisl, accumsan quis faucibus vel, consequat sit amet augue. Cras egestas suscipit placerat. Cras ultricies ac arcu in blandit. Aliquam id odio eu eros eleifend sodales. Donec nec lectus mattis, porta ex a, lobortis justo. Phasellus in rhoncus dolor, quis malesuada dui. Nullam quis leo sem. Quisque eu enim commodo, suscipit risus non, vehicula velit. Morbi ut orci sit amet neque tincidunt tempor. Aliquam vehicula pellentesque eros, ut mattis elit fringilla non. Integer nec metus ut risus faucibus malesuada. Pellentesque suscipit felis odio, ullamcorper vulputate nisl imperdiet sed. Proin nibh lectus, sagittis ut efficitur et, molestie et lectus.");
        $article1->setCategory("Licorne");
        $article1->setDate("1998-05-10");

        $article2->setName("Paris en cendre");
        $article2->setContent("Morbi nec lectus vestibulum, pharetra quam in, malesuada elit. Morbi tincidunt feugiat purus, ut rutrum dolor ultrices at. Phasellus nec euismod quam, quis sollicitudin risus. Mauris faucibus magna vitae mauris convallis, vel pharetra felis cursus. Nunc at posuere erat. Etiam ultricies risus id orci fringilla porta. Fusce eu egestas massa. Aenean efficitur vitae mi sodales hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque dui. Etiam nec tincidunt metus. Morbi volutpat sem at arcu hendrerit, in accumsan nisi egestas. Curabitur congue lectus faucibus lectus pretium euismod. Mauris rhoncus, felis mollis lacinia pretium, nulla tellus pharetra eros, eget lobortis nisi arcu vitae augue. Curabitur in aliquet augue.");
        $article2->setCategory("Actualité");
        $article2->setDate("2005-08-09");

        $article3->setName("Les mouches qui tuent");
        $article3->setContent("Donec sit amet mi blandit, accumsan nulla ut, convallis metus. Morbi congue tincidunt arcu, non iaculis ante cursus a. Praesent tristique lacus ac imperdiet pretium. Morbi sit amet risus tempus, egestas diam ut, sollicitudin orci. Sed sit amet consectetur erat. Donec eu turpis sed eros sollicitudin bibendum. Proin in molestie mi. Pellentesque condimentum massa sed diam volutpat, a feugiat massa placerat. Etiam sed purus ut purus pharetra porttitor ut vitae metus. Suspendisse fermentum urna quis bibendum tempus. Etiam consequat a nibh sed suscipit.");
        $article3->setCategory("Meurtre");
        $article3->setDate("2006-12-06");

        $article4->setName("La Chine déclare les petits pois à moitié prix");
        $article4->setContent("Ut eu nisl eros. Praesent pharetra blandit ex non placerat. Sed ac lectus eu turpis facilisis bibendum. Maecenas convallis elementum nulla, vel efficitur ex eleifend vel. Nulla sit amet lacinia nisi. Aliquam pretium magna eu quam facilisis, vitae semper nisl blandit. Mauris velit nisl, accumsan quis faucibus vel, consequat sit amet augue. Cras egestas suscipit placerat. Cras ultricies ac arcu in blandit.");
        $article4->setCategory("Inflation");
        $article4->setDate("2016-11-10");

        $article5->setName("Ceci est un prank");
        $article5->setContent("Aliquam id odio eu eros eleifend sodales. Donec nec lectus mattis, porta ex a, lobortis justo. Phasellus in rhoncus dolor, quis malesuada dui. Nullam quis leo sem. Quisque eu enim commodo, suscipit risus non, vehicula velit. Morbi ut orci sit amet neque tincidunt tempor. Aliquam vehicula pellentesque eros, ut mattis elit fringilla non. Integer nec metus ut risus faucibus malesuada. Pellentesque suscipit felis odio, ullamcorper vulputate nisl imperdiet sed. Proin nibh lectus, sagittis ut efficitur et, molestie et lectus.");
        $article5->setCategory("Prank");
        $article5->setDate("2300-01-04");
        
        $manager->persist($article1);
        $manager->persist($article2);
        $manager->persist($article3);
        $manager->persist($article4);
        $manager->persist($article5);

        $manager->flush();
    }
}
