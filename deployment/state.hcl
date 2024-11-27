locals {
  tf_state_postgres_conn_str = get_env("TF_VAR_tf_state_postgres_conn_str")
}

remote_state {
  backend = "pg"

  config = {
    conn_str = local.tf_state_postgres_conn_str
  }
}

inputs = {
  tf_state_postgres_conn_str = local.tf_state_postgres_conn_str
}
