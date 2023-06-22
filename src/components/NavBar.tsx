'use client';

import React, { useRef } from 'react';
import {
  Box,
  Link,
  HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
  Image,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

import chatterLogo from '../../public/assets/images/logo/chatter.png';
import PrimaryButtonComponent from './PrimaryButtonComponent';
import SecondaryButtonComponent from './SecondaryButtonComponent';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef(null);

  const invisibleOnMobile = {
    base: 'none',
    sm: 'none',
    md: 'none',
    lg: 'flex',
    xl: 'flex',
    '2xl': 'flex',
  };

  return (
    <Box width="100vw" display="flex" justifyContent="center">
      <HStack
        w={{ base: '90%', lg: '90%', xl: '90%', '2xl': '60%' }}
        height="98px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Image src={chatterLogo.src} alt="Chatter Logo" width={{ base: '120px', lg: '180px' }} />
        </Box>

        <HStack gap="1.5rem" display={invisibleOnMobile}>
          <Link
            as={NextLink}
            href="/"
            textDecoration="none"
            color="#111111"
            fontWeight="700"
            _hover={{ color: '#543EE0' }}
          >
            Home
          </Link>

          <Link
            as={NextLink}
            href="/about"
            textDecoration="none"
            color="#111111"
            fontWeight="700"
            _hover={{ color: '#543EE0' }}
          >
            About us
          </Link>

          <Link
            as={NextLink}
            href="/contact"
            textDecoration="none"
            color="#111111"
            fontWeight="700"
            _hover={{ color: '#543EE0' }}
          >
            Contact
          </Link>

          <Link
            as={NextLink}
            href="/blogs"
            textDecoration="none"
            color="#111111"
            fontWeight="700"
            _hover={{ color: '#543EE0' }}
          >
            Blogs
          </Link>
        </HStack>

        <HStack gap="1.5rem" display={invisibleOnMobile}>
          <SecondaryButtonComponent text="Log in" link="/signup" width="9rem" height="3rem" />

          <PrimaryButtonComponent text="Sign up" link="/signup" width="9rem" height="3rem" />
        </HStack>

        <Box
          ref={navRef}
          onClick={onOpen}
          display={{
            base: 'flex',
            sm: 'flex',
            md: 'flex',
            lg: 'none',
            xl: 'none',
            '2xl': 'none',
          }}
        >
          <HamburgerIcon boxSize={8} />
        </Box>
      </HStack>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        initialFocusRef={navRef}
        size="full"
      >
        <DrawerOverlay />

        <DrawerContent>
          <Box>
            <DrawerHeader>
              <Box>
                <Image src={chatterLogo.src} alt="Chatter Logo" width="7.5rem" mt="0.5rem" />
              </Box>
            </DrawerHeader>

            <DrawerCloseButton
              fontSize="1.2rem"
              marginTop={2.5}
              color="#292F2E"
              fontWeight="bold"
            />
          </Box>

          <DrawerBody display="flex" flexDir="column" justifyContent="center" gap="4rem">
            <VStack spacing="24px">
              <Link
                as={NextLink}
                href="/"
                textDecoration="none"
                color="#111111"
                fontWeight="700"
                _hover={{ color: '#543EE0' }}
              >
                Home
              </Link>

              <Link
                as={NextLink}
                href="/about"
                textDecoration="none"
                color="#111111"
                fontWeight="700"
                _hover={{ color: '#543EE0' }}
              >
                About us
              </Link>

              <Link
                as={NextLink}
                href="/contact"
                textDecoration="none"
                color="#111111"
                fontWeight="700"
                _hover={{ color: '#543EE0' }}
              >
                Contact
              </Link>

              <Link
                as={NextLink}
                href="/blogs"
                textDecoration="none"
                color="#111111"
                fontWeight="700"
                _hover={{ color: '#543EE0' }}
              >
                Blogs
              </Link>
            </VStack>

            <VStack gap="1.5rem">
              <NextLink href="/signup" passHref>
                <Button
                  color="#111"
                  borderColor="#543EE0"
                  variant="outline"
                  size="lg"
                  width="9rem"
                  height="3rem"
                  _hover={{ backgroundColor: '#f0eeff' }}
                >
                  Log in
                </Button>
              </NextLink>

              <NextLink href="/signup" passHref>
                <Button
                  variant="solid"
                  backgroundColor="#543EE0"
                  color="#FFF"
                  size="lg"
                  width="9rem"
                  height="3rem"
                  _hover={{ backgroundColor: '#7a67f4' }}
                >
                  Sign up
                </Button>
              </NextLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
