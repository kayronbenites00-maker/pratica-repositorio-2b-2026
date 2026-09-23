
import { Box } from '@/components/ui/box';

import { Button, ButtonText } from '@/components/ui/button';

import { Center } from '@/components/ui/center';

import { Divider } from '@/components/ui/divider';

import { Heading } from '@/components/ui/heading';

import { Text } from '@/components/ui/text';

import { VStack } from '@/components/ui/vstack';

import { ScrollView } from 'react-native';

import { Link, useRouter } from 'expo-router';

export default function home() {

  const router = useRouter();

  return (

    <ScrollView
      className="flex-1 bg-gray-100"
      showsVerticalScrollIndicator={false}
    >

      <Box className="px-6 py-8">

        {/* Título */}
        <VStack space="md">

          <Heading
            size="2xl"
            className="font-bold text-gray-900"
          >
            Tela Inicial
          </Heading>

          <Text
            size="md"
            className="leading-6 text-gray-600"
          >
            Esta é a rota "/" (arquivo app/home.jsx).
          </Text>

          <Text
            size="md"
            className="leading-6 text-gray-600"
          >
            Os botões abaixo levam para a tela de detalhes,
            usando diferentes formas de navegação do Expo Router.
          </Text>

        </VStack>

        <Divider className="my-6 bg-gray-300" />

        {/* Área dos botões */}
        <Box className="rounded-xl bg-white p-5">

          <VStack space="lg">

            <Heading
              size="lg"
              className="font-semibold text-gray-800"
            >
              Navegação
            </Heading>

            <Text
              size="sm"
              className="text-gray-500"
            >
              Escolha uma opção para continuar.
            </Text>

            <Divider className="bg-gray-200" />

            {/* Link */}
            <VStack space="sm">

              <Text
                size="sm"
                className="font-medium text-gray-700"
              >
                Link
              </Text>

              <Link href="/Details" asChild>

                <Button
                  size="lg"
                  className="
                    rounded-lg
                    bg-emerald-600
                    data-[active=true]:bg-emerald-700
                    data-[hover=true]:bg-emerald-700
                  "
                >

                  <ButtonText className="font-semibold text-white">
                    Ir com o Link
                  </ButtonText>

                </Button>

              </Link>

            </VStack>

            {/* Router Push */}
            <VStack space="sm">

              <Text
                size="sm"
                className="font-medium text-gray-700"
              >
                Router Push
              </Text>

              <Button
                size="lg"
                onPress={() => router.push("/Details")}
                className="
                  rounded-lg
                  bg-gray-800
                  data-[active=true]:bg-gray-900
                  data-[hover=true]:bg-gray-900
                "
              >

                <ButtonText className="font-semibold text-white">
                  Ir com router.push
                </ButtonText>

              </Button>

            </VStack>

            <Center>
              <Divider className="w-16 bg-gray-300" />
            </Center>

            {/* Parâmetro */}
            <VStack space="sm">

              <Text
                size="sm"
                className="font-medium text-gray-700"
              >
                Enviar parâmetro
              </Text>

              <Text
                size="sm"
                className="leading-5 text-gray-500"
              >
                Envia o valor "2° INfoxx" para a tela Details.
              </Text>

              <Button
                size="lg"
                variant="outline"
                onPress={() =>
                  router.push({
                    pathname: "/Details",
                    params: {
                      name: "2° INfoxx"
                    }
                  })
                }
                className="
                  rounded-lg
                  border-gray-400
                  bg-white
                  data-[active=true]:bg-gray-100
                "
              >

                <ButtonText className="font-semibold text-gray-700">
                  Enviar parâmetro
                </ButtonText>

              </Button>

            </VStack>

          </VStack>

        </Box>

        {/* Espaço para rolagem */}
        <Box className="h-32" />

        <Text
          size="xs"
          className="pb-6 text-center text-gray-400"
        >
          Expo Router
        </Text>

      </Box>

    </ScrollView>

  );
}

