resource "vercel_project" "landing_page" {
  name      = "nido-surf"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = "Olgoetz/nido-surf"
  }
}
