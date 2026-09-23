
import { Box } from '@/components/ui/box';

import { Button, ButtonText } from '@/components/ui/button';

import { Divider } from '@/components/ui/divider';

import { Heading } from '@/components/ui/heading';

import { Text } from '@/components/ui/text';

import { VStack } from '@/components/ui/vstack';

import { ScrollView } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Details() {

  const router = useRouter();

  const { name } = useLocalSearchParams();

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
            Tela de Detalhes
          </Heading>

          <Text
            size="md"
            className="leading-6 text-gray-600"
          >
            Esta é a rota "/Details" (arquivo app/Details.jsx).
          </Text>

        </VStack>

        <Divider className="my-6 bg-gray-300" />

        {/* Informações */}
        <Box className="rounded-xl bg-white p-5">

          <VStack space="lg">

            <Heading
              size="lg"
              className="font-semibold text-gray-800"
            >
              Informações
            </Heading>

            <Divider className="bg-gray-200" />

            {/* Rota */}
            <VStack space="sm">

              <Text
                size="sm"
                className="font-medium text-gray-700"
              >
                Rota atual
              </Text>

              <Box className="rounded-lg bg-gray-100 p-4">

                <Text
                  size="md"
                  className="text-gray-700"
                >
                  /Details
                </Text>

              </Box>

            </VStack>

            {/* Parâmetro */}
            <VStack space="sm">

              <Text
                size="sm"
                className="font-medium text-gray-700"
              >
                Parâmetro recebido de outra tela
              </Text>

              <Box className="rounded-lg bg-gray-100 p-4">

                <Text
                  size="md"
                  className="font-semibold text-emerald-700"
                >
                  {name ? name : "sem parâmetro"}
                </Text>

              </Box>

            </VStack>

          </VStack>

        </Box>

        {/* Botão voltar */}
        <Box className="mt-6">

          <Button
            size="lg"
            onPress={() => router.back()}
            className="
              rounded-lg
              bg-emerald-600
              data-[active=true]:bg-emerald-700
              data-[hover=true]:bg-emerald-700
            "
          >

            <ButtonText className="font-semibold text-white">
              Voltar
            </ButtonText>

          </Button>

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
