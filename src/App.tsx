import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Navigator } from "./router"

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60, // 1 minuto
      },
    },
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  )
}

export default App
