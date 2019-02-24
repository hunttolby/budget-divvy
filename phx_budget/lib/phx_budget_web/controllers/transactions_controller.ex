defmodule PhxBudget.TransactionsController do
  use PhxBudgetWeb, :controller

  alias PhxBudget.Repo
  alias PhxBudget.Transactions

  def index(conn, _params) do
    transactions = Repo.all(Transactions)
    render conn, "index.json", transactions: transactions
  end

  def create(conn, %{"transactions" => transactions_params}) do
    changeset = Transactions.changeset(%Transactions{}, transactions_params)
    case Repo.insert(changeset) do
      {:ok, _transactions} ->
        transactions = Repo.all(Transactions)
        render conn, "index.json", transactions: transactions
      end
  end

  def show(conn, %{"id" => id}) do
    transaction = Repo.get(Transactions, id)
    render(conn, "show.json", transactions: transaction)
  end

  def delete(conn, %{"id" => id}) do
    transaction = Repo.get(Transactions, id)
    Repo.delete(transaction)
    transactions = Repo.all(Transactions)
    render conn, "index.json", transactions: transactions
  end
end
