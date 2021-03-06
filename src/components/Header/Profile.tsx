import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Arthur Gramm</Text>
          <Text color="gray.300" fontSize="small">
            arthurgramm@outlook.com.br
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Arthur Gramm" src="https://github.com/grammarthurf.png" />
    </Flex>
  );
}