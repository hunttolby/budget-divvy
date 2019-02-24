defmodule PhxBudget.Transactions do
  use Ecto.Schema
  import Ecto.Changeset

  schema "transactions" do
    field :category, :string
    field :name, :string
    field :amount, :float
    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:category, :name, :amount])
  end
end
