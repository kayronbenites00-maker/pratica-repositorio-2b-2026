import { Box } from '@/components/ui/box';
import { boxStyle } from '@/components/ui/box/styles';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';

export default function Details(){
  const router = useRouter()
  const {name} = useLocalSearchParams();
  return (
    
    <Box className='flex-1 bg-white p-6'>
      <VStack space='lg'>
    <Text size='2xl'>
      essa é a rota "/Details" (arquivo app/Details.jsx)
    </Text>
    <Divider/>
    <Text size='md'>
      parametro recebido de outra tela:<Text className='font-extrabold text-amber-700'>{name? name : "sem parametro"}</Text>
    </Text>
    <Button size='lg' onPress={()=> router.back()}
      className='bg-emerald-600 data-[active=true]:bg-emerald-500 data-[houver=true]:bg-emerald-700'
      >
      <ButtonText className='font-bold uppercase' >Voltar</ButtonText>
    </Button>

      </VStack>
    </Box>
  )
}
