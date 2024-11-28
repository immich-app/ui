module "pages_project" {
  source = "git::https://github.com/immich-app/devtools.git//tf/shared/modules/cloudflare-pages-project?ref=main"

  cloudflare_api_token          = data.terraform_remote_state.api_keys_state.outputs.terraform_key_cloudflare_account
  cloudflare_account_id         = data.terraform_remote_state.cloudflare_account.outputs.cloudflare_account_id

  app_name = local.app_name
  env      = var.env
}

output "pages_project" {
  value = module.pages_project.pages_project
  sensitive = true
}
