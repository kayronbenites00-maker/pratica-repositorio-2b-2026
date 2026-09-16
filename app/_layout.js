import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {Stack} from "expo-router";

export default function RootLayout() {
    return(
        <GluestackUIProvider mode="light">
        <stack>
            <Stack.Screen name="index" options={{headerTitle:"Pagina Principal"}}/>
            <Stack.Screen name="Details" options={{headerTitle:"Detalhes "}}/>
        </stack>

        </GluestackUIProvider>
    )
    
    
}