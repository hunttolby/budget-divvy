defmodule PhxBudget.Repo.Migrations.Transactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :category, :string
      add :name, :string
      add :amount, :float

    timestamps()
    end
  end

end
