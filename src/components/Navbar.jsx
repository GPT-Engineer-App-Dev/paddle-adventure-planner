import { Box, Flex, Link, Button, useDisclosure, Stack, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold">Kayaking Planner</Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <Link as={RouterLink} to="/" color="white">Home</Link>
            {/* Add more links as needed */}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button
            as={RouterLink}
            to="/login"
            variant="solid"
            colorScheme="teal"
            size="sm"
            mr={4}
          >
            Login
          </Button>
          <Button
            as={RouterLink}
            to="/signup"
            variant="outline"
            colorScheme="teal"
            size="sm"
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose}>Home</Link>
            {/* Add more links as needed */}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;