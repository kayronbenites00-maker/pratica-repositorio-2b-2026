import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';

export default function home(){
  return (
    <>
    <Text>Pagina principal</Text>
    <Link href='/Details'>Detalhes</Link>
    </>
  )
}
