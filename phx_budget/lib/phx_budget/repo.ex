defmodule PhxBudget.Repo do
  use Ecto.Repo,
    otp_app: :phx_budget,
    adapter: Ecto.Adapters.Postgres
end
