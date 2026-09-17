import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Link } from 'expo-router';

export default function home(){
  return (
    <Box className='flex-1 bg-white p-6'>
      <VStack space="lg">
    <Heading size='xl'>Tela Inicial</Heading>
    <Text size='md'>
    esta é a rota "/" (arquivo app/home.jsx). Os botões abaixo levam para a mesma tela de detalhes,
    usando as formas de navegação do expo-router.
    </Text>
    <Divider />
    <Link href="/Details" asChild>
    <Button size='lg'>
      <ButtonText>Ir com o link (declarativo)</ButtonText>
    </Button>
    </Link>
        
      </VStack>

    </Box>
  )
}
