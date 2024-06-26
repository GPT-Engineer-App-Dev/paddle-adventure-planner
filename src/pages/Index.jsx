import { Container, Text, VStack, Heading, Image } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Kayaking in Sollenkroka, Värmdö</Heading>
        <Text fontSize="lg">Plan your perfect kayaking trip starting from Sollenkroka, Värmdö.</Text>
        <Image src="/images/kayakers.jpg" alt="Kayakers" borderRadius="md" />
        <Map />
      </VStack>
    </Container>
  );
};

export default Index;