defmodule PhxBudgetWeb.PageController do
  use PhxBudgetWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
