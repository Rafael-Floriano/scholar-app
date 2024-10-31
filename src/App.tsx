import { Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(1);

  const nextPage = (event) => {
    event.preventDefault();
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Flex justify="center">
      {
        page === 1 && (
          <Flex align="center" direction="column" gap="5vh">
            <Text fontSize='5xl'>Cadastro de Usuário 🤺</Text>
            <FormControl as="form" width="800px" onSubmit={nextPage}>
              <Flex direction="column" gap="2vh">
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Nome</FormLabel>
                  <Input type='text' placeholder="Ex: Uncle Bob" required />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Email</FormLabel>
                  <Input type='email' placeholder="Ex: Clean.arch@gmail.com" required />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Senha</FormLabel>
                  <Input type='password' placeholder="Forneça uma senha forte" required />
                </Flex>
                <Input type="submit" value="Próxima Página" />
              </Flex>
            </FormControl>
          </Flex>
        )
      }
      {
        page > 1 && (
          <Flex align="center" direction="column" gap="1vh">
            <Text fontSize='5xl'>Cadastro de Endereço 🏡</Text>
            <FormControl as="form" width="800px" onSubmit={nextPage}>
              <Flex direction="column" gap="1vh">
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Rua</FormLabel>
                  <Input type='text' placeholder="Ex: Baker Street" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Número</FormLabel>
                  <Input type='text' placeholder="Ex: 123" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Complemento</FormLabel>
                  <Input type='text' placeholder="Ex: Perto do london eye" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Distrito</FormLabel>
                  <Input type='text' placeholder="Ex: Não sei o que é um distrito" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Bairro</FormLabel>
                  <Input type='text' placeholder="Ex: Três de Maio" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Cidade</FormLabel>
                  <Input type='text' placeholder="Ex: Tubarão" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Estado</FormLabel>
                  <Input type='text' placeholder="Ex: SC, SP e etc" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">País</FormLabel>
                  <Input type='text' placeholder="Ex: Brazil" />
                </Flex>
                <Flex align="start" direction="column">
                  <FormLabel textAlign="center">Código Postal</FormLabel>
                  <Input type='text' placeholder="Ex: 88750-50" />
                </Flex>
                <Input type="submit" value="Finalizar Cadastro de usuário" />
                <Input type="submit" value="Adicionar outro endereço" />
              </Flex>
            </FormControl>
          </Flex>
        )
      }
    </Flex>
  );
}

export default App;
