# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based documentation site for Holiday Extras Partner API. The site provides comprehensive API documentation for partners integrating with Holiday Extras services including parking, hotels, lounges, transfers, car hire, and insurance.

## Architecture

- **Static Site Generator**: Jekyll with Ruby 3.2.0
- **Theme**: Minima with custom CSS styling
- **Content Structure**: 
  - `site/` - Source markdown files and templates
  - `_site/` - Generated static site (local development)
  - `docs/` - Production build output
- **API Documentation**: Organized by service type under `site/hxapi/`
- **Examples**: XML/JSON response examples in `_examples/` directories

## Development Commands

### Setup
```bash
# Install Ruby and dependencies (one-time setup)
curl -sSL https://get.rvm.io | bash -s stable
rvm install "ruby-3.2.0" --with-openssl-dir=$(brew --prefix openssl@1.1)
gem install bundler
bundle install
```

### Daily Development
```bash
bundle exec rake start           # Start local development server (http://127.0.0.1:4000/)
bundle exec rake build           # Build the site to _site/
bundle exec rake                 # Run full test suite (build + html_proofer)
bundle exec rake html_proofer    # Check generated HTML for issues
bundle exec rake dist            # Update production docs/ directory
```

### Verification Process
Always use `bundle exec` when running rake commands in this Ruby project. After making content changes:

1. **Build and test**: `bundle exec rake build && bundle exec rake html_proofer`
2. **Fix any HTML proofer errors** - common issues include:
   - Broken internal links (use absolute paths like `/hxapi/service/page/` instead of relative paths)
   - Missing image files or broken external links
3. **Verify locally**: `bundle exec rake start` to test changes in browser
4. **Full test suite**: `bundle exec rake` before committing changes

## Content Organization

- **Main API docs**: `site/hxapi/` with subdirectories for each service
- **Payment gateway**: `site/payment-gateway/` for payment-specific docs  
- **Reference data**: `site/hxapi/reference/` for error codes, titles, etc.
- **Examples**: Service-specific example files in `examples/` subdirectories
- **Layouts**: `site/_layouts/` for page templates
- **Includes**: `site/_includes/` for reusable content blocks

## Deployment

- Merges to master automatically deploy via GitHub Actions
- Never modify `docs/` directory directly - it's overwritten by CI
- Use `rake dist` locally to preview production build structure

## Key Files

- `_config.yml` - Jekyll configuration and site settings
- `Rakefile` - Build and development task definitions
- `site/_layouts/default.html` - Main page template
- `site/css/` - Custom styling and Bootstrap integration
