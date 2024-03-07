import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function ProdutosScreen() {
  const [produtos, setProdutos] = useState([]);

  useEffect(
    () => {
      fetchProduts();
    },
    [] // o array vazio indica que a função será executada apenas uma vez, quando o componente for montado
  );

  const fetchProduts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setProdutos(await data.products);
  };

  return (
    <View>
      <Text>Produtos</Text>
      {produtos.length === 0 ? (
        <Text>Carregando...</Text>
      ) : (
        // função map para percorrer o array de produtos e exibir o nome de cada um
        // a função map retorna um novo array com o resultado da função passada para cada item do array
        produtos.map((produto) => (
          <View key={produto.id}>
            <Image
              source={{ uri: produto.images[0] }}
              style={{ width: 50, height: 50 }}
            />
            <Text>{produto.title}</Text>
          </View>
        ))
      )}
    </View>
  );
}
