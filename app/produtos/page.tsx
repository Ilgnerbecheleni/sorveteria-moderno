"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const produtos = [
  { id: 1, nome: "Sorvete de Chocolate", preco: 12.0, categoria: "Sorvetes", estoque: 50 },
  { id: 2, nome: "Sorvete de Morango", preco: 12.0, categoria: "Sorvetes", estoque: 45 },
  { id: 3, nome: "Sorvete de Baunilha", preco: 12.0, categoria: "Sorvetes", estoque: 40 },
  { id: 4, nome: "Açaí com Banana", preco: 15.0, categoria: "Açaí", estoque: 30 },
  { id: 5, nome: "Açaí com Morango", preco: 15.0, categoria: "Açaí", estoque: 25 },
  { id: 6, nome: "Milk Shake de Chocolate", preco: 18.0, categoria: "Milk Shakes", estoque: 35 },
  { id: 7, nome: "Milk Shake de Morango", preco: 18.0, categoria: "Milk Shakes", estoque: 30 },
  { id: 8, nome: "Sundae de Caramelo", preco: 14.0, categoria: "Sundaes", estoque: 20 },
  { id: 9, nome: "Sundae de Chocolate", preco: 14.0, categoria: "Sundaes", estoque: 25 },
]

export default function ProdutosPage() {
  const [busca, setBusca] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  const produtosFiltrados = busca
    ? produtos.filter(
        (p) =>
          p.nome.toLowerCase().includes(busca.toLowerCase()) || p.categoria.toLowerCase().includes(busca.toLowerCase()),
      )
    : produtos

  return (
    <div className="p-4 md:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Produto</DialogTitle>
              <DialogDescription>Preencha os detalhes do novo produto abaixo.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" placeholder="Nome do produto" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="preco">Preço (R$)</Label>
                  <Input id="preco" type="number" step="0.01" placeholder="0.00" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="estoque">Estoque</Label>
                  <Input id="estoque" type="number" placeholder="0" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="categoria">Categoria</Label>
                <Select>
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sorvetes">Sorvetes</SelectItem>
                    <SelectItem value="acai">Açaí</SelectItem>
                    <SelectItem value="milkshakes">Milk Shakes</SelectItem>
                    <SelectItem value="sundaes">Sundaes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setDialogOpen(false)}>Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Gerenciar Produtos</CardTitle>
          <CardDescription>Gerencie o catálogo de produtos da sua sorveteria.</CardDescription>
          <div className="flex items-center mt-2">
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
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Estoque</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {produtosFiltrados.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell className="font-medium">{produto.nome}</TableCell>
                  <TableCell>{produto.categoria}</TableCell>
                  <TableCell className="text-right">R$ {produto.preco.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{produto.estoque}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

