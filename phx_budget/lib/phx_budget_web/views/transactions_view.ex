defmodule PhxBudget.TransactionsView do
  use PhxBudgetWeb, :view

  def render("index.json", %{transactions: transactions}) do
  %{
      transactions: Enum.map(transactions, &transactions_json/1)
   }
 end

 def render("show.json", %{transaction: transaction}) do
   %{
    transaction: transactions_json(transaction)
    }
end

 def transactions_json(transaction) do
  %{
     category: transaction.category,
     name: transaction.name,
     amount: transaction.amount,
     id: transaction.id
  }
  end
end
