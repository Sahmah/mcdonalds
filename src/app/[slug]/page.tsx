import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { db } from "@/lib/prisma";

import Image from "next/image";
import { notFound } from "next/navigation"; 

import ConsumptionMethodOption from "./components/comsumption-method-option";


interface RestaurantPageProps {
    params: Promise<{ slug: string }>;
}


const RestaurantPage =  async ({params}: RestaurantPageProps) => { //async é o que permite fazer requisições para a API do Strapi (CMS)
    const { slug } = await params;
    const restaurant = await getRestaurantBySlug(slug); //Faz a requisição para a API do Strapi
    if (!restaurant) {
        return notFound();
    }
    return( 
        <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      {/* BEM VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          buttonText="Para comer aqui"
          imageAlt="Comer aqui"
          imageUrl="/dine_in.png"
        />
        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
    );
};



export default RestaurantPage;

//Quando a pasta tem o nome entre colchetes, o Next.js entende que é uma rota dinâmica
//Recebendo o slug como parâmetro, podemos fazer uma requisição para a API do Strapi para buscar os dados do restaurante
//CSM é software que permite criar, editar, organizar e publicar conteúdo na web
//Quando é async não se pode usar hooks do React, como useState, useEffect, ou seja, interatividade
//Só se tem interatividade quando for um client component, ou seja, quando for um componente que é renderizado no lado do cliente
