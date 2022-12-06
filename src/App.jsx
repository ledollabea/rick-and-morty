import { QueryClient, QueryClientProvider } from "react-query"
import './App.css'
import Main from "./components/main"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}

export default App
