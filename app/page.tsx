import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, DollarSign, IceCream, ShoppingCart, TrendingUp, Users } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Hoje, {new Date().toLocaleDateString("pt-BR")}</span>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics">Análise</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 1.452,00</div>
                <p className="text-xs text-muted-foreground">+20.1% em relação a ontem</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+127</div>
                <p className="text-xs text-muted-foreground">+19% em relação a ontem</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produtos Vendidos</CardTitle>
                <IceCream className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 em relação a ontem</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 24,50</div>
                <p className="text-xs text-muted-foreground">+5% em relação a ontem</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Vendas Semanais</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <TrendingUp className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-muted-foreground">Gráfico de vendas semanais</span>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos</CardTitle>
                <CardDescription>Top 5 produtos mais vendidos hoje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sorvete de Chocolate", amount: 42, percent: 12.5 },
                    { name: "Sorvete de Morango", amount: 38, percent: 11.3 },
                    { name: "Açaí com Banana", amount: 35, percent: 10.4 },
                    { name: "Milk Shake de Baunilha", amount: 27, percent: 8.0 },
                    { name: "Sundae de Caramelo", amount: 24, percent: 7.1 },
                  ].map((product) => (
                    <div className="flex items-center" key={product.name}>
                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm font-medium">{product.name}</p>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">{product.amount}</span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <ArrowUpRight className="h-3 w-3 mr-1 text-emerald-500" />
                            {product.percent}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
          <div className="text-center">
            <TrendingUp className="h-16 w-16 mx-auto text-muted" />
            <h3 className="mt-4 text-lg font-medium">Análises Detalhadas</h3>
            <p className="text-muted-foreground">Gráficos e análises detalhadas seriam exibidos aqui</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

