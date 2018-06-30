Schoolify::Application.routes.draw do
  # The priority is based upon order of creation:
  # first created -> highest priority.
  
  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.

  match 'custom' => 'welcome#custom'
  match 'skins' => 'welcome#skins'
  match 'origin' => 'welcome#origin'

  resources :courses
  namespace :admin do
    resources :courses do
      resources :chapters
    end
  
    resources :chapters do
      resources :sections
    end
  end

  controller :welcome do
    post 'login' => :create
    get 'logout' => :destroy
    get 'homepage'=> :homepage
    post 'register'=>:register
    get 'confirm'=>:confirm
    get 'reactivate'=>:reactivate
    post 'identical_email'=>:identical_email
    post 'reactive'=>:reactive
    get 'editor'=>:editor
    post 'upload' =>:upload
    get 'articles' => :articles
    get 'edit_test' => :edit_test
    get 'test_scores' => :test_scores
    get 'test_statistics' => :test_statistics
    get 'highlights' => :highlights
  end

  resources :users do
    member do
		  get 'activate'
		end
  end

  root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
