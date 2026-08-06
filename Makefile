.PHONY: help install dev build preview

help:
	@echo "Available commands:"
	@echo "  make install - Install dependencies"
	@echo "  make dev     - Start the development server"
	@echo "  make build   - Build the project for production"
	@echo "  make preview - Preview the production build locally"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview
