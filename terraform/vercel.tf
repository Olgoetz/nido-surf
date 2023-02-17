resource "vercel_project" "landing_page" {
  name      = "nido-surf"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = "Olgoetz/nido-surf"
  }

}

resource "vercel_project_domain" "landing_page_redirect" {
  project_id = vercel_project.landing_page.id
  domain     = "surfspiritfun.de"
}

