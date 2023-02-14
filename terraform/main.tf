terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "0.11.4"
    }
  }
}
