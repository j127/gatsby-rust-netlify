.PHONY: clean build deploy

help: ## Show this help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

clean: ## Clean artifacts
	npx gatsby clean
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -rf {} +
	@cargo clean

build: ## Build static binary and put it in the functions directory.
	npm run build
	@cargo build --release --target x86_64-unknown-linux-musl
	@mkdir -p functions
	@cp target/x86_64-unknown-linux-musl/release/backend functions

deploy: build ## Deploy the site using Netlify's CLI
	@netlify deploy --prod
