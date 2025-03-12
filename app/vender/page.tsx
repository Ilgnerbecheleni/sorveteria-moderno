"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { IceCream, Minus, Plus, Search, ShoppingCart, Trash2 } from "lucide-react"

const produtos = [
  {
    id: 1,
    nome: "Sorvete de Chocolate",
    preco: 12.0,
    categoria: "sorvetes",
    imagem: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    nome: "Sorvete de Morango",
    preco: 12.0,
    categoria: "sorvetes",
    imagem: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    nome: "Sorvete de Baunilha",
    preco: 12.0,
    categoria: "sorvetes",
    imagem: "/placeholder.svg?height=80&width=80",
  },
  { id: 4, nome: "Açaí com Banana", preco: 15.0, categoria: "acai", imagem: "/placeholder.svg?height=80&width=80" },
  { id: 5, nome: "Açaí com Morango", preco: 15.0, categoria: "acai", imagem: "/placeholder.svg?height=80&width=80" },
  {
    id: 6,
    nome: "Milk Shake de Chocolate",
    preco: 18.0,
    categoria: "milkshakes",
    imagem: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    nome: "Milk Shake de Morango",
    preco: 18.0,
    categoria: "milkshakes",
    imagem: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    nome: "Sundae de Caramelo",
    preco: 14.0,
    categoria: "sundaes",
    imagem: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 9,
    nome: "Sundae de Chocolate",
    preco: 14.0,
    categoria: "sundaes",
    imagem: "/placeholder.svg?height=80&width=80",
  },
]

type ItemCarrinho = {
  id: number
  nome: string
  preco: number
  quantidade: number
  imagem: string
}

export default function VenderPage() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
  const [busca, setBusca] = useState("")

  const produtosFiltrados = busca
    ? produtos.filter((p) => p.nome.toLowerCase().includes(busca.toLowerCase()))
    : produtos

  const adicionarAoCarrinho = (produto: (typeof produtos)[0]) => {
    setCarrinho((prev) => {
      const itemExistente = prev.find((item) => item.id === produto.id)

      if (itemExistente) {
        return prev.map((item) => (item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item))
      } else {
        return [...prev, { ...produto, quantidade: 1 }]
      }
    })
  }

  const removerDoCarrinho = (id: number) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id))
  }

  const alterarQuantidade = (id: number, delta: number) => {
    setCarrinho((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const novaQuantidade = item.quantidade + delta
          return novaQuantidade > 0 ? { ...item, quantidade: novaQuantidade } : item
        }
        return item
      }),
    )
  }

  const totalCarrinho = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)

  return (
    <div className="flex h-full">
      <div className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Vender</h1>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="pl-8 w-full"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="sorvetes">Sorvetes</TabsTrigger>
            <TabsTrigger value="acai">Açaí</TabsTrigger>
            <TabsTrigger value="milkshakes">Milk Shakes</TabsTrigger>
            <TabsTrigger value="sundaes">Sundaes</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {produtosFiltrados.map((produto) => (
                <Card
                  key={produto.id}
                  className="overflow-hidden cursor-pointer hover:border-primary transition-colors"
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <img
                      src={produto.imagem || "/placeholder.svg"}
                      alt={produto.nome}
                      className="h-20 w-20 object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium truncate">{produto.nome}</h3>
                    <p className="text-sm text-muted-foreground mt-1">R$ {produto.preco.toFixed(2)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["sorvetes", "acai", "milkshakes", "sundaes"].map((categoria) => (
            <TabsContent key={categoria} value={categoria} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {produtos
                  .filter((p) => p.categoria === categoria)
                  .map((produto) => (
                    <Card
                      key={produto.id}
                      className="overflow-hidden cursor-pointer hover:border-primary transition-colors"
                      onClick={() => adicionarAoCarrinho(produto)}
                    >
                      <div className="aspect-square bg-muted flex items-center justify-center">
                        <img
                          src={produto.imagem || "/placeholder.svg"}
                          alt={produto.nome}
                          className="h-20 w-20 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium truncate">{produto.nome}</h3>
                        <p className="text-sm text-muted-foreground mt-1">R$ {produto.preco.toFixed(2)}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="hidden md:block w-96 border-l bg-muted/10">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="px-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Carrinho
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-muted-foreground"
                onClick={() => setCarrinho([])}
                disabled={carrinho.length === 0}
              >
                Limpar
              </Button>
            </div>
            <CardDescription>
              {carrinho.length === 0
                ? "Seu carrinho está vazio"
                : `${carrinho.reduce((total, item) => total + item.quantidade, 0)} itens no carrinho`}
            </CardDescription>
          </CardHeader>

          <ScrollArea className="flex-1 px-6">
            {carrinho.length > 0 ? (
              <div className="space-y-4">
                {carrinho.map((item) => (
                  <div key={item.id} className="flex items-start py-2">
                    <div className="h-16 w-16 rounded bg-muted flex items-center justify-center mr-3 flex-shrink-0">
                      <IceCream className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{item.nome}</h4>
                      <p className="text-sm text-muted-foreground">R$ {item.preco.toFixed(2)}</p>
                      <div className="flex items-center mt-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => alterarQuantidade(item.id, -1)}
                          disabled={item.quantidade <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantidade}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => alterarQuantidade(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right ml-2">
                      <p className="font-medium">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 mt-1 text-muted-foreground hover:text-destructive"
                        onClick={() => removerDoCarrinho(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-40 flex flex-col items-center justify-center text-muted-foreground">
                <ShoppingCart className="h-10 w-10 mb-2" />
                <p>Adicione produtos ao carrinho</p>
              </div>
            )}
          </ScrollArea>

          <CardFooter className="flex-col border-t p-6">
            <div className="w-full space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>R$ {totalCarrinho.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>R$ {totalCarrinho.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4" size="lg" disabled={carrinho.length === 0}>
                Finalizar Venda
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

