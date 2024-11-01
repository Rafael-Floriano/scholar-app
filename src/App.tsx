import { Flex, FormControl, FormLabel, Input, Text, Button } from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import User from './interfaces/User';
import { cadastrarUsuario } from './client/ScholarClient';


function App() {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState<User>({
    name: '',
    email: '',
    password: '',
    role: 'string',
    addresses: [ 
      {
        street: '',
        number: '',
        complement: '',
        district: '',
        neighborhood: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
      }
    ]
  });
  

  function verificarCampo(campo?: string): string {
    return campo || "não informado";
  }
  
  const handleSubmit = async () => {
    try {
      const response = await cadastrarUsuario(userData);
      console.log('Usuário cadastrado com sucesso:', response);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Erro ao realizar o cadastro. Tente novamente.');
    }
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: string, addressIndex?: number) => {
    const value = e.target.value;
    if (addressIndex !== undefined) {
      setUserData((prevUser) => {
        const newAddresses = [...prevUser.addresses];
        newAddresses[addressIndex] = { ...newAddresses[addressIndex], [field]: value };
        return { ...prevUser, addresses: newAddresses };
      });
    } else {
      setUserData((prevUser) => ({ ...prevUser, [field]: value }));
    }
  };  

  const nextPage = (e: FormEvent) => {
    e.preventDefault();
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Flex justify="center">
      {page === 1 && (
        <Flex align="center" direction="column" gap="5vh">
          <Text fontSize="5xl">Cadastro de Usuário 🤺</Text>
          <FormControl as="form" width="800px" onSubmit={nextPage}>
            <Flex direction="column" gap="2vh">
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Nome</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: Uncle Bob"
                  required
                  value={userData.name}
                  onChange={(e) => handleInputChange(e, 'name')}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Ex: Clean.arch@gmail.com"
                  required
                  value={userData.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Forneça uma senha forte"
                  required
                  value={userData.password}
                  onChange={(e) => handleInputChange(e, 'password')}
                />
              </Flex>
              <Input type="submit" value="Próxima Página" />
            </Flex>
          </FormControl>
        </Flex>
      )}
      {page === 2 && (
        <Flex align="center" direction="column" gap="1vh">
          <Text fontSize="5xl">Cadastro de Endereço 🏡</Text>
          <FormControl as="form" width="800px" onSubmit={nextPage}>
            <Flex direction="column" gap="1vh">
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Rua</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: Baker Street"
                  value={userData.addresses[0].street}
                  onChange={(e) => handleInputChange(e, 'street', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Número</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: 123"
                  value={userData.addresses[0].number}
                  onChange={(e) => handleInputChange(e, 'number', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Complemento</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: Perto do London Eye"
                  value={userData.addresses[0].complement}
                  onChange={(e) => handleInputChange(e, 'complement', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Distrito</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: Não sei o que é um distrito"
                  value={userData.addresses[0].district}
                  onChange={(e) => handleInputChange(e, 'district', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Bairro</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: Três de Maio"
                  value={userData.addresses[0].neighborhood}
                  onChange={(e) => handleInputChange(e, 'neighborhood', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Cidade</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: Tubarão"
                  value={userData.addresses[0].city}
                  onChange={(e) => handleInputChange(e, 'city', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Estado</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: SC, SP e etc"
                  value={userData.addresses[0].state}
                  onChange={(e) => handleInputChange(e, 'state', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">País</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: Brazil"
                  value={userData.addresses[0].country}
                  onChange={(e) => handleInputChange(e, 'country', 0)}
                />
              </Flex>
              <Flex align="start" direction="column">
                <FormLabel textAlign="center">Código Postal</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: 88750-50"
                  value={userData.addresses[0].zipCode}
                  onChange={(e) => handleInputChange(e, 'zipCode', 0)}
                />
              </Flex>
              <Button onClick={() => setPage(3)}>Finalizar Cadastro de usuário</Button>
            </Flex>
          </FormControl>
        </Flex>
      )}
{page === 3 && (
        <Flex align="center" direction="column" gap="2vh">
          <Text fontSize="5xl">Por favor, confirme seus dados</Text>
          <Flex direction="row" gap="5vw">
            <Flex direction="column">
              <Text fontSize='4xl'>Dados de usuário:</Text>
              <Flex direction="column" gap="1.5vh">
                <Text fontSize='2xl'>Seu nome de usuário: {verificarCampo(userData.name)}</Text>
                <Text fontSize='2xl'>Seu Email: {verificarCampo(userData.email)}</Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="1.5vh">
              <Text fontSize='4xl'>Endereços:</Text>
              <Flex gap="5vw">
                <Text fontSize='2xl'>Rua: {verificarCampo(userData.addresses[0].street)}</Text>
                <Text fontSize='2xl'>Número: {verificarCampo(userData.addresses[0].number)}</Text>
                <Text fontSize='2xl'>Complemento: {verificarCampo(userData.addresses[0].complement)}</Text>
              </Flex>
              <Flex gap="5vw">
                <Text fontSize='2xl'>Distrito: {verificarCampo(userData.addresses[0].district)}</Text>
                <Text fontSize='2xl'>Bairro: {verificarCampo(userData.addresses[0].neighborhood)}</Text>
                <Text fontSize='2xl'>Cidade: {verificarCampo(userData.addresses[0].city)}</Text>
              </Flex>
              <Flex gap="5vw">
                <Text fontSize='2xl'>Estado: {verificarCampo(userData.addresses[0].state)}</Text>
                <Text fontSize='2xl'>País: {verificarCampo(userData.addresses[0].country)}</Text>
                <Text fontSize='2xl'>Código Postal: {verificarCampo(userData.addresses[0].zipCode)}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Button mt="5vh" colorScheme="teal" onClick={handleSubmit}>Finalizar Cadastro</Button>
        </Flex>
      )}
    </Flex>
  );
}

export default App;
