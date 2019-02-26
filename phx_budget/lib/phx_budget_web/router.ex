defmodule PhxBudgetWeb.Router do
  use PhxBudgetWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug CORSPlug, origins: "*"
    plug :accepts, ["json"]
  end

  scope "/", PhxBudget do
    pipe_through :browser

    get "/", PageController, :index
    get "/transactions", TransactionsController, :index
    post "/transactions", TransactionsController, :create
    get "/transactions/:id", TransactionsController, :show
  end

  scope "/api", PhxBudget do
    pipe_through :api

    get "/", PageController, :index
    get "/transactions", TransactionsController, :index
    post "/transactions", TransactionsController, :create
    get "/transactions/:id", TransactionsController, :show
    delete "/transactions/:id", TransactionsController, :delete
    put "/transactions/:id", TransactionsController, :update
    options "/transactions/:id", TransactionsController, :nothing
    options "/transactions", TransactionsController, :nothing
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhxBudgetWeb do
  #   pipe_through :api
  # end
end
