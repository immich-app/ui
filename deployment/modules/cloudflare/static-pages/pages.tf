module "static_pages" {
  source = "git::https://github.com/immich-app/devtools.git//tf/shared/modules/cloudflare-pages?ref=main"

  cloudflare_api_token          = data.terraform_remote_state.api_keys_state.outputs.terraform_key_cloudflare_docs
  cloudflare_account_id         = data.terraform_remote_state.cloudflare_account.outputs.cloudflare_account_id

  pages_project = data.terraform_remote_state.pages_project.outputs.pages_project

  app_name = local.app_name
  stage    = var.stage
  env      = var.env
}

output "pages_branch" {
  value = module.static_pages.pages_branch
}

output "immich_subdomain" {
  value = module.static_pages.branch_subdomain
}

output "pages_branch_subdomain" {
  value = module.static_pages.pages_branch_subdomain
}

output "pages_project_name" {
  value = module.static_pages.pages_project_name
}
