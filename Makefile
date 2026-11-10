.PHONY: help install dev build check preview

help:
	@echo "Available commands:"
	@echo "  make install - Install dependencies"
	@echo "  make dev     - Start the development server"
	@echo "  make build   - Build the project for production"
	@echo "  make check   - Build and run the SEO checks"
	@echo "  make preview - Preview the production build locally"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

check:
	npm run check:seo

preview:
	npm run preview
