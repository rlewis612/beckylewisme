# frozen_string_literal: true

Rails.application.routes.draw do
  root 'resume#index'
  get 'resume/index'
end
