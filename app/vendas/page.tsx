import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, Eye, MoreHorizontal, Search } from "lucide-react"

export default function VendasPage() {
  return (
    <div className="p-4 md:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Vendas</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Histórico de Vendas</CardTitle>
          <CardDescription>Visualize e gerencie todas as vendas realizadas.</CardDescription>
          <div className="flex items-center mt-2">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar vendas..." className="pl-8 w-full" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Itens</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: "V-1001", data: "12/03/2025 14:30", itens: 5, status: "Concluída", total: 75.5 },
                { id: "V-1000", data: "12/03/2025 13:15", itens: 3, status: "Concluída", total: 42.0 },
                { id: "V-0999", data: "12/03/2025 12:45", itens: 2, status: "Concluída", total: 24.0 },
                { id: "V-0998", data: "12/03/2025 11:20", itens: 4, status: "Concluída", total: 56.0 },
                { id: "V-0997", data: "11/03/2025 18:30", itens: 6, status: "Concluída", total: 87.0 },
                { id: "V-0996", data: "11/03/2025 17:15", itens: 2, status: "Concluída", total: 30.0 },
                { id: "V-0995", data: "11/03/2025 16:40", itens: 3, status: "Concluída", total: 45.0 },
                { id: "V-0994", data: "11/03/2025 15:10", itens: 1, status: "Concluída", total: 12.0 },
                { id: "V-0993", data: "11/03/2025 14:25", itens: 4, status: "Concluída", total: 60.0 },
                { id: "V-0992", data: "10/03/2025 19:05", itens: 5, status: "Concluída", total: 72.5 },
              ].map((venda) => (
                <TableRow key={venda.id}>
                  <TableCell className="font-medium">{venda.id}</TableCell>
                  <TableCell>{venda.data}</TableCell>
                  <TableCell>{venda.itens}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      {venda.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">R$ {venda.total.toFixed(2)}</TableCell>
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
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Baixar Comprovante
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

