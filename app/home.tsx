import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Link, useRouter } from 'expo-router';

export default function home(){
  const router = useRouter();


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
        <Divider />
        

        <Button 
        size="lg" 
        onPress={()=> router.push("/Details")}
          >
      <ButtonText>Ir com router.push</ButtonText>
        </Button>
        <Divider />
        <Button
        size='lg'
        variant='outline'
        onPress={()=>
          router.push({
            pathname:"/detains",
            params:{name: 'KayronBB'}
          })
        }
        >
          <ButtonText>Ir enviado um parametro</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}
