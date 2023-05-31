// See https://aka.ms/new-console-template for more information

const double desconto = 60.0/100;
double produtoComDesconto;
double valorDesconto;

Console.WriteLine("Qual o valor do produto desejado");

double valorProduto = Convert.ToDouble(Console.ReadLine());

produtoComDesconto = Math.Round(valorProduto - (valorProduto*desconto),2);
valorDesconto = Math.Round(valorProduto*desconto,2);

Console.WriteLine($"Produto Custava: {valorProduto}");
Console.WriteLine($"Produto com o desconto: {produtoComDesconto}");
Console.WriteLine($"Valor do desconto: {valorDesconto}");