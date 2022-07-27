Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get '/jobs', to: 'jobs#index'
      post '/jobs', to: 'jobs#create'
      get '/jobs/:id', to: 'jobs#show'
      patch '/jobs/:id', to: 'jobs#update'
      delete '/jobs/:id', to: 'jobs#destroy'
    end
  end

  root 'homes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
