import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para o meu amor, Ayane <3",
};

export default function MyLove() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Carta para Você 🌸
        </h2>
        <p className="text-gray-700 mb-6">Querida Ayane (Bê),</p>

        <p className="text-gray-700 mb-6">
          Hoje quero expressar todo o meu amor por você. Assim como estas
          flores, nossa relação continua a florescer e encher nossos dias de
          alegria e cor.
        </p>

        <p className="text-gray-700 mb-6">
          Você é a razão do meu sorriso diário e a luz que ilumina meus dias.
          Cada momento contigo me sinto mais vivo e disposto a batalhar todos os
          dias nessa loucura que se chama a vida. Hoje é o seu dia, mas pra mim
          o seu dia é todo dia, assim como as mulheres que não importante pra
          minha vida, você também é muito importante para mim.
        </p>

        <p className="text-gray-700 mb-6">
          Feliz Dia das Mulheres, meu amor! Que este seja apenas um dos muitos
          dias em que celebramos a mulher incrível que você é.
        </p>

        <p className="text-gray-700">Com todo o meu amor,</p>
        <p className="text-indigo-600 font-semibold">Ramon Xavier</p>
      </div>
    </div>
  );
}
